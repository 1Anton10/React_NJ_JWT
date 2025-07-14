const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register route
router.post('/', authController.register);

// Authentication route
router.post('/auth', authController.authenticate);

module.exports = router;