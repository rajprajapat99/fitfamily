import React, {useRef, useEffect} from 'react'
import vivek from './Images/vivek.jpg'
import neeraj from './Images/neeraj.jpg'
import charu from './Images/charu.jpg'
// import gurpreet from './Images/gurpreet.jpg'
import niti from './Images/niti.jpg'
import meenakshi from './Images/meenakshi.jpg'
import manisha from './Images/manisha.jpg'
import mukund from './Images/mukund.jpg'
// import bikramjit from './Images/bikramjit.jpg'

const Speakers = () => {
    const containerRefs = useRef([]);
    
  const handleScroll = (event) => {
    const deltaY = event.deltaY; // Get the vertical scroll amount
    const container = event.currentTarget;

    // Adjust the scrollTop of the container based on the scroll direction
    container.scrollTop += deltaY;
  };
    // useEffect(() => {
    //     // Add event listeners for mousewheel to all containers
    //     containerRefs.current.forEach(container => {
    //       container.addEventListener('mousewheel', handleScroll);
    //     });
    
    //     return () => {
    //       // Cleanup: Remove event listeners when component unmounts
    //       containerRefs.current.forEach(container => {
    //         container.removeEventListener('mousewheel', handleScroll);
    //       });
    //     };
    //   }, []);

    useEffect(() => {
        // Add event listeners for mousewheel to all containers
        containerRefs.current.forEach(container => {
            container.addEventListener('mousewheel', handleScroll);
        });
    
        return () => {
            // Cleanup: Remove event listeners when component unmounts
            containerRefs.current.forEach(container => {
                if (container) { // Check if container exists
                    container.removeEventListener('mousewheel', handleScroll);
                }
            });
        };
    }, []);
    
    const aboutData = [
        {
          image: vivek,
          name: 'Vivek Jain',
          desc: 'Certified Nutrition and Wellness Advisor, Internationally Accredited Diploma in Weight-Loss, Diploma in Nutrition, Diploma in Dietary Supplement Advisor'
        },
        {
          image: neeraj,
          name: 'Neeraj Bhatia',
          desc: ' Certified Nutrition and Wellness Advisor-Diploma in Nutrition, Diploma in Diet Planning, Diploma in Weight Loss, Diploma in Fitness, Diploma in Sports Nutrition, Diploma in Keto Dietary Advisor, Diploma in Intermittent Fasting, Diploma in Dietary Supplement Advisor'
        },
        {
          image: charu,
          name: 'Charu Jain',
          desc: 'Certified Nutrition and Wellness Advisor, Internationally Accredited Diploma in Weight-Loss, Diploma in Nutrition'
        },
        {
          image: niti,
          name: 'Niti',
          desc: 'Masters in Child Development & Nutrition, Certified Nutrition & Wellness Advisior, Diploma in Nutrition Diploma in Weightloss, Diploma in Gut health, Diploma in Dietary Supplement Advisor'
        },
        {
          image: meenakshi,
          name: 'Meenakshi',
          desc: 'Certified Yoga Instructor by Ministry of Ayush, Diploma in Weight loss, Certified wellness & Nutrition Advisor, Diploma in Intermittent Fasting, Diploma in Dietary Supplement Advisor'
        },
        {
          image: manisha,
          name: 'Manisha',
          desc: 'Diploma in Nutrition, Certified Wellness and Nutrition advisor, International Accredited Diploma in Yoga Training, Diploma in Weight loss'
        },
        {
          image: mukund,
          name: 'Mukund',
          desc: 'An ex army officer, a trained Commando from Indian Army, Certified Internationally Accredited Diploma in Sports Nutrition, Diploma in Nutrition, Certified Wellness and Nutrition advisor, Diploma in Weight loss'
        },
      ];
  return (
    <>
    <div className='pb-10'>
        <div className='about_container mt-10 h-80 pt-6'>
          <center className=' w-full md:w-3/5'>
            <p className='about_heading'>About The Hosts</p>
          </center>
        </div>
        <div className='grid grid-cols-1 sm:mx-16 mx-5 sm:grid-cols-2 lg:grid-cols-3 gap-5 -mt-48 md:w-3/5'>
          {aboutData.map((coach, index) => (
            <div className='about_div' key={index}>
              <div className={`about_card h-96`} style={{ backgroundImage: `url(${coach.image})` }}>
                <div className='about_containt h-full text-center relative' ref={el => containerRefs.current[index] = el}>
                  <div className='about_text_p absolute bottom-6'>
                    <p className='about_name text-center'>{coach.name}</p>
                    <p className='about_desc'>{coach.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Speakers