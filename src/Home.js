import React, {useState, useEffect} from 'react'
import logo from './Images/logo.svg'
import gutVideo from './Images/GutReset IntroVideo.mp4'
import time from './Images/TIME.svg'
import duration from './Images/DURATION.svg'
import speakers from './Images/SPEAKERS.svg'
import goal from './Images/GOAL.svg'
import belly from './Images/belly.jpg'
import tummy from './Images/tummy.jpg'
import bacteria from './Images/bacteria.jpg'
import qna from './Images/qnacover.jpg'
import community from './Images/community.jpg'
import craving from './Images/cravinng.jpg'
import mental from './Images/mental.jpg'
import bloating from './Images/bloating.jpg'
import sleep from './Images/sleep.jpg'
import glowing from './Images/glowing.jpg'
import energy from './Images/energy.jpg'
import habitsvg1 from './Images/habitsvg1.svg'
import habitsvg2 from './Images/habitsvg2.svg'
import habitsvg3 from './Images/habitsvg3.svg'
import habitsvg4 from './Images/habitsvg4.svg'
import habitsvg5 from './Images/habitsvg5.svg'
import habitsvg6 from './Images/habitsvg6.svg'
import habitsvg7 from './Images/habitsvg7.svg'
import calander from './Images/calandar.svg'
import watch from './Images/watch.svg'
import contro from './Images/contro.svg'
import Register from './Register'
import Testimonial from './Testimonial'
import Programme from './Programme'
import AboutFaq from './AboutFaq'

