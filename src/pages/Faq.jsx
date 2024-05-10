import React from 'react'

function Faq() {
    const faqDetails = [
      {
        id: 1,
        question: 'Is there a free trial available?',
        answer:
          'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
      },
      {
        id: 2,
        question: 'Can I change my plan later?',
        answer:
          'Yes, you can change your plan at any time. You can also add or remove users within your plan.',
      },
      {
        id: 3,
        question: 'What is your cancellation policy?',
        answer:
          'You can cancel your subscription at any time. Your subscription will remain active until the end of the billing cycle, and you won’t be charged again.',
      },
      {
        id: 4,
        question: 'Can other info be added to an invoice?',
        answer:
          'Yes, you can add a billing address, VAT number, or any other information to your invoice. Just let us know what you need.',
      },
      {
        id: 5,
        question: 'How does billing work?',
        answer:
          'You can pay by credit card or bank transfer. For annual subscriptions, we can issue an invoice that you can pay by bank transfer.',
      },
      {
        id: 6,
        question: 'How do I change my account email?',
        answer:'You can change your account email by contacting our support team. We’ll help you change it in no time.'
      },
    ]
  return (
    <>
      <div className="lg:mt-10px] lg:block hidden px-5 lg:px-40 ">
        <hr />
      </div>
      <div className="lg:px-20 py-20">
        <div className="flex flex-col items-center  justify-center lg:px-4 px-4 mb-16">
          <p className="  font-inter lg:text-4xl text-3xl tracking-tighter font-semibold text-center mt-4 mb-6">
            Frequently asked questions
          </p>
          <div className="flex justify-center items-center ">
            <p className="lg:max-w-3xl text-center min-w-sm text-center font-inter font-normal text-grey-100  text-xl  leading-7">
              Everything you need to know about the product and billing.
            </p>
          </div>
        </div>

        {/* FAQs */}

        <div className="flex flex-col justify-center items-center gap-16 lg:w-[1280px] lg:h-[504px] px-8 box-border">
          <div className="flex flex-col justify-center items-center gap-8 lg:w-full max-w-[1280px] h-full box-border">
            {faqDetails.map((faq) => (
              <div
                key={faq.id}
                className="flex flex-col justify-center items-center w-full box-border lg:h-[200px]"
              >
                <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[720px] h-full box-border">
                  <div
                    className={`flex justify-between items-end gap-2 w-full h-full box-border ${
                      faq.id !== 1 ? 'border-t-2' : ''
                    }`}
                  >
                    <p className="border-[#101828ff] text-lg leading-[156%] font-inter font-[500]">
                      {faq.question}
                    </p>
                    <img
                      onClick={() => {
                        const faqElement = document.getElementById(
                          `faq${faq.id}`
                        )
                        if (faqElement) {
                          faqElement.classList.toggle('hidden')
                          // Change the image
                          const img = document.getElementById(`img${faq.id}`)
                          if (img.src.includes('positive.svg')) {
                            img.src = '/Faq/negative.svg'
                          } else {
                            img.src = '/Faq/positive.svg'
                          }
                        }
                      }}
                      id={`img${faq.id}`}
                      src="/Faq/positive.svg"
                      alt="Toggle"
                      className="w-6 h-auto"
                      aria-controls={`faq${faq.id}`}
                    />
                  </div>
                  <p
                    id={`faq${faq.id}`}
                    className="hidden border-[#475467ff] text-base leading-[150%] font-inter font-[400] w-full"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-12 lg:mt-16">
          <div className=" flex flex-col justify-center items-center gap-8 lg:w-[1216px] py-8 rounded-2xl box-border  bg-[rgba(249,250,251,1)]">
            <img
              src="/Faq/Avatar group.svg"
              alt="Not Found"
              className=" w-[120px] h-14"
            />
            <div className=" flex flex-col justify-start items-center gap-2 w-[undefinedundefined] box-border">
              <p className=" flex flex-col justify-center  border-[#101828ff] text-xl  leading-[150%]  font-inter  font-[600] text-center">
                Still have questions?
              </p>
              <p className=" flex flex-col justify-center  border-[#475467ff] text-lg  leading-[156%]  font-inter  font-[400] text-center">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <div className=" flex flex-row justify-start items-start gap-3 w-[undefinedundefined] box-border">
              <div className=" flex flex-row justify-center items-center gap-2 w-[100%] h-[100%] px-[18px] py-2.5 border  border-[#7f56d9ff] border-solid rounded-lg box-border  bg-violet-100">
                <p className="  border-[#ffffffff] text-white text-base  leading-[150%]  font-inter  font-[600]">
                  Get in touch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
