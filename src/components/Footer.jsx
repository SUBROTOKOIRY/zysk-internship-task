import React from 'react'

function Footer() {
   const footerDetails = [
     {
       title: 'Product',
       links: [
         {
           name: 'Overview',
           link: '#',
         },
         {
           name: 'Features',
           link: '#',
         },
         {
           name: 'Solutions',
           link: '#',
         },
         {
           name: 'Tutorials',
           link: '#',
         },
         {
           name: 'Pricing',
           link: '#',
         },
         {
           name: 'Releases',
           link: '#',
         },
       ],
     },
     {
       title: 'Company',
       links: [
         {
           name: 'About Us',
           link: '#',
         },
         {
           name: 'Careers',
           link: '#',
         },
         {
           name: 'Press',
           link: '#',
         },
         {
           name: 'News',
           link: '#',
         },
         {
           name: 'Media Kit',
           link: '#',
         },
         {
           name: 'Contact',
           link: '#',
         },
       ],
     },
     {
       title: 'Resources',
       links: [
         {
           name: 'Blog',
           link: '#',
         },
         {
           name: 'Newsletter',
           link: '#',
         },
         {
           name: 'Events',
           link: '#',
         },
         {
           name: 'Help centre',
           link: '#',
         },
         {
           name: 'Tutorials',
           link: '#',
         },
         {
           name: 'Support',
           link: '#',
         },
       ],
     },
     {
       title: 'Use cases',
       links: [
         {
           name: 'Startups',
           link: '#',
         },
         {
           name: 'Enterprise',
           link: '#',
         },
         {
           name: 'Government',
           link: '#',
         },
         {
           name: 'Saas Centre',
           link: '#',
         },
         {
           name: 'Marketplaces',
           link: '#',
         },
         {
           name: 'E-commerce',
           link: '#',
         },
       ],
     },
     
     {
       title: 'Social',
       links: [
         {
           name: 'Twitter',
           link: '#',
         },
         {
           name: 'Linkedin',
           link: '#',
         },
         {
           name: 'Facebook',
           link: '#',
         },
         {
           name: 'Github',
           link: '#',
         },
         {
           name: 'AngelList',
           link: '#',
         },
         {
           name: 'Dribble',
           link: '#',
         },
       ],
     },
     {
       title: 'Legal',
       links: [
         {
           name: 'Terms',
           link: '#',
         },
         {
           name: 'Privacy',
           link: '#',
         },
         {
           name: 'Cookies',
           link: '#',
         },
         {
           name: 'Licences',
           link: '#',
         },
         {
           name: 'Settings',
           link: '#',
         },
         {
           name: 'Contact',
           link: '#',
         },
       ],
     },
   ]

  return (
    <div className="lg:pt-16  pb-12 lg:px-32">
      <div className="flex justify-start items-center px-8">
        <div className="grid lg:grid-cols-6 grid-cols-2 gap-y-8 lg:gap-8">
          {footerDetails.map((detail, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-4 w-44 h-60 box-border"
            >
              <p className="border-[#667085ff] text-sm leading-[143%] font-inter font-[600]">
                {detail.title}
              </p>
              <div className="flex  flex-col justify-start items-start gap-3 w-[100%] box-border">
                {detail.links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="flex flex-row justify-start items-center gap-2 w-[undefinedundefined] box-border"
                  >
                    <div className="flex flex-row justify-center items-center gap-2 w-[100%] h-[100%] box-border">
                      <p className="border-[#475467ff] text-base leading-[150%] font-inter font-[600]">
                        {link.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:px-8 px-4  mt-16   ">
        <div className="py-8 border-t-2  flex-cols lg:flex justify-between">
          <div className="w-[142px] h-[32px]">
            <img src="/Footer/Logo.svg" alt="Not Found" />
          </div>
          <img className="mt-6 lg:mt-0" src="/Footer/copyright.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
