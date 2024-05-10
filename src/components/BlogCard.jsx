import React from 'react'

function blogCard(props) {
  return (
    <div className=" flex flex-col justify-start items-start rounded-sm  box-border">
      <div className=" flex flex-col justify-start items-start gap-6 w-[100%] box-border">
        <img className="mb-" src={props.blogCard.image} alt="" />
        <div className=" flex flex-col justify-start items-start gap-2 w-[100%] box-border">
          <p className="  border-[#6941c6ff] text-violet-100 text-sm  leading-[143%]  font-inter  font-[600]">
            {props.blogCard.title}
          </p>
          <div className=" flex flex-col justify-start items-start gap-2 w-[100%] box-border">
            <div className=" flex flex-row justify-between items-start gap-4 w-[100%] box-border">
              <p className="  border-[#101828ff] text-2xl  leading-[133%]  font-inter  font-[600]">
                {props.blogCard.blogTitle}
              </p>
              <div className="py-2">
                <img src={props.blogCard.arrow} alt="Not Found" className="" />
              </div>
            </div>
            <p className="  border-[#475467ff] text-base text-grey-100  leading-[150%]  font-inter  font-[400]">
              {props.blogCard.blogDescription}
            </p>
          </div>
        </div>
        <div className=" flex flex-row justify-start items-center gap-3 w-[undefinedundefined] box-border">
          <img
            src={props.blogCard.writerImage}
            alt="Not Found"
            className=" w-10 h-[100%]"
          />
          <div className=" flex flex-col justify-start items-start h-[100%] box-border">
            <p className="  border-[#101828ff] text-sm  leading-[143%]  font-inter  font-[600]">
              {props.blogCard.writerName}
            </p>
            <p className="  border-[#475467ff] text-sm text-grey-100  leading-[143%]  font-inter  font-[400]">
              {props.blogCard.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default blogCard
