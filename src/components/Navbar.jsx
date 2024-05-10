import React from 'react'

function Navbar() {
  return (
    <>
      <div className="h-[72px] sm:h-20 w-full">
        <div className="flex justify-center items-center py-[20px]">
          <div className=" flex flex-row justify-between items-center w-[1280px] px-8 box-border">
            <div className=" flex flex-row justify-start items-center gap-10 h-[undefinedundefined] box-border">
              <img
                src="Navbar/Logo-main.svg"
                alt="Not Found"
                className=" w-[142px] h-[100%]"
              />
              <div className="hidden lg:block lg:flex justify-start items-center gap-8 h-[100%] box-border">
                <div className=" flex flex-row justify-center items-center gap-2 h-[undefinedundefined] box-border">
                  <p className="  border-[#475467ff] text-base  leading-[150%]  font-inter  font-[600]">
                    Home
                  </p>
                </div>
                <div className=" flex flex-col justify-start items-center h-[100%] py-1 box-border">
                  <div className=" flex flex-row justify-center items-center gap-2 w-[100%] h-[100%] box-border">
                    <p className="  border-[#475467ff] text-base  leading-[150%]  font-inter  font-[600]">
                      Products
                    </p>
                    <img
                      src="Navbar/Icondrop.svg"
                      alt="Not Found"
                      className=" w-[10px] h-[5px]"
                    />
                  </div>
                </div>
                <div className=" flex flex-col justify-start items-center h-[100%] py-1 box-border">
                  <div className=" flex flex-row justify-center items-center gap-2 w-[100%] h-[100%] box-border">
                    <p className="  border-[#475467ff] text-base  leading-[150%]  font-inter  font-[600]">
                      Resources
                    </p>
                    <img
                      src="Navbar/Icondrop.svg"
                      alt="Not Found"
                      className=" w-[10px] h-[5px]"
                    />
                  </div>
                </div>
                <div className=" flex flex-row justify-center items-center gap-2 h-[undefinedundefined] box-border">
                  <p className="  border-[#475467ff] text-base  leading-[150%]  font-inter  font-[600]">
                    Pricing
                  </p>
                </div>
              </div>
            </div>
            <img
              src="Navbar/hamberger.svg"
              alt="Not Found"
              className="lg:hidden block w-[18px] h-[100%]"
            />
            <img
              src="Navbar/Avatar.png"
              alt="Not Found"
              className="hidden lg:block w-10 h-[100%]"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
