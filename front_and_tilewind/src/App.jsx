import { useState } from 'react'
import Js_logo from './assets/Js.svg';
import Pupp_logo from './assets/Pupp_logo.svg';
import Lock_logo from './assets/Lock.svg';
import White_Lock_logo from './assets/White_lock.svg';
import Dropdown_arrow_logo from './assets/Dropdown_arrow.svg';
import Check_logo from './assets/Check_ico.svg';
import Black_star_logo from './assets/Black_star.svg';
import Arrow_right_logo from './assets/Arrow_right.svg';
import Triple_dot_logo from './assets/Triple_dot_logo.svg'
import Peoples_logo from './assets/Peoples_logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full text-[#333333] h-full">
        <div className="sm:p-10 p-[5px] sm:max-w-[840px] sm:m-5 w-full bg-white sm:rounded-[10px]">
          <div className="flex sm:flex-row flex-col sm:gap-[20px] gap-[10px] sm:mb-0 mb-auto sm:mt-0 mt-[10px]">
            <div className="w-full min-h-[60px] flex gap-[10px] p-[10px] bg-[linear-gradient(64.07deg,#EBF1F8_0%,#D5EEFF_100%)] rounded-[10px]">
              <img className="rounded-[5px] bg-white px-[11px] py-[7px]" src={Lock_logo} />
              <span className="font-semibold text-sm leading-[20px] tracking-[0] max-w-[296px]">Review Puppeteer plugin to solve reCAPTCHAs automatically</span>
            </div>
            <div className="w-full min-h-[60px] items-center flex gap-[10px] p-[10px] bg-[linear-gradient(64.07deg,#EBF1F8_0%,#D5EEFF_100%)] rounded-[10px]">
              <img className="rounded-[5px] bg-white px-[9px] py-[8px]" src={Js_logo} />
              <span className="font-semibold text-sm leading-[20px] tracking-[0]">Review Puppeteer plugin</span>
            </div>
          </div>
          {/* mobile */}
          <div className="sm:hidden flex flex-col">
            <div className="flex py-[23px] sm:px-0 px-[15px]">
              <span className="font-semibold text-[24px] leading-[34px] tracking-[0]" >Software</span>
              <img className="rounded-[5px] bg-white px-[18px] py-[12px] ml-auto" src={Triple_dot_logo} />
            </div>
            <div className="flex justify-center px-[10px] py-[7px] rounded-[5px] border border-[#E1EAF6]">
              <span className="font-normal text-[14px] leading-[26px] tracking-[0]">Sort by: Most relevant</span>
              <img className="ml-auto" src={Dropdown_arrow_logo}/>
            </div>
          </div>
          {/* desktop */}
          <div className="max-sm:hidden flex w-full mt-[29px]">
            <div className="flex">
              <span className="font-semibold text-[24px] leading-[34px] tracking-[0]" >Software</span>
            </div>
            <div className="ml-auto h-[40px] w-[230px] flex items-center px-[10px] py-[7px] rounded-[5px] border border-[#E1EAF6]">
              <span className="font-normal text-[14px] leading-[26px] tracking-[0]">Sort by: Most relevant</span>
              <img className="ml-auto w-[10px]" src={Dropdown_arrow_logo}/>
            </div>
          </div>
          {/* cards mobile */}
          <div className="sm:hidden flex flex-col sm:mt-5 mt-[10px] sm:gap-[20px] gap-[10px]">
            <div className="flex bg-[#F8F9FB] flex-col rounded-[10px] border border-[#E1EAF6] px-[15px] py-[20px]">
              <div className="flex gap-[15px]">
                <img className="rounded-[5px] w-[26px] bg-white mx-4 my-[10px]" src={Lock_logo} />
                <div className="flex flex-col gap-[13px]">
                  <span className="font-semibold text-[20px] leading-[30px] tracking-[0%] max-sm:max-w-[200px]">2Captcha solver <img className="inline align-middle" src={Arrow_right_logo}/></span>
                  <div className="bg-[#00A1B3] flex w-fit rounded-[15px] px-[10px] gap-[4px] text-white">
                    <img className="w-[11.13px]" src={White_Lock_logo}/>
                    <span>Official software</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[7px] mt-4">
                <div className="flex gap-[4px]">
                  <img src={Check_logo} />
                  <span className="text-[14px] leading-[24px] tracking-[0]">This software is designed to work with any site</span>
                </div>
                <div className="flex gap-[4px]">
                  <img src={Peoples_logo} />
                  <span className="text-[14px] leading-[24px] tracking-[0]">1743 Users this week</span>
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-4">
                <div className="flex h-fit gap-[5px] px-[10px] rounded-[12px] bg-[#E1EAF6]">
                  <span className="font-semibold text-[14px] leading-[24px] tracking-[0]">4.6</span>
                  <img src={Black_star_logo} />
                </div>
                <span className="font-nomal text-[14px] leading-[24px] tracking-[0] text-[#5B6A7D]">456 Reviews</span>
                <span className="font-semibold text-[20px] leading-[30px] tracking-[0] text-[#00A1B3] ml-auto">Free</span>
              </div>
            </div>

            <div className="flex bg-[#F8F9FB] flex-col rounded-[10px] border border-[#E1EAF6] px-[15px] py-[20px]">
              <div className="flex gap-[15px]">
                <img className="rounded-[5px] w-[26px] bg-white mx-4 my-[10px]" src={Pupp_logo} />
                <div className="flex flex-col gap-[13px]">
                  <span className="font-semibold text-[20px] leading-[30px] tracking-[0%] max-sm:max-w-[200px]">Puppeteer plugin to solve reCAPTCHAs automatically <img className="inline align-middle" src={Arrow_right_logo}/></span>
                  <div className="bg-[#00A1B3] flex w-fit rounded-[15px] px-[10px] gap-[4px] text-white">
                    <img className="w-[11.13px]" src={White_Lock_logo}/>
                    <span>Official software</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[7px] mt-4">
                <div className="flex gap-[4px]">
                  <img src={Check_logo} />
                  <span className="text-[14px] leading-[24px] tracking-[0]">This software is designed to work with any site</span>
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-4">
                <div className="flex h-fit gap-[5px] px-[10px] rounded-[12px] bg-[#E1EAF6]">
                  <span className="font-semibold text-[14px] leading-[24px] tracking-[0]">4.6</span>
                  <img src={Black_star_logo} />
                </div>
                <span className="font-nomal text-[14px] leading-[24px] tracking-[0] text-[#5B6A7D]">456 Reviews</span>
                <span className="font-semibold text-[20px] leading-[30px] tracking-[0] text-[#00A1B3] ml-auto">$67</span>
              </div>
            </div>

            <div className="flex bg-[#F8F9FB] flex-col rounded-[10px] border border-[#E1EAF6] px-[15px] py-[20px]">
              <div className="flex gap-[15px]">
                <img className="rounded-[5px] w-[26px] bg-white mx-4 my-[10px]" src={Js_logo} />
                <div className="flex flex-col gap-[13px]">
                  <span className="font-semibold text-[20px] leading-[30px] tracking-[0%] max-sm:max-w-[200px]">2captcha-javascript <img className="inline align-middle" src={Arrow_right_logo}/></span>
                </div>
              </div>
              <div className="flex flex-col gap-[7px] mt-4">
                <div className="flex gap-[4px]">
                  <img src={Check_logo} />
                  <span className="text-[14px] leading-[24px] tracking-[0]">This software is designed to work with any site</span>
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-4">
                <div className="flex h-fit gap-[5px] px-[10px] rounded-[12px] bg-[#E1EAF6]">
                  <span className="font-semibold text-[14px] leading-[24px] tracking-[0]">4.6</span>
                  <img src={Black_star_logo} />
                </div>
                <span className="font-nomal text-[14px] leading-[24px] tracking-[0] text-[#5B6A7D]">456 Reviews</span>
                <span className="font-semibold text-[20px] leading-[30px] tracking-[0] text-[#00A1B3] ml-auto">$67</span>
              </div>
            </div>
          </div>
          {/* cards desktop */}
          <div className=" max-sm:hidden flex flex-col sm:mt-5 mt-[10px] sm:gap-[20px] gap-[10px]">
            <div className="flex relative bg-[#F8F9FB] flex-col rounded-[10px] border border-[#E1EAF6] px-[15px] py-[20px]">
              <div className="flex gap-[15px]">
                <img className="rounded-[5px] w-[40px] bg-white mx-4 my-[10px]" src={Lock_logo} />
                <div className="flex flex-col gap-[13px]">
                  <span className="font-semibold text-[20px] leading-[30px] tracking-[0%] max-[770px]:max-w-[400px]">2Captcha solver <img className="inline align-middle" src={Arrow_right_logo}/></span>
                  <div className="flex flex-wrap gap-[20px]">
                    <div className="flex gap-[4px]">
                      <img src={Check_logo} />
                      <span className="text-[14px] leading-[24px] tracking-[0]">This software is designed to work with any site</span>
                    </div>
                    <div className="flex gap-[4px]">
                      <img src={Peoples_logo} />
                      <span className="text-[14px] leading-[24px] tracking-[0]">1743 Users this week</span>
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="flex h-fit gap-[5px] px-[10px] rounded-[12px] bg-[#E1EAF6]">
                      <span className="font-semibold text-[14px] leading-[24px] tracking-[0]">4.6</span>
                      <img src={Black_star_logo} />
                    </div>
                    <span className="font-nomal text-[14px] leading-[24px] tracking-[0] text-[#5B6A7D]">456 Reviews</span>
                    <div className="bg-[#00A1B3] flex w-fit rounded-[15px] px-[10px] gap-[4px] text-white">
                      <img className="w-[11.13px]" src={White_Lock_logo}/>
                      <span>Official software</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-4 absolute right-5 top-[-4px]">
                <span className="font-semibold text-[20px] leading-[30px] tracking-[0] text-[#00A1B3] ml-auto">Free</span>
              </div>
              <div className="mt-[13px]">
                  <span className="text-[14px] font-normal leading-[24px] tracking-[0] text-[#5B6A7D]">Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others.</span>
              </div>
            </div>

            <div className="flex relative bg-[#F8F9FB] flex-col rounded-[10px] border border-[#E1EAF6] px-[15px] py-[20px]">
              <div className="flex gap-[15px]">
                <img className="rounded-[5px] w-[40px] bg-white mx-4 my-[10px]" src={Pupp_logo} />
                <div className="flex flex-col gap-[13px]">
                  <span className="font-semibold text-[20px] leading-[30px] tracking-[0%] max-[770px]:max-w-[400px]">Puppeteer plugin to solve reCAPTCHAs automatically <img className="inline align-middle" src={Arrow_right_logo}/></span>
                  <div className="flex flex-wrap gap-[20px]">
                    <div className="flex gap-[4px]">
                      <img src={Check_logo} />
                      <span className="text-[14px] leading-[24px] tracking-[0]">This software is designed to work with any site</span>
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="flex h-fit gap-[5px] px-[10px] rounded-[12px] bg-[#E1EAF6]">
                      <span className="font-semibold text-[14px] leading-[24px] tracking-[0]">4.6</span>
                      <img src={Black_star_logo} />
                    </div>
                    <span className="font-nomal text-[14px] leading-[24px] tracking-[0] text-[#5B6A7D]">456 Reviews</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-4 absolute right-5 top-[-4px]">
                <span className="font-semibold text-[20px] leading-[30px] tracking-[0] text-[#00A1B3] ml-auto">$67</span>
              </div>
              <div className="mt-[13px]">
                  <span className="text-[14px] font-normal leading-[24px] tracking-[0] text-[#5B6A7D]">Solves reCAPTCHAs automatically, using a single line of code.</span>
              </div>
            </div>

            <div className="flex relative bg-[#F8F9FB] flex-col rounded-[10px] border border-[#E1EAF6] px-[15px] py-[20px]">
              <div className="flex gap-[15px]">
                <img className="rounded-[5px] w-[40px] bg-white mx-4 my-[10px]" src={Js_logo} />
                <div className="flex flex-col gap-[13px]">
                  <span className="font-semibold text-[20px] leading-[30px] tracking-[0%] max-[770px]:max-w-[400px]">2captcha-javascript <img className="inline align-middle" src={Arrow_right_logo}/></span>
                  <div className="flex flex-wrap gap-[20px]">
                    <div className="flex gap-[4px]">
                      <img src={Check_logo} />
                      <span className="text-[14px] leading-[24px] tracking-[0]">This software is designed to work with any site</span>
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="flex h-fit gap-[5px] px-[10px] rounded-[12px] bg-[#E1EAF6]">
                      <span className="font-semibold text-[14px] leading-[24px] tracking-[0]">4.6</span>
                      <img src={Black_star_logo} />
                    </div>
                    <span className="font-nomal text-[14px] leading-[24px] tracking-[0] text-[#5B6A7D]">456 Reviews</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-4 absolute right-5 top-[-4px]">
                <span className="font-semibold text-[20px] leading-[30px] tracking-[0] text-[#00A1B3] ml-auto">Free</span>
              </div>
              <div className="mt-[13px]">
                  <span className="text-[14px] font-normal leading-[24px] tracking-[0] text-[#5B6A7D]">JavaScript npm package for easy integration with the API of 2captcha captcha solving service to bypass recaptcha, funcaptcha, geetest and solve any other captchas.</span>
              </div>
            </div>

            <div className="flex relative bg-[#F8F9FB] flex-col rounded-[10px] border border-[#E1EAF6] px-[15px] py-[20px]">
              <div className="flex gap-[15px]">
                <img className="rounded-[5px] w-[40px] bg-white mx-4 my-[10px]" src={Pupp_logo} />
                <div className="flex flex-col gap-[13px]">
                  <span className="font-semibold text-[20px] leading-[30px] tracking-[0%] max-[770px]:max-w-[400px]">Puppeteer plugin to solve reCAPTCHAs automatically <img className="inline align-middle" src={Arrow_right_logo}/></span>
                  <div className="flex flex-wrap gap-[20px]">
                    <div className="flex gap-[4px]">
                      <img src={Check_logo} />
                      <span className="text-[14px] leading-[24px] tracking-[0]">This software is designed to work with any site</span>
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="flex h-fit gap-[5px] px-[10px] rounded-[12px] bg-[#E1EAF6]">
                      <span className="font-semibold text-[14px] leading-[24px] tracking-[0]">4.6</span>
                      <img src={Black_star_logo} />
                    </div>
                    <span className="font-nomal text-[14px] leading-[24px] tracking-[0] text-[#5B6A7D]">456 Reviews</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-4 absolute right-5 top-[-4px]">
                <span className="font-semibold text-[20px] leading-[30px] tracking-[0] text-[#00A1B3] ml-auto">$67</span>
              </div>
              <div className="mt-[13px]">
                  <span className="text-[14px] font-normal leading-[24px] tracking-[0] text-[#5B6A7D]">Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others.</span>
              </div>
            </div>

            <div className="flex relative bg-[#F8F9FB] flex-col rounded-[10px] border border-[#E1EAF6] px-[15px] py-[20px]">
              <div className="flex gap-[15px]">
                <img className="rounded-[5px] w-[40px] bg-white mx-4 my-[10px]" src={Pupp_logo} />
                <div className="flex flex-col gap-[13px]">
                  <span className="font-semibold text-[20px] leading-[30px] tracking-[0%] max-[770px]:max-w-[400px]">Puppeteer plugin to solve reCAPTCHAs automatically <img className="inline align-middle" src={Arrow_right_logo}/></span>
                  <div className="flex flex-wrap gap-[20px]">
                    <div className="flex gap-[4px]">
                      <img src={Check_logo} />
                      <span className="text-[14px] leading-[24px] tracking-[0]">This software is designed to work with any site</span>
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="flex h-fit gap-[5px] px-[10px] rounded-[12px] bg-[#E1EAF6]">
                      <span className="font-semibold text-[14px] leading-[24px] tracking-[0]">4.6</span>
                      <img src={Black_star_logo} />
                    </div>
                    <span className="font-nomal text-[14px] leading-[24px] tracking-[0] text-[#5B6A7D]">456 Reviews</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-4 absolute right-5 top-[-4px]">
                <span className="font-semibold text-[20px] leading-[30px] tracking-[0] text-[#00A1B3] ml-auto">$67</span>
              </div>
              <div className="mt-[13px]">
                  <span className="text-[14px] font-normal leading-[24px] tracking-[0] text-[#5B6A7D]">Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others.</span>
              </div>
            </div>
          </div>
          {/* load more */}
          <div className="flex justify-center items-center gap-[10px] sm:mt-[30px] mt-[10px] px-[10px] py-[7px] rounded-[5px] border border-[#E1EAF6]">
              <span className="font-normal text-[14px] leading-[24px] tracking-[0] text-[#5B6A7D]">Load more</span>
              <img src={Dropdown_arrow_logo}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
