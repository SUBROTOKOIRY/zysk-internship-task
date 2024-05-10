import React from 'react'

function FeatureCard(props) {
  return (
    <div className=" flex flex-col justify-start items-center lg:h-[178px] box-border px-0">
      <div className="border-2 border-grey flex justify-center items-center rounded-xl w-12 h-12 mb-5">
        <img
          className="w-5 h-5"
          src={props.featureCard.image}
          alt="Not Found"
        />
      </div>
      <div className=" flex flex-col justify-center items-center gap-2 w-[100%] box-border">
        <p className=" flex flex-col justify-center  border-[#101828ff] text-xl  leading-[150%]  font-inter  font-[600] text-center">
          {props.featureCard.title}
        </p>
        <p className=" flex flex-col justify-center  border-[#475467ff] text-base  leading-[150%]  font-inter  font-[400] text-center">
          {props.featureCard.description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard
