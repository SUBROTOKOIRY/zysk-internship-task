import React from 'react'
import BlogCard from '../components/BlogCard'
function Blog() {
    const BlogCardDetails = [
      {
        id: 1,
        image: 'blog/design.svg',
        title: 'Design',
        blogTitle: 'UX review presentations',
        arrow: 'blog/Iconarrow.svg',
        blogDescription:
          'How do you create compelling presentations that wow your colleagues and impress your managers?',
        writerImage: 'blog/Avatar1.png',
        writerName: 'Olivia Rhye',
        date: '20 Jan 2024',
      },
      {
        id: 2,
        image: 'blog/product.svg',
        title: 'Design',
        blogTitle: 'UX review presentations',
        arrow: 'blog/Iconarrow.svg',
        blogDescription:
          'How do you create compelling presentations that wow your colleagues and impress your managers?',
        writerImage: 'blog/Avatar2.png',
        writerName: 'Phoenix Baker',
        date: '19 Jan 2024',
      },
      {
        id: 3,
        image: 'blog/se.svg',
        title: 'Design',
        blogTitle: 'UX review presentations',
        arrow: 'blog/Iconarrow.svg',
        blogDescription:
          'How do you create compelling presentations that wow your colleagues and impress your managers?',
        writerImage: 'blog/Avatar3.png',
        writerName: 'Lana Steiner',
        date: '18 Jan 2024',
      },
    ]
  return (
    <div className="flex-col justify-center items-center gap-y-16">
      <div className="lg:px-20 lg:py-24 px-4 py-8 flex justify-center items-center">
        <div className="lg:grid lg:grid-cols-8  flex justify-center gap-3 max-w-[100vw]">
          <div className=" col-span-7 flex flex-col justify-start items-start gap-3">
            <p className="border-[#6941c6ff] text-base text-violet-100 leading-[150%] font-inter font-[600]">
              Our blog
            </p>
            <p className="border-[#101828ff] text-3xl lg:text-4xl leading-[122%] font-inter font-[600] tracking-[-0.72px]">
              Latest blog posts
            </p>
            <p className="border-[#475467ff] text-base lg:text-xl text-grey-100 leading-[150%] font-inter font-[400]">
              Tools and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <div className="lg:block hidden flex justify-start items-start gap-3">
            <div className="flex justify-center items-center gap-2 px-4 py-2.5 border border-[#7f56d9ff] border-solid rounded-lg bg-[rgba(127,86,217,1)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              <p className="border-[#ffffffff] text-base text-white leading-[150%] font-inter font-[600]">
                View all posts
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center lg:px-40 px-4 lg:pb-24">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-12 gap-x-8 ">
          {BlogCardDetails.map((blogCard) => {
            return <BlogCard key={blogCard.id} blogCard={blogCard} />
          })}
        </div>
      </div>
      <div className="lg:hidden block px-4 pt-12 pb-16 ">
        <div className="flex justify-center items-center gap-2 px-4 py-2.5 border border-[#7f56d9ff] border-solid rounded-lg bg-[rgba(127,86,217,1)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <p className="border-[#ffffffff] text-base text-white leading-[150%] font-inter font-[600]">
            View all posts
          </p>
        </div>
      </div>
      <div className="lg:px-20 lg:py-24 bg-[rgba(249,250,251,1)]">
        <div className="flex flex-col items-center justify-center lg:px-4 px-4 mb-16">
          <p className="  font-inter lg:text-4xl text-3xl tracking-tighter font-semibold text-center mt-4 mb-6">
            Start your free trial
          </p>
          <div className="flex justify-center items-center ">
            <p className="lg:max-w-2xl text-center min-w-sm text-center font-inter font-normal text-grey-100  text-xl  leading-7">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:flex lg:items-center lg:justify-center mt-12 ">
          <div className="flex justify-center">
            <div className="flex justify-between ">
              <div className="flex justify-center items-center border-2 rounded-lg  lg:mr-3 w-[128px] h-[48px]">
                <h5 className="font-inter text-base font-semibold">
                  Learn more
                </h5>
              </div>
              <div className="flex justify-center items-center ml-3 py-2.5 px-5 w-[129px] h-[48px] border-2 rounded-lg bg-violet-100">
                <h5 className="text-white text-base font-semibold">
                  Get Started
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile */}
        <div className="lg:hidden  block lg:flex lg:items-center lg:justify-center mt-12 ">
          <div className="flex flex-col justify-between ">
            <div className="lg:hidden block px-4 pt-12 pb-3">
              <div className="flex justify-center items-center gap-2 px-4 py-2.5 border border-[#7f56d9ff] border-solid rounded-lg bg-[rgba(127,86,217,1)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <p className="border-[#ffffffff] text-base text-white leading-[150%] font-inter font-[600]">
                  Get Started
                </p>
              </div>
            </div>
            <div className="lg:hidden block px-4 pb-16 ">
              <div className="flex justify-center items-center gap-2 px-4 py-2.5 border-2 rounded-lg">
                <p className="font-inter text-base font-semibold">
                  Learn more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
