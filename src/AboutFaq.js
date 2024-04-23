import React, { useState } from 'react'
import qna from './Images/qna.jpg'

const AboutFaq = () => {
  const [openQuestion, setOpenQuestion] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
      setShowContent(!showContent);
  };
  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(0);
    } else {
      setOpenQuestion(index);
    }
  };

  const faqData = [
    {
      index: 1,
      question: "What is an online challenge?",
      answer: "An online challenge is a way for participants in many different locations to come together to create an online community and achieve a goal together - in this case it is to move towards our ultimate health."
    },
    {
      index: 2,
      question: "How will I join the sessions?",
      answer: "Once you register, we will share the details with you on your WhatsApp and email address. The joining process is very easy."
    },
    {
      index: 3,
      question: "I'm in a different country/time zone. Will the recordings be provided?",
      answer: "No, we will not be providing recordings for this course. We request you to register and join only if it is possible for you to watch the session at 6 AM or 8 AM or 4 PM (IST)."
    },
    {
      index: 4,
      question: "On what platform will this course be held?",
      answer: "The course will be on Zoom. You will not need to switch on your camera or mic. We will share the details of our dashboard 7 days before the course starts."
    },
    {
      index: 5,
      question: "What are the charges for this course?",
      answer: "The charges for this workshop are 990 rupees (Rs. 839 + GST)."
    },
    {
      index: 6,
      question: "Is it necessary to join through a laptop? Can I join using my phone?",
      answer: "Yes, you can join using your phone. However, it is advisable to join using a laptop for the best learning experience."
    },
    {
      index: 7,
      question: "When will I receive the confirmation email?",
      answer: "As soon as you register you will receive an email and a WhatsApp message with the confirmation details."
    },
    {
      index: 8,
      question: "What if I miss any session?",
      answer: "Please do not worry, if you miss any session, you can continue from the next session. We share detailed notes for each session on our dashboard, you can study them and stay up to date."
    }
  ];
  return (
    <>
      <div className='cover mx-16 mt-24 px-4 py-10  w-3/5'>
        <center className=''>
          <p className='faq_heading'>FAQs</p>
        </center>
        <div className='md:grid-cols-1 grid-cols-1 mx-8'>
          <div className=' w-full'>
            <img className='qna_image h-96 rounded w-full' alt='qna' src={qna} />
          </div>
          <div className='w-full mt-5 md:mt-0  md:mx-5'>
            <ul className="faq-list">
              {faqData.map((faqItem, index) => (
                <li className='faq_qna' key={faqItem._id}>
                  <button
                    className="faq-question my-1 flex"
                    onClick={() => toggleQuestion(index)}
                    style={{ color: openQuestion === index ? '#1257BE' : '#666666' }}>
                    <div className={`question_arrow my-auto mx-5 ${openQuestion === index ? 'rotate-90' : ''}`} style={{ backgroundColor: openQuestion === index ? '#1257BE' : '#9F9F9F' }}>
                      <svg className='arrow_svg' width="7" height="11" viewBox="0 0 7 11" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.32161 0.476729C1.1783 0.473577 1.03757 0.515122 0.918977 0.595651C0.800387 0.67618 0.709834 0.791714 0.659908 0.926086C0.609982 1.06046 0.603163 1.20703 0.6404 1.34545C0.677637 1.48388 0.757078 1.60721 0.86768 1.6984L5.08778 5.3137L0.86768 8.92772C0.791171 8.98395 0.727097 9.05534 0.67947 9.13748C0.631842 9.21963 0.601688 9.31074 0.590896 9.40508C0.580103 9.49941 0.588905 9.59494 0.616749 9.68572C0.644593 9.77649 0.69088 9.86057 0.752712 9.93263C0.814543 10.0047 0.890587 10.0631 0.976081 10.1044C1.06158 10.1458 1.15468 10.169 1.24956 10.1726C1.34444 10.1763 1.43905 10.1604 1.52747 10.1258C1.6159 10.0912 1.69622 10.0387 1.76342 9.97161L6.59505 5.83767C6.67093 5.77292 6.73185 5.69255 6.77363 5.60197C6.81541 5.5114 6.83705 5.41281 6.83705 5.31306C6.83705 5.21331 6.81541 5.11473 6.77363 5.02415C6.73185 4.93357 6.67093 4.85312 6.59505 4.78837L1.76342 0.650458C1.64137 0.542046 1.48482 0.48057 1.32161 0.476729Z" fill="white" />
                      </svg>
                    </div>
                    {faqItem.question}
                  </button>
                  {openQuestion === index && (
                    <p className="faq-answer text-sm pb-2 ml-10 pl-5">
                      {faqItem.answer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='pb-10'>
        <div className='about_container mt-16 h-96 pt-10'>
          <center className=' w-3/5'>
            <p className='about_heading'>About The Hosts</p>
          </center>
        </div>
          <div className='grid grid-cols-1 mx-16 md:grid-cols-2 lg:grid-cols-3 gap-5 -mt-48  w-3/5'>
            <div className='about_div'>
              <div className='about_card_one h-96'>
                <div className='about_containt h-full text-center relative'>
                  <div className='about_text_p absolute bottom-6'>
                    <p className='about_name mx-auto'>Vivek Jain</p>
                    <p className='about_desc'> Certified Nutrition and Wellness Advisor, Internationally Accredited Diploma in Weight-Loss, Diploma in Nutrition, Diploma in Dietary Supplement Advisor </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='about_div'>
              <div className='about_card_two h-96'>
                <div className='about_containt h-full text-center relative'>
                  <div className='about_text_p absolute bottom-6'>
                    <p className='about_name mx-auto'>NEERAJ BHATIA</p>
                    <p className='about_desc'> Certified Nutrition and Wellness Advisor-Diploma in Nutrition, Diploma in Diet Planning, Diploma in Weight Loss, Diploma in Fitness, Diploma in Sports Nutrition, Diploma in Keto Dietary Advisor, Diploma in Intermittent Fasting, Diploma in Dietary Supplement Advisor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='about_div'>
              <div className='about_card_three h-96'>
                <div className='about_containt h-full text-center relative'>
                  <div className='about_text_p absolute bottom-6'>
                    <p className='about_name mx-auto'>Senior Coach Gurpreet</p>
                    <p className='about_desc'>Certified Nutrition Advisor, Diploma in Weight loss.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='about_div'>
              <div className='about_card_four h-96'>
                <div className='about_containt h-full text-center relative'>
                  <div className='about_text_p absolute bottom-6'>
                    <p className='about_name mx-auto'>Senior Coach Niti</p>
                    <p className='about_desc'> Masters in Child Development & Nutrition, Certified Nutrition & Wellness Advisior, Diploma in Nutrition Diploma in Weightloss, Diploma in Gut health, Diploma in Dietary Supplement Advisor </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='about_div'>
              <div className='about_card_five h-96'>
                <div className='about_containt h-full text-center relative'>
                  <div className='about_text_p absolute bottom-6'>
                    <p className='about_name mx-auto'>Senior Coach Meenakshi</p>
                    <p className='about_desc'>Certified Yoga Instructor by Ministry of Ayush, Diploma in Weight loss, Certified wellness & Nutrition Advisor, Diploma in Intermittent Fasting, Diploma in Dietary Supplement Advisor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='about_div'>
              <div className='about_card_six h-96'>
                <div className='about_containt h-full text-center relative'>
                  <div className='about_text_p absolute bottom-6'>
                    <p className='about_name mx-auto'>Senior Coach Manisha</p>
                    <p className='about_desc'>Diploma in Nutrition, Certified Wellness and Nutrition advisor, International Accredited Diploma in Yoga Training, Diploma in Weight loss</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='about_div'>
              <div className='about_card_seven h-96'>
                <div className='about_containt h-full text-center relative'>
                  <div className='about_text_p absolute bottom-6'>
                    <p className='about_name mx-auto'>Senior Coach Mukund</p>
                    <p className='about_desc'>An ex army officer, a trained Commando from Indian Army, Certified Internationally Accredited Diploma in Sports Nutrition, Diploma in Nutrition, Certified Wellness and Nutrition advisor, Diploma in Weight loss</p>
                    <svg className={`w-6 h-6 transition-transform transform ${showContent ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='about_div'>
              <div className='about_card_eight h-96'>
                <div className='about_containt h-full text-center relative'>
                  <div className='about_text_p absolute bottom-6'>
                    <p className='about_name mx-auto'>Senior Coach Bikramjit Singh</p>
                    <p className='about_desc'>Diploma in Weight loss, Certified Wellness & Nutrition Advisor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AboutFaq