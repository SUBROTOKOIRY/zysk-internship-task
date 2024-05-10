import React from 'react'

function Analytics() {
  const analyticsCardDetails = [
    {
      id: 1,
      image:
        '/Feature&Analytic/chat.svg',
      title: 'Share team inboxes',
      description:
        'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    },
    {
      id: 2,
      image:
        '/Feature&Analytic/lightning.svg',
      title: 'Deliver instant answers',
      description:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    },
    {
      id: 3,
      image:
        '/Feature&Analytic/team.svg',
      title: 'Manage your team with reports',
      description:
        'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    },
  ]
  return (
    <div className="lg:px-20 lg:py-24 py-16">
      <div className="flex flex-col items-center justify-center px-4 mb-16  ">
        <div className=" text-purple-600 bg-purple-50 font-semibold flex items-center justify-center h-7 py-3 px-1 border-2 border-purple-100 rounded-2xl px-3 py-1">
          <div>Features</div>
        </div>
        <p className="  font-inter lg:text-4xl  font-bold text-center mt-4 mb-6">
          Cutting-edge features for advanced analytics
        </p>
        <div className="flex justify-center items-center ">
          <p className="lg:max-w-3xl min-w-sm text-center font-inter font-normal text-grey-100  text-xl  leading-7">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
      </div>
      <div className="lg:mt-16  ">
        <div className="hidden lg:block lg:mb-[-80px] flex justify-center items-center ">
          <img
            className="object-cover"
            src="/Feature&Analytic/Content.svg"
            alt="ff"
          />
        </div>
        <div className="lg:hidden block flex mb-12 justify-center items-center">
          <img
            className="object-cover"
            src="/Feature&Analytic/Content-1.svg"
            alt="ff"
          />
        </div>
      </div>

      {/*Analytics Cards */}
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-y-10 px-8">
        {analyticsCardDetails.map((card) => (
          <div className=" flex flex-col justify-start items-center gap-5 lg:w-96 h-[222px] box-border">
            <img src={card.image} className=" w-12 h-12" />
            <div className=" flex flex-col justify-start items-center gap-2 w-[100%] box-border">
              <p className=" flex flex-col justify-center  border-[#101828ff] text-xl  leading-[150%]  font-inter  font-[600] text-center">
                {card.title}
              </p>
              <p className=" flex flex-col justify-center  border-[#475467ff] text-base  leading-[150%]  font-inter  font-[400] text-center">
                {card.description}
              </p>
            </div>
            <div className=" flex flex-row justify-center items-center gap-2 w-[undefinedundefined] box-border">
              <a className="flex gap-x-2" href="#">
                <p className="  border-[#6941c6ff] text-violet-100 text-base  leading-[150%]  font-inter  font-[600]">
                  Learn more
                </p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/tcpbkh191k-I1%3A18132%3B1652%3A397711%3B3287%3A458611%3B3468%3A568384?alt=media&token=d6fe80b5-fafc-4236-b448-d6caf4986ee9"
                  alt="Not Found"
                  className=" w-5 h-5"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Analytics
