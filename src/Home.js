import React, { useState, useEffect, useRef } from 'react'
import gutVideo from './Images/GutReset IntroVideo.mp4'
import logo from './Images/logo.svg'
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
import whatsapp from './Images/WhatsApp.png'
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
import Speakers from './Speakers'
import ForWhom from './ForWhom'

const Home = () => {
    const scrollToRegister = () => {
        const registerElement = document.getElementById('register-here');
        if (registerElement) {
            registerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToSpeakers = () => {
        const registerElement = document.getElementById('speakers');
        if (registerElement) {
            registerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToGoal = () => {
        const registerElement = document.getElementById('topics-covered');
        if (registerElement) {
            registerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };


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

    const targetDate = new Date('2024-05-17T21:00:00');
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(targetDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const timeRemaining = calculateRemainingTime(targetDate);
            setRemainingTime(timeRemaining);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const videoRef = useRef(null);

    useEffect(() => {

        localStorage.clear();
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    return (
        <>
            <div className='logo_bg h-20 flex justify-center items-top'>
                <div className='logo_div h-28 w-28'>
                    <img className='logo_img h-full w-full' alt='Logo' src={logo} />
                </div>
            </div>
            <div className='bg_slate'>
                <div className='challenge md:px-20 px-14 pt-24'>
                    <div className='grid md:grid-cols-2 '>
                        <div className=''>
                            <p className='font_color text-center font-bold lg:text-4xl text-3xl sm:text-4xl stroke-white zoom-effect'>GUT <span className='span_color'>RESET</span> CHALLENGE</p>
                            <center><button onClick={scrollToRegister} className='reg_btn w-48 h-10 rounded-3xl px-4 mt-5 mb-9 text-xl'>Register Now</button></center>
                            <p className=' text-2xl font-semibold'>Challenge starting in</p>
                            <center>
                                <div className='flex grid-cols-6 md:gap-10 gap-5 justify-center'>
                                    <div className='flex-cols'>
                                        <div className='time_div h-12 w-12 sm:w-14 sm:h-14 md:w-11 md:h-11 lg:h-14 lg:w-14 text-2xl mt-5 rounded'>{remainingTime.days}</div>
                                        <p className='ml-3 text-sm'>Days</p>
                                    </div>
                                    <div className='flex-cols'>
                                        <div className='time_div h-12 w-12 sm:w-14 sm:h-14 md:w-11 md:h-11 lg:h-14 lg:w-14 text-2xl mt-5 rounded'>{remainingTime.hours}</div>
                                        <p className='ml-3 text-sm'>Hours</p>
                                    </div>
                                    <div className='flex-cols'>
                                        <div className='time_div h-12 w-12 sm:w-14 sm:h-14 md:w-11 md:h-11 lg:h-14 lg:w-14 text-2xl mt-5 rounded'>{remainingTime.minutes}</div>
                                        <p className='ml-3 text-sm'>Mins</p>
                                    </div>
                                    <div className='flex-cols'>
                                        <div className='time_div h-12 w-12 sm:w-14 sm:h-14 md:w-11 md:h-11 lg:h-14 lg:w-14 text-2xl mt-5 rounded'>{remainingTime.seconds}</div>
                                        <p className='ml-3 text-sm'>Secs</p>
                                    </div>
                                </div>
                            </center>
                        </div>
                        <div className='rounded '>
                            <video ref={videoRef} autoPlay loop muted pause controls className='w-full h-full rounded mt-5 md:mt-0'>
                                <source src={gutVideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='md:hidden block'>
                            <div className='hold_register_btn'>
                                <button onClick={scrollToRegister} className='reg_btn w-48 h-10 rounded-3xl px-4 mt-10 text-xl mb-5'>Register Now</button>
                            </div>
                        </div>
                    </div>
                    <div class='whatsapp_div'>
                        <a href='https://wa.me/+919810133674?text=Your%20message%20here' target='_blank' rel='noopener noreferrer'>
                            <img alt='whatsapp' src={whatsapp} class='text_whatsapp h-16' />
                        </a>
                        {/* <div class="ring"></div> */}
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10 mt-10'>
                        <div className='card_exe py-5 time'>
                            <div className=''>
                                <div className='text-center'>
                                    <p className='exer_time text-3xl font-bold py-2'>Fri 17<sup>th</sup> - Sun 19<sup>th</sup> May</p>
                                    <p className='exer_time text-xl'>9:00 PM IST</p>
                                </div>
                                <p className='time_p'>TIME</p>
                            </div>
                        </div>
                        <div className='card_exe py-5 duration'>
                            <div className=''>
                                <div className='text-center'>
                                    <p className='duration_time font-bold text-3xl'>45 Minutes Everyday</p>
                                </div>
                                <p className='time_p'>DURATION</p>
                            </div>
                        </div>
                        <div className='card_exe py-5 speakers' onClick={scrollToSpeakers}>
                            <div className=''>
                                <div className='exercise_time'>
                                    <img className='exercise_speakers' alt='speakers' src={speakers} />
                                </div>
                                <p className='time_p'>SPEAKERS</p>
                            </div>
                        </div>
                        <div className='card_exe py-5 goal' onClick={scrollToGoal}>
                            <div className=''>
                                <div className='exercise_time'>
                                    <img className='exercise_goal' alt='goal' src={goal} />
                                </div>
                                <p className='time_p'>MAIN GOAL</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='health_challange_div mt-24 w-1/4 px-5 mr-5 py-5 hidden md:block'>
                    <div className='health_challenge lg:text-xl text-base'>GUT Health Challenge</div>
                    <div className='icon_date'>
                        <img className='gut_icon' alt='icon' src={calander} />
                        <span className='date lg:text-sm text-sm'>Fri 17th - Sun 19th May</span> </div>
                    <div className='icon_date'>
                        <img className='gut_icon' alt='icon' src={watch} />
                        <span className='date lg:text-base text-sm'>9:00 PM IST</span> </div>
                    <div className='icon_date'>
                        <img className='gut_icon' alt='icon' src={contro} />
                        <span className='date lg:text-base text-sm'>Contribution: Rs: 49</span> </div>
                    <center><button onClick={scrollToRegister} className='zoom-effect reg_btn w-48 h-10 rounded-3xl px-4 mt-5 mb-5 text-xl'>Register Now</button></center>
                    <div className='icon_date'>
                        <img className='gut_icon' alt='icon' src={calander} />
                        <span className='date lg:text-base text-sm'>High energy and focus</span> </div>
                    <div className='icon_date'>
                        <img className='gut_icon' alt='icon' src={watch} />
                        <span className='date lg:text-base text-sm'>Reach your Optimal Weight</span> </div>
                    <div className='icon_date'>
                        <img className='gut_icon' alt='icon' src={contro} />
                        <span className='date lg:text-base text-sm'>Eat and Sleep better</span> </div>
                </div>
                <ForWhom />
                <div className='cover mt-10 sm:mx-14 mx-5 md:w-3/5' id='topics-covered'>
                    <center>
                        <h1 className='cover_heading underline mb-10'>Topics Covered</h1>
                    </center>
                    <div className='grid grid-cols-1 mx-8'>
                        <div className='image_desc ms:mb-10 mb-5 pb-3 grid-cols-2 flex'>
                            <div className='image'>
                                <img className='sm:h-32 sm:w-40 h-20 w-20' alt='belly' src={belly} />
                            </div>
                            <div className='belly_text sm:ml-10 ml-5 w-3/4'>
                                <p className='cover_heading_p sm:text-xl text-base'>Happy Belly Happy Life :</p>
                                <p className='cover_heading_text sm:text-base text-sm' >How our Gut Health Matters in harnessing your Microbiome for wellness</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 mx-8'>
                        <div className='image_desc ms:mb-10 mb-5 pb-3 grid-cols-2 flex'>
                            <div className='image'>
                                <img className='sm:h-32 sm:w-40 h-20 w-20' alt='belly' src={tummy} />
                            </div>
                            <div className='belly_text sm:ml-10 ml-5 w-3/4'>
                                <p className='cover_heading_p'>Happy Tummy Delights :</p>
                                <p className='cover_heading_text' >“Nourishing Gut-friendly Recipes“</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 mx-8'>
                        <div className='image_desc ms:mb-10 mb-5 pb-3 grid-cols-2 flex'>
                            <div className='image'>
                                <img className='sm:h-32 sm:w-40 h-20 w-20' alt='belly' src={bacteria} />
                            </div>
                            <div className='belly_text  sm:ml-10 ml-5 w-3/4'>
                                <p className='cover_heading_p'>Bacteria Balance :</p>
                                <p className='cover_heading_text' >“The pre + Pro Primer for Gut health“</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 mx-8'>
                        <div className='image_desc ms:mb-10 mb-5 pb-3 grid-cols-2 flex'>
                            <div className='image'>
                                <img className='sm:h-32 sm:w-40 h-20 w-20' alt='belly' src={qna} />
                            </div>
                            <div className='belly_text sm:ml-10 ml-5 w-3/4'>
                                <p className='cover_heading_p'>QNAs After Every Session :</p>
                                <p className='cover_heading_text' >“Ask Gut guru your digestive Health Questions“</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 mx-8'>
                        <div className='image_desc ms:mb-10 mb-5 pb-3 grid-cols-2 flex'>
                            <div className='image'>
                                <img className='sm:h-32 sm:w-40 h-20 w-20' alt='belly' src={community} />
                            </div>
                            <div className='belly_text sm:ml-10 ml-5 w-3/4'>
                                <p className='cover_heading_p'>Community Of Thousands of people :</p>
                                <p className='cover_heading_text' >“After the challenge you will get free access to our beautiful community of like minded people.“</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='logo_bgc h-2 mt-10'></div>
                <div className=' h-1'></div>
                <div className='logo_bgc h-2'></div>
                <div className='benefits md:pl-20 px-10 py-10' id='main-goal'>
                    <center className=' w-full md:w-3/5'>
                        <p className=' text-white text-2xl sm:text-3xl lg:text-4xl my-5'>Benefits You Will Gain</p>
                        <p className='text-white text-xl sm:text-2xl lg:text-2xl mb-5'>By Taking This Challange</p>
                    </center>
                    <div className='sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-2/3  hidden'>
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
                                    <p className='card_text py-5'>Glowing & <br /> Clear Skin</p>
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
                    <div className='benefit_card_bg grid grid-cols-2 sm:hidden py-10 w-full md:w-2/3'>
                        <div className='benefit_mo_card w-full'>
                            <div className='benefit_mo_card_content'>
                                <div className='card_mo_image'>
                                    <img className='benefit_mo_img' alt='craving' src={craving} />
                                </div>
                                <div className='card_content text-center'>
                                    <p className='card_mo_text pb-5'>Craving <br /> Control</p>
                                </div>
                            </div>
                        </div>
                        <div className='benefit_mo_card'>
                            <div className='benefit_mo_card_content'>
                                <div className='card_mo_image'>
                                    <img className='benefit_mo_img' alt='craving' src={mental} />
                                </div>
                                <div className='card_content text-center'>
                                    <p className='card_mo_text pb-5'>More Mental <br /> Clarity</p>
                                </div>
                            </div>
                        </div>
                        <div className='benefit_mo_card'>
                            <div className='benefit_mo_card_content'>
                                <div className='card_mo_image'>
                                    <img className='benefit_mo_img' alt='craving' src={bloating} />
                                </div>
                                <div className='card_content text-center'>
                                    <p className='card_mo_text pb-5'>Bye Bye <br /> Bloating</p>
                                </div>
                            </div>
                        </div>
                        <div className='benefit_mo_card'>
                            <div className='benefit_mo_card_content'>
                                <div className='card_mo_image'>
                                    <img className='benefit_mo_img' alt='craving' src={sleep} />
                                </div>
                                <div className='card_content text-center'>
                                    <p className='card_mo_text pb-5'>Better <br /> Sleep</p>
                                </div>
                            </div>
                        </div>
                        <div className='benefit_mo_card'>
                            <div className='benefit_mo_card_content'>
                                <div className='card_mo_image'>
                                    <img className='benefit_mo_img' alt='craving' src={glowing} />
                                </div>
                                <div className='card_content text-center'>
                                    <p className='card_mo_text pb-5'>Glowing & <br /> Clear Skin</p>
                                </div>
                            </div>
                        </div>
                        <div className='benefit_mo_card'>
                            <div className='benefit_mo_card_content'>
                                <div className='card_mo_image'>
                                    <img className='benefit_mo_img' alt='craving' src={energy} />
                                </div>
                                <div className='card_content text-center'>
                                    <p className='card_mo_text pb-5'>More <br /> Energy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='cover md:mx-20 sm:mx-10 mx-5 my-10 px-4 pt-8 md:w-3/5'>
                    <center className='mb-16'>
                        <h1 className=' text-2xl sm:text-3xl lg:text-4xl underline'>What are the 7 Habits I will Learn ?</h1>
                    </center>
                    <div className='habit_card_container mx-8 pb-6'>
                        <div className='habit_card_one md:flex'>
                            <div className='card_img_one md:flex flex-cols relative w-full md:w-1/3 h-48'>
                                <p className=' text-3xl lg:text-4xl pt-5 ms-4'>HABIT <br /> <span className='habit_count ml-10'>1.</span> </p>
                                <img className='flex md:mt-2 justify-end items-end absolute md:-right-16 md:inset-y-6 h-28 lg:h-32 md:ms-48 sm:ms-40  ms-28 mt-16' alt='habit' src={habitsvg1} />
                            </div>
                            <div className='card_habit_content text-center mx-5 md:mx-0 my-16 md:my-auto md:py-0 md:ml-20 ml-5 lg:ml-28 flex-none md:w-1/2'>
                                <p className='habit_heading heading_one'>Cleansing</p>
                                <p className='habit_desc'>Experience the two most practical ways of detoxifying your body everyday</p>
                            </div>
                        </div>
                        <div className='habit_card_two md:flex'>
                            <div className='card_img_two md:flex flex-cols relative w-full md:w-1/3 h-48'>
                                <p className=' text-3xl lg:text-4xl pt-5 ms-4'>HABIT <br /> <span className='habit_count ml-10'>2.</span> </p>
                                <img className='flex md:mt-2 justify-end items-end absolute md:-right-16 md:inset-y-6 h-28 lg:h-32 md:ms-48 sm:ms-40  ms-28 mt-16' alt='habit' src={habitsvg2} />
                            </div>
                            <div className='card_habit_content text-center mx-5 md:mx-0 my-16 md:my-auto md:py-0 md:ml-20 ml-5 lg:ml-28 flex-none md:w-1/2'>
                                <p className='habit_heading heading_two'>Food</p>
                                <p className='habit_desc'>Understand what food the human body is designed to eat</p>
                            </div>
                        </div>
                        <div className='habit_card_three md:flex'>
                            <div className='card_img_three md:flex flex-cols relative w-full md:w-1/3 h-48'>
                                <p className=' text-3xl lg:text-4xl pt-5 ms-4'>HABIT <br /> <span className='habit_count ml-10'>3.</span> </p>
                                <img className='flex md:mt-2 justify-end items-end absolute md:-right-16 md:inset-y-6 h-28 lg:h-32 md:ms-48 sm:ms-40  ms-28 mt-16' alt='habit' src={habitsvg3} />
                            </div>
                            <div className='card_habit_content text-center mx-5 md:mx-0 my-16 md:my-auto md:py-0 md:ml-20 ml-5 lg:ml-28 flex-none md:w-1/2'>
                                <p className='habit_heading heading_three'>Sleep</p>
                                <p className='habit_desc'>Learn practice tips as to how you can deepen your sleep</p>
                            </div>
                        </div>
                        <div className='habit_card_four md:flex'>
                            <div className='card_img_four md:flex flex-cols relative w-full md:w-1/3 h-48'>
                                <p className=' text-3xl lg:text-4xl pt-5 ms-4'>HABIT <br /> <span className='habit_count ml-10'>4.</span> </p>
                                <img className='flex md:mt-2 justify-end items-end absolute md:-right-16 md:inset-y-6 h-28 lg:h-32 md:ms-48 sm:ms-40  ms-28 mt-16' alt='habit' src={habitsvg4} />
                            </div>
                            <div className='card_habit_content text-center mx-5 md:mx-0 my-16 md:my-auto md:py-0 md:ml-20 ml-5 lg:ml-28 flex-none md:w-1/2'>
                                <p className='habit_heading heading_four'>Movement</p>
                                <p className='habit_desc'>Build a consistent exercise routine that you can actually follow.</p>
                            </div>
                        </div>
                        <div className='habit_card_five md:flex'>
                            <div className='card_img_five md:flex flex-cols relative w-full md:w-1/3 h-48'>
                                <p className=' text-3xl lg:text-4xl pt-5 ms-4'>HABIT <br /> <span className='habit_count ml-10'>5.</span> </p>
                                <img className='flex md:mt-2 justify-end items-end absolute md:-right-16 md:inset-y-6 h-28 lg:h-32 md:ms-48 sm:ms-40  ms-28 mt-16' alt='habit' src={habitsvg5} />
                            </div>
                            <div className='card_habit_content text-center mx-5 md:mx-0 my-16 md:my-auto md:py-0 md:ml-20 ml-5 lg:ml-28 flex-none md:w-1/2'>
                                <p className='habit_heading heading_five'>Relationships</p>
                                <p className='habit_desc'>Learn how to improve your existing relationships and fix the strained ones.</p>
                            </div>
                        </div>
                        <div className='habit_card_six md:flex'>
                            <div className='card_img_six md:flex flex-cols relative w-full md:w-1/3 h-48'>
                                <p className=' text-3xl lg:text-4xl pt-5 ms-4'>HABIT <br /> <span className='habit_count ml-10'>6.</span> </p>
                                <img className='flex md:mt-2 justify-end items-end absolute md:-right-16 md:inset-y-6 h-28 lg:h-32 md:ms-48 sm:ms-40  ms-28 mt-16' alt='habit' src={habitsvg6} />
                            </div>
                            <div className='card_habit_content text-center mx-5 md:mx-0 my-16 md:my-auto md:py-0 md:ml-20 ml-5 lg:ml-28 flex-none md:w-1/2'>
                                <p className='habit_heading heading_six'>Purpose</p>
                                <p className='habit_desc'>We are all sent to this Earth with an intention. Find out yours!</p>
                            </div>
                        </div>
                        <div className='habit_card_seven md:flex'>
                            <div className='card_img_seven md:flex flex-cols relative w-full md:w-1/3 h-48'>
                                <p className=' text-3xl lg:text-4xl pt-5 ms-4'>HABIT <br /> <span className='habit_count ml-10'>7.</span> </p>
                                <img className='flex md:mt-2 justify-end items-end absolute md:-right-16 md:inset-y-6 h-28 lg:h-32 md:ms-48 sm:ms-40  ms-28 mt-16' alt='habit' src={habitsvg7} />
                            </div>
                            <div className='card_habit_content text-center mx-5 md:mx-0 my-16 md:my-auto md:py-0 md:ml-20 ml-5 lg:ml-28 flex-none md:w-1/2'>
                                <p className='habit_heading heading_seven'>Surprise</p>
                                <p className='habit_desc'>Join the challenge to know more.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Testimonial />
                {/* <Programme /> */}
                {/* <AboutFaq /> */}
                <div id='speakers'><Speakers /></div>
                <div id='register-here'><Register /></div>
            </div>
            <div className='footer_section flex justify-center'><p>To know more visit at</p> &nbsp; &nbsp; <a className='fitfamily_link' href='https://fitfamilyhitfamily.com'> <u>https://fitfamilyhitfamily.com</u></a> </div>
        </>
    )
}

export default Home