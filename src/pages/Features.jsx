import React from 'react'
import FeatureCard from '../components/Featurecard'

function Features() {
  const featureCardDetails = [
    {
      id: 1,
      image: '/featcher/message.svg',
      title: 'Share team inboxes',
      description:
        'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    },
    {
      id: 2,
      image: '/featcher/lightning.svg',
      title: 'Deliver instant answers',
      description:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    },
    {
      id: 3,
      image: '/featcher/team.svg',
      title: 'Manage your team with reports',
      description:
        'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    },
    {
      id: 4,
      image: '/featcher/happy.svg',
      title: 'Connect with customers',
      description:
        'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    },
    {
      id: 5,
      image: '/featcher/tools.svg',
      title: 'Connect the tools you already use',
      description:
        'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    },
    {
      id: 6,
      image: '/featcher/heart.svg',
      title: 'Our people make the difference',
      description:
        'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    },
  ]
  return (
    <div className="lg:pt-24">
      <div className="flex flex-col items-center justify-center lg:px-4 px-4 mb-16">
        <div className=" text-purple-600 font-semibold flex items-center justify-center h-8 py-3 px-1 ">
          <div>Features</div>
        </div>
        <p className="  font-inter lg:text-4xl text-3xl tracking-tighter font-semibold text-center mt-4 mb-6">
          Analytics that feels like it’s from the future
        </p>
        <div className="flex justify-center items-center ">
          <p className="lg:max-w-3xl text-center min-w-sm text-center font-inter font-normal text-grey-100  text-xl  leading-7">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-8 mx-8 lg:mx-20 gap-8 gap-y-16">
        {featureCardDetails.map((featureCard) => (
          <FeatureCard key={featureCard.id} featureCard={featureCard} />
        ))}
      </div>

      <div className=" flex flex-col justify-center items-center h-[552px] mt-24  py-24 lg:px-36 box-border  bg-[rgba(249,250,251,1)]">
        <div className=" flex flex-col justify-center items-center gap-8 h-[100%] box-border">
          <div className=" flex flex-col justify-center items-center gap-10 w-[100%] h-[100%] box-border">
            <div className=" flex flex-col justify-center items-center gap-8 w-[100%] h-[100%] box-border">
              <img
                src="/featcher/sisyphus.svg"
                alt="Not Found"
                className=" w-[140.83px] h-10"
              />
              <p className=" flex flex-col justify-center  border-[#101828ff] lg:text-5xl text-3xl  leading-[125%]  font-inter  font-[500] text-center  tracking-[-0.96px]">
                We’ve been using Untitled to kick start every new project and
                can’t imagine working without it.
              </p>
              <div className=" relative flex flex-col justify-center items-center gap-4 w-[100%] box-border">
                <img
                  src="/featcher/Avatar.svg"
                  alt="Not Found"
                  className=" w-16 h-16"
                />
                <div className=" flex flex-col justify-start items-center gap-1 w-[100%] box-border">
                  <p className=" flex flex-col justify-center  border-[#101828ff] text-lg  leading-[156%]  font-inter  font-[600] text-center">
                    Candice Wu
                  </p>
                  <p className=" flex flex-col justify-center  border-[#475467ff] text-base  leading-[150%]  font-inter  font-[400] text-center">
                    Product Manager, Sisyphus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
