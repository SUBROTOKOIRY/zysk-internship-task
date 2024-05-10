import React from 'react'

function AnalyticsCard() {
  return (
    <div className=" flex flex-col justify-start items-center gap-5 w-96 h-[222px] box-border">
      <img src="featcher/message.svg" alt="Not Found" className=" w-12 h-12" />
      <div className=" flex flex-col justify-start items-center gap-2 w-[100%] box-border">
        <p className=" flex flex-col justify-center  border-[#101828ff] text-xl  leading-[150%]  font-inter  font-[600] text-center">
          Share team inboxes
        </p>
        <p className=" flex flex-col justify-center  border-[#475467ff] text-base  leading-[150%]  font-inter  font-[400] text-center">
          Whether you have a team of 2 or 200, our shared team inboxes keep
          everyone on the same page and in the loop.
        </p>
      </div>
      <div className=" flex flex-row justify-center items-center gap-2 w-[undefinedundefined] box-border">
        <p className="  border-[#6941c6ff] text-base  leading-[150%]  font-inter  font-[600]">
          Learn more
        </p>
        <img src="featcher/message.svg" alt="Not Found" className=" w-5 h-5" />
      </div>
    </div>
  )
}

export default AnalyticsCard