const Home = () => {

    const calculateRemainingTime = (targetDate) => {
        const now = new Date();
        const timeDifference = targetDate.getTime() - now.getTime();

        const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days: remainingDays,
            hours: remainingHours,
            minutes: remainingMinutes,
            seconds: remainingSeconds
        };
    };

    const targetDate = new Date('2024-04-26T23:59:59');
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(targetDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const timeRemaining = calculateRemainingTime(targetDate);
            setRemainingTime(timeRemaining);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <>
            <div>
                <div className='logo_bg h-20 flex justify-center items-top'>
                    <div className='logo_div h-28 w-28'>
                        <img className='logo_img h-full w-full' alt='Logo' src={logo} />
                    </div>
                </div>
                <div className='bg_slate'>
                    <div className='challenge md:px-20 px-14 pt-24'>
                        <div className='grid md:grid-cols-2 '>
                            <div className=''>
                                <p className='font_color font-bold lg:text-4xl md:text-2xl sm:text-4xl stroke-white'>GUT <span className='span_color'>RESET</span> CHALLENGE</p>
                                <button onClick={() => window.location.href = '#formregister'} className='reg_btn w-48 h-10 rounded-3xl px-4 mt-5 mb-9 text-xl'>Register Now</button>
                                <p className=' text-2xl font-semibold'>Challenge starting in</p>
                                <div className='grid grid-cols-6'>
                                    <div className='flex-col'>
                                        <div className='time_div h-12 w-12 sm:w-14 sm:h-14 md:w-11 md:h-11 lg:h-14 lg:w-14 text-2xl mt-5 rounded'>{remainingTime.days}</div>
                                        <p className='ml-3 text-sm'>Days</p>
                                    </div>
                                    <div className='flex-col'>
                                        <div className='time_div h-12 w-12 sm:w-14 sm:h-14 md:w-11 md:h-11 lg:h-14 lg:w-14 text-2xl mt-5 rounded'>{remainingTime.hours}</div>
                                        <p className='ml-3 text-sm'>Hours</p>
                                    </div>
                                    <div className='flex-col'>
                                        <div className='time_div h-12 w-12 sm:w-14 sm:h-14 md:w-11 md:h-11 lg:h-14 lg:w-14 text-2xl mt-5 rounded'>{remainingTime.minutes}</div>
                                        <p className='ml-3 text-sm'>Mins</p>
                                    </div>
                                    <div className='flex-col'>
                                        <div className='time_div h-12 w-12 sm:w-14 sm:h-14 md:w-11 md:h-11 lg:h-14 lg:w-14 text-2xl mt-5 rounded'>{remainingTime.seconds}</div>
                                        <p className='ml-3 text-sm'>Secs</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded '>
                                <video autoPlay={true} controls className='w-full h-full rounded mt-5 md:mt-0'>
                                    <source src={gutVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10 mt-10'>
                            <div className='card_exe py-5 time'>
                                <div className=''>
                                    <div className='exercise_time'>
                                        <img className='exercise_time' alt='time' src={time} />
                                    </div>
                                    <p className='time_p'>TIME</p>
                                </div>
                            </div>
                            <div className='card_exe py-5 duration'>
                                <div className=''>
                                    <div className='exercise_time'>
                                        <img className='exercise_duration' alt='duration' src={duration} />
                                    </div>
                                    <p className='time_p'>DURATION</p>
                                </div>
                            </div>
                            <div className='card_exe py-5 speakers'>
                                <div className=''>
                                    <div className='exercise_time'>
                                        <img className='exercise_speakers' alt='speakers' src={speakers} />
                                    </div>
                                    <p className='time_p'>SPEAKERS</p>
                                </div>
                            </div>
                            <div className='card_exe py-5 goal'>
                                <div className=''>
                                    <div className='exercise_time'>
                                        <img className='exercise_goal' alt='goal' src={goal} />
                                    </div>
                                    <p className='time_p'>MAIN GOAL</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='health_challange_div mt-24 w-1/4 pl-5 mr-5 py-5'>
                        <div className='health_challenge'>GUT Health Challenge</div>
                        <div className='icon_date'>
                            <img className='gut_icon' alt='icon' src={calander} />
                            <span className='date'>9th april - to 11th april</span> </div>
                        <div className='icon_date'>
                            <img className='gut_icon' alt='icon' src={watch} />
                            <span className='date'>7:30 PM</span> </div>
                        <div className='icon_date'>
                            <img className='gut_icon' alt='icon' src={contro} />
                            <span className='date'>Contribution: Rs: 99</span> </div>
                            <button onClick={() => window.location.href = '#formregister'} className='reg_btn w-48 h-10 rounded-3xl px-4 mt-5 mb-9 text-xl'>Register Now</button>
                        <div className='icon_date'>
                            <img className='gut_icon' alt='icon' src={calander} />
                            <span className='date'>High energy and focus</span> </div>
                        <div className='icon_date'>
                            <img className='gut_icon' alt='icon' src={watch} />
                            <span className='date'>Reach your Optimal Weight</span> </div>
                        <div className='icon_date'>
                            <img className='gut_icon' alt='icon' src={contro} />
                            <span className='date'>Eat and Sleep better</span> </div>
                    </div>
                    <div className='cover mx-20 mt-24 px-4 pt-10 w-3/5'>
                        <center>
                            <h1 className='cover_heading underline'>Cover</h1>
                        </center>
                        <div className='grid grid-col-1 mx-8'>
                            <div className='image_desc mb-10 pb-3 grid-col-2 flex'>
                                <div className='image'>
                                    <img className='cover_img' alt='belly' src={belly} />
                                </div>
                                <div className='belly_text ml-10 w-3/4'>
                                    <p className='cover_heading_p'>Happy Belly Happy Life :</p>
                                    <p className='cover_heading_text' >How our Gut Health Matters in harbessing your Microbiome for wellness</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-col-1 mx-8'>
                            <div className='image_desc mb-10 pb-3 grid-col-2 flex'>
                                <div className='image'>
                                    <img className='cover_img' alt='belly' src={tummy} />
                                </div>
                                <div className='belly_text ml-10 w-3/4'>
                                    <p className='cover_heading_p'>Happy Tummy Delights :</p>
                                    <p className='cover_heading_text' >“Nourishing Gut-friendly Recipes“</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-col-1 mx-8'>
                            <div className='image_desc mb-10 pb-3 grid-col-2 flex'>
                                <div className='image'>
                                    <img className='cover_img' alt='belly' src={bacteria} />
                                </div>
                                <div className='belly_text ml-10 w-3/4'>
                                    <p className='cover_heading_p'>Bacteria Balance :</p>
                                    <p className='cover_heading_text' >“The pre + Pro Primer for Gut health“</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-col-1 mx-8'>
                            <div className='image_desc mb-10 pb-3 grid-col-2 flex'>
                                <div className='image'>
                                    <img className='cover_img' alt='belly' src={qna} />
                                </div>
                                <div className='belly_text ml-10 w-3/4'>
                                    <p className='cover_heading_p'>QNAs After Every Session :</p>
                                    <p className='cover_heading_text' >“Ask Gut guru your digestive Health Questions“</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-col-1 mx-8'>
                            <div className='image_desc mb-10 pb-3 grid-col-2 flex'>
                                <div className='image'>
                                    <img className='cover_img' alt='belly' src={community} />
                                </div>
                                <div className='belly_text ml-10 w-3/4'>
                                    <p className='cover_heading_p'>Community Of Thousands of people :</p>
                                    <p className='cover_heading_text' >“After the challenge you will get free access to our beautiful community of like minded people.“</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='logo_bgc h-2 mt-10'></div>
                    <div className=' h-1'></div>
                    <div className='logo_bgc h-2'></div>
                    <div className='benefits md:pl-20 px-10 py-10'>
                        <center className=' w-3/5'>
                            <p className=' text-white text-2xl sm:text-3xl lg:text-4xl my-5'>Benefits You Will Gain</p>
                            <p className='text-white text-xl sm:text-2xl lg:text-2xl mb-5'>By Taking This Challange</p>
                        </center>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-2/3'>
                            <div className='benefit_card w-full'>
                                <div className='benefit_card_content'>
                                    <div className='card_image'>
                                        <img className='benefit_img' alt='craving' src={craving} />
                                    </div>
                                    <div className='card_content text-center'>
                                        <p className='card_text py-5'>Craving <br /> Control</p>
                                    </div>
                                </div>
                            </div>
                            <div className='benefit_card'>
                                <div className='benefit_card_content'>
                                    <div className='card_image'>
                                        <img className='benefit_img' alt='craving' src={mental} />
                                    </div>
                                    <div className='card_content text-center'>
                                        <p className='card_text py-5'>More Mental <br /> Clarity</p>
                                    </div>
                                </div>
                            </div>
                            <div className='benefit_card'>
                                <div className='benefit_card_content'>
                                    <div className='card_image'>
                                        <img className='benefit_img' alt='craving' src={bloating} />
                                    </div>
                                    <div className='card_content text-center'>
                                        <p className='card_text py-5'>Bye Bye <br /> Bloating</p>
                                    </div>
                                </div>
                            </div>
                            <div className='benefit_card'>
                                <div className='benefit_card_content'>
                                    <div className='card_image'>
                                        <img className='benefit_img' alt='craving' src={sleep} />
                                    </div>
                                    <div className='card_content text-center'>
                                        <p className='card_text py-5'>Better <br /> Sleep</p>
                                    </div>
                                </div>
                            </div>
                            <div className='benefit_card'>
                                <div className='benefit_card_content'>
                                    <div className='card_image'>
                                        <img className='benefit_img' alt='craving' src={glowing} />
                                    </div>
                                    <div className='card_content text-center'>
                                        <p className='card_text py-5'>Glowing For <br /> Clear Skin</p>
                                    </div>
                                </div>
                            </div>
                            <div className='benefit_card'>
                                <div className='benefit_card_content'>
                                    <div className='card_image'>
                                        <img className='benefit_img' alt='craving' src={energy} />
                                    </div>
                                    <div className='card_content text-center'>
                                        <p className='card_text py-5'>More <br /> Energy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cover mx-20 my-20 px-4 pt-10  w-3/5'>
                        <center className='mb-16'>
                            <h1 className=' text-2xl sm:text-3xl lg:text-4xl underline'>What are the 7 Habits I will Learn ?</h1>
                        </center>
                        <div className='habit_card_container mx-8 pb-10'>
                            <div className='habit_card_one flex flex-col md:flex-row'>
                                <div className='card_img_one md:flex justify-center flex-col md:relative md:w-1/3 h-48'>
                                    <p className=' absolute sm:text-3xl lg:text-4xl ms-52 md:ml-2'>HABIT <br /> <span className='habit_count ml-10'>1.</span> </p>
                                    <img className='flex mt-20 md:mt-0 justify-end items-end md:absolute md:-right-16 top-20 md:inset-y-6 h-28 lg:h-32  ms-48 md:ms-2' alt='habit' src={habitsvg1} />
                                </div>
                                <div className='card_habit_content my-auto pt-16 pb-5 md:py-0 ml-20 lg:ml-28 flex-none md:w-1/2'>
                                    <p className='habit_heading heading_one'>Cleansing</p>
                                    <p className='habit_desc'>Experience the two most practical ways of detoxifying your body everyday</p>
                                </div>
                            </div>
                            <div className='habit_card_two flex flex-col md:flex-row'>
                                <div className='card_img_two md:flex justify-center flex-col md:relative md:w-1/3 h-48'>
                                    <p className=' absolute sm:text-3xl lg:text-4xl ms-52 md:ml-2'>HABIT <br /> <span className='habit_count ml-10'>2.</span> </p>
                                    <img className='flex mt-20 md:mt-0 justify-end items-end md:absolute md:-right-16 top-20 md:inset-y-6 h-28 lg:h-32  ms-48 md:ms-2' alt='habit' src={habitsvg2} />
                                </div>
                                <div className='card_habit_content my-auto pt-16 pb-5 md:py-0 ml-20 lg:ml-28 flex-none md:w-1/2'>
                                    <p className='habit_heading heading_two'>Food</p>
                                    <p className='habit_desc'>Understand what food the human body is designed to eat</p>
                                </div>
                            </div>
                            <div className='habit_card_three flex flex-col md:flex-row'>
                                <div className='card_img_three md:flex justify-center flex-col md:relative md:w-1/3 h-48'>
                                    <p className=' absolute sm:text-3xl lg:text-4xl ms-52 md:ml-2'>HABIT <br /> <span className='habit_count ml-10'>3.</span> </p>
                                    <img className='flex mt-20 md:mt-0 justify-end items-end md:absolute md:-right-16 top-20 md:inset-y-6 h-28 lg:h-32  ms-48 md:ms-2' alt='habit' src={habitsvg3} />
                                </div>
                                <div className='card_habit_content my-auto pt-16 pb-5 md:py-0 ml-20 lg:ml-28 flex-none md:w-1/2'>
                                    <p className='habit_heading heading_three'>Sleep</p>
                                    <p className='habit_desc'>Learn practice tips as to how you can deepen your sleep</p>
                                </div>
                            </div>
                            <div className='habit_card_four flex flex-col md:flex-row'>
                                <div className='card_img_four md:flex justify-center flex-col md:relative md:w-1/3 h-48'>
                                    <p className=' absolute sm:text-3xl lg:text-4xl ms-52 md:ml-2'>HABIT <br /> <span className='habit_count ml-10'>4.</span> </p>
                                    <img className='flex mt-20 md:mt-0 justify-end items-end md:absolute md:-right-16 top-20 md:inset-y-6 h-28 lg:h-32  ms-48 md:ms-2' alt='habit' src={habitsvg4} />
                                </div>
                                <div className='card_habit_content my-auto pt-16 pb-5 md:py-0 ml-20 lg:ml-28 flex-none md:w-1/2'>
                                    <p className='habit_heading heading_four'>Movement</p>
                                    <p className='habit_desc'>Build a consistent exercise routine that you can actually follow.</p>
                                </div>
                            </div>
                            <div className='habit_card_five flex flex-col md:flex-row'>
                                <div className='card_img_five md:flex justify-center flex-col md:relative md:w-1/3 h-48'>
                                    <p className=' absolute sm:text-3xl lg:text-4xl ms-52 md:ml-2'>HABIT <br /> <span className='habit_count ml-10'>5.</span> </p>
                                    <img className='flex mt-20 md:mt-0 justify-end items-end md:absolute md:-right-16 top-20 md:inset-y-6 h-28 lg:h-32  ms-48 md:ms-2' alt='habit' src={habitsvg5} />
                                </div>
                                <div className='card_habit_content my-auto pt-16 pb-5 md:py-0 ml-20 lg:ml-28 flex-none md:w-1/2'>
                                    <p className='habit_heading heading_five'>Relationships</p>
                                    <p className='habit_desc'>Learn how to improve your existing relationships and fix the strained ones.</p>
                                </div>
                            </div>
                            <div className='habit_card_six flex flex-col md:flex-row'>
                                <div className='card_img_six md:flex justify-center flex-col md:relative md:w-1/3 h-48'>
                                    <p className=' absolute sm:text-3xl lg:text-4xl ms-52 md:ml-2'>HABIT <br /> <span className='habit_count ml-10'>6.</span> </p>
                                    <img className='flex mt-20 md:mt-0 justify-end items-end md:absolute md:-right-16 top-20 md:inset-y-6 h-28 lg:h-32  ms-48 md:ms-2' alt='habit' src={habitsvg6} />
                                </div>
                                <div className='card_habit_content my-auto pt-16 pb-5 md:py-0 ml-20 lg:ml-28 flex-none md:w-1/2'>
                                    <p className='habit_heading heading_six'>Purpose</p>
                                    <p className='habit_desc'>We are all sent to this Earth with an intention. Find out yours!</p>
                                </div>
                            </div>
                            <div className='habit_card_seven flex flex-col md:flex-row'>
                                <div className='card_img_seven md:flex justify-center flex-col md:relative md:w-1/3 h-48'>
                                    <p className=' absolute sm:text-3xl lg:text-4xl ms-52 md:ml-2'>HABIT <br /> <span className='habit_count ml-10'>7.</span> </p>
                                    <img className='flex mt-20 md:mt-0 justify-end items-end md:absolute md:-right-16 top-20 md:inset-y-6 h-28 lg:h-32  ms-48 md:ms-2' alt='habit' src={habitsvg7} />
                                </div>
                                <div className='card_habit_content my-auto pt-16 pb-5 md:py-0 ml-20 lg:ml-28 flex-none md:w-1/2'>
                                    <p className='habit_heading heading_seven'>Surprise</p>
                                    <p className='habit_desc'>Join the challenge to know more.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <Testimonial />
                    <Programme />
                    <AboutFaq />
                    <Register />
                </div>
            </div>
        </>
    )
}

export default Home