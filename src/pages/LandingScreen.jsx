import React from 'react'

function LandingScreen() {
  return (
    <div className="lg:pt-24 pt-16">
      <div className=" lg:px-8 px-4 ">
        {/* heading & supporting part */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-purple-50 text-purple-600 font-semibold flex items-center justify-center h-8 py-3 px-1 bg-slate-100 border border-purple-600 rounded-full">
            <div className=" border border-purple-500 rounded-full sm:h-6 h-[22px] w-[88px] sm:w-[120px] sm:px-2 flex justify-center items-center px-1 bg-white">
              <p className="text-xs lg:text-sm">New feature</p>
            </div>
            <div className="text-center lg:font-medium w-[200px] sm:w-[220px]">
              <p className="text-xs lg:text-sm mr-0">
                Check out the team dashboard
              </p>
            </div>
            <img className="w-3 h-3 mr-2" src="/Landing/arrow.png" alt="" />
          </div>
          <h2 className=" lg:text-6xl font-inter text-4xl font-semibold text-center mt-4 mb-6">
            Beautiful analytics to grow smarter
          </h2>
          <div className="flex justify-center items-center">
            <p className="lg:max-w-3xl min-w-sm text-center font-inter font-normal leading-7 text-grey-100 text-[18px]  leading-1.75">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
        </div>
        <div className="hidden md:block lg:flex lg:items-center lg:justify-center mt-12 ">
          <div className="flex justify-center">
            <div className="flex justify-between ">
              <div className="flex justify-center items-center lg:py-2.5 lg:px-5 border-2 rounded-lg  lg:mr-3 w-[143px] h-[60px]  space-x-2">
                <img src="/Landing/video.png" className="h-4 w-4" alt="" />
                <h5 className="font-inter text-lg font-semibold">Demo</h5>
              </div>
              <div className="flex justify-center items-center ml-3 py-2.5 px-5 w-[122px] h-[60px] border-2 rounded-lg bg-violet-100">
                <h5 className="text-white font-semibold">Sign up</h5>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile */}
        <div className="lg:hidden sm:hidden block lg:flex lg:items-center lg:justify-center mt-12 ">
          <div className="flex flex-col justify-between ">
            <div className="flex justify-center items-center text-center min-h-14 min-w-5 border-2 rounded-xl bg-violet-100 mb-3">
              <h5 className="text-white text-xl font-semibold">Sign up</h5>
            </div>
            <div className="flex justify-center items-center text-center min-h-14 min-w-6 border-2 rounded-xl  lg:mr-3  space-x-3">
              <img src="/Landing/video.png" className="h-4 w-4 mt-0.5" alt="" />
              <h5 className="font-inter text-xl font-semibold">Demo</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:block hidden flex justify-center lg:px-8 px-4 mt-16">
        <div className="flex justify-center">
          <div className="lg:max-w-screen-xl">
            <img
              src="/Landing/screen-1.svg"
              className=" object-contain lg:h-[580px] "
              alt=""
            />
            <div className="px-8">
              <hr className="px-8" />
            </div>
          </div>
        </div>
      </div>
      {/* for mobile */}
      <div className="sm:hidden block flex justify-center mt-16 px-2">
        <img
          src="/Landing/screen-1-mob.png"
          className=" w-[380px] h-[300px] "
          alt=""
        />
      </div>
      {/* Social proof section */}
      <div className="lg:py-24 lg:px-[80px] mb-10 lg:mb-0 mr-2 flex flex-col justify-center">
        <div className="flex justify-center">
          <p className="text-center ">join 4000+ companies already growing</p>
        </div>
        <div className="lg:px-[70px]  py-[24px]  ">
          <div className="grid grid-cols-2 lg:gap-4 lg:grid-cols-6 ">
            <div className="flex justify-around items-center px-5">
              <img
                className="lg:h-[52px] h-[36px]"
                src="companies/boltshift.svg"
                alt=""
              />
              
            </div>
            <div className="flex justify-around items-center px-5">
              <img
                className="lg:h-[52px] h-[36px]"
                src="companies/lightbox.svg"
                alt=""
              />
            </div>
            <div className="flex justify-around items-center px-5">
              <img
                className="lg:h-[52px] h-[36px]"
                src="companies/featherdev.svg"
                alt=""
              />
              
            </div>
            <div className="flex justify-around items-center px-5">
              <img
                className="lg:h-[52px] h-[36px]"
                src="companies/spherule.svg"
                alt=""
              />
            
            </div>
            <div className="flex justify-around items-center px-5">
              <img
                className="lg:h-[52px] h-[36px]"
                src="companies/globalbank.svg"
                alt=""
              />
             
            </div>
            <div className="flex justify-around items-center px-5">
              <img
                className="lg:h-[52px] h-[36px]"
                src="companies/nietzsche.svg"
                alt=""
              />
              
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-40 ">
        <hr />
      </div>
    </div>
  )
}

export default LandingScreen
