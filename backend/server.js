const express = require('express');
const { Sequelize } = require('sequelize');
require('dotenv').config();
const morgan = require('morgan');

const app = express();
const cors = require('cors');

// Настройки CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Укажите адрес вашего фронтенда
  credentials: true, // Разрешить передачу куки
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Добавьте обработку OPTIONS запросов
app.options('*', cors(corsOptions));
// Middleware
app.use(express.json());
app.use(morgan('dev')); // Логирование запросов с помощью morgan

// Custom logging middleware
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${res.statusCode} [${duration}ms]`);
  });

  next();
});

// Database connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  "root",
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: console.log
  }
);

// Test DB connection and start server
async function initialize() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    // Sync models (optional)
    await sequelize.sync();
    console.log('All models synchronized.');
    
    // Start Express server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);    });
    
  } catch (error) {
    console.error('Unable to start application:', error);
    process.exit(1);
  }
}

initialize();

// Добавьте роуты после этого (важно!)
const authRoutes = require('./routes/authRoutes');
app.use('/user', authRoutes);

// Keep-alive route
app.get('/', (req, res) => {
  res.send('Auth API is running');
});

// Обработка ошибок для всех маршрутов
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

