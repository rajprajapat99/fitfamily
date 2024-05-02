import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import '../node_modules/slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import testimonials from './Images/testimonials.mp4'
import star from './Images/Star 4.png'
import samta from './Images/samta.jpg'
import yatendra from './Images/yatendra.webp'
import disha from './Images/disha.webp'
import saravanapriya from './Images/saravanapriya.webp'
import anju from './Images/anju.webp'
import line from './Images/line.svg'
import comma from './Images/comma.png'

const Testimonial = () => {
    const videoRef = useRef(null);

    useEffect(() => {

        localStorage.clear();
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);
    // let settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1100,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 650,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         }
    //     ]
    // };
    return (
        <>
            <div className='testimonial_header w-full md:w-2/3'>
                <div className='testimonial_head flex'>
                    <div className=''>
                        <svg className=" lg:w-40 lg:h-40 md:w-32 md-h-28 w-20" viewBox="0 0 255 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.2 139C8.2 102.2 10.3333 75 14.6 57.4C18.8667 39.8 27.6667 27.2666 41 19.8C54.8667 12.3333 76.4667 8.59998 105.8 8.59998V48.6C88.7333 48.6 77.5333 52.3333 72.2 59.8C66.8667 67.2667 64.2 81.6666 64.2 103V115.8H99.4V205.4H8.2V139ZM143.4 139C143.4 102.2 145.533 75 149.8 57.4C154.067 39.8 163.133 27.2666 177 19.8C190.867 12.3333 212.467 8.59998 241.8 8.59998V48.6C224.733 48.6 213.267 52.3333 207.4 59.8C202.067 67.2667 199.4 81.6666 199.4 103V115.8H235.4V205.4H143.4V139Z" fill="white" fillOpacity="0.4" />
                        </svg>
                    </div>
                    <div className='flex justify-center text-center my-auto'>
                        <p><span className='testimonial_heading md:text-4xl sm:text-2xl text-xl'>People are saying </span> <br /> <span className='testimonial_client md:text-lg sm:text-lg text-base'>Listen to people who have already attended and benefitted from this challenge</span> </p>
                    </div>
                    <div className='testimonial_comma_svg mx-auto'>
                        <svg className=" lg:w-40 lg:h-40 md:w-32 md-h-28 w-20" viewBox="0 0 255 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M246.8 99C246.8 135.8 244.667 163 240.4 180.6C236.133 198.2 227.333 210.733 214 218.2C200.133 225.667 178.533 229.4 149.2 229.4L149.2 189.4C166.267 189.4 177.467 185.667 182.8 178.2C188.133 170.733 190.8 156.333 190.8 135L190.8 122.2L155.6 122.2L155.6 32.6L246.8 32.6L246.8 99ZM111.6 99C111.6 135.8 109.467 163 105.2 180.6C100.933 198.2 91.8666 210.733 78 218.2C64.1333 225.667 42.5333 229.4 13.2 229.4L13.1999 189.4C30.2666 189.4 41.7333 185.667 47.6 178.2C52.9333 170.733 55.5999 156.333 55.5999 135L55.5999 122.2L19.6 122.2L19.5999 32.6L111.6 32.6L111.6 99Z" fill="white" fill-opacity="0.4" />
                        </svg>
                    </div>
                </div>
                <div className='rounded p-10'>
                    <video ref={videoRef} autoPlay loop muted pause controls className='w-full h-full rounded mt-5 md:mt-0'>
                        <source src={testimonials} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* <div className='testimonial_container w-full md:w-3/5'>
                <div className="mx-8">
                    <Slider {...settings}>
                        <div className="px-5 mx-5">
                            <div className="testimonial_card  h-auto rounded">
                                <div className="testimonial_head_content flex">
                                    <div className="card_image_div">
                                        <img className="card_image" alt="samta" src={samta} />
                                    </div>
                                    <div className="card_name_div ml-5">
                                        <div className="card_special_img flex">
                                            <img className="line_imgs" alt="line" src={line} />
                                            <img className="line_img ml-3" alt="line" src={comma} />
                                        </div>
                                        <p className="card_name">Samta Kumar</p>
                                        <p className="card_add">42, Noida</p>
                                        <div className="card_star_div flex gap-2">
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card_text_content mx-5">
                                    <p className="card_text_say pb-7">Due to hypothyroidism, my weight had been stuck for a long time. Within just 3 weeks of the workshop, my weight got reduced. I also had severe constipation, but it is no longer an issue. But now, I can sleep deeply. This workshop is a life-transforming challenge.</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-10 mx-5">
                            <div className="testimonial_card  h-auto rounded">
                                <div className="testimonial_head_content flex">
                                    <div className="card_image_div">
                                        <img className="card_image" alt="samta" src={saravanapriya} />
                                    </div>
                                    <div className="card_name_div ml-5">
                                        <div className="card_special_img flex">
                                            <img className="line_imgs" alt="line" src={line} />
                                            <img className="line_img ml-3" alt="line" src={comma} />
                                        </div>
                                        <p className="card_name">Saravanapriya Panneerselvam</p>
                                        <p className="card_add">18, Salem, Tamil Nadu</p>
                                        <div className="card_star_div flex gap-2">
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card_text_content mx-5">
                                    <p className="card_text_say pb-7">I lost 3 kgs in 3 weeks of this workshop. But actually, I got so much more than just the weight loss. I just want to say, if you want to transform your life into a happier, healthier one, just join the Ultimate Health Challenge</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-10 mx-5">
                            <div className="testimonial_card  h-auto rounded">
                                <div className="testimonial_head_content flex">
                                    <div className="card_image_div">
                                        <img className="card_image" alt="samta" src={yatendra} />
                                    </div>
                                    <div className="card_name_div ml-5">
                                        <div className="card_special_img flex">
                                            <img className="line_imgs" alt="line" src={line} />
                                            <img className="line_img ml-3" alt="line" src={comma} />
                                        </div>
                                        <p className="card_name">Yatendra Solanki</p>
                                        <p className="card_add">47, Mumbai</p>
                                        <div className="card_star_div flex gap-2">
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card_text_content mx-5">
                                    <p className="card_text_say pb-7">All my life, my mom told me to wake up early. After attending this workshop, I understood WHY I should wake up early. I now wake up at 4:30 am every day</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-10 mx-5">
                            <div className="testimonial_card  h-auto rounded">
                                <div className="testimonial_head_content flex">
                                    <div className="card_image_div">
                                        <img className="card_image" alt="samta" src={anju} />
                                    </div>
                                    <div className="card_name_div ml-5">
                                        <div className="card_special_img flex">
                                            <img className="line_imgs" alt="line" src={line} />
                                            <img className="line_img ml-3" alt="line" src={comma} />
                                        </div>
                                        <p className="card_name">Anju Chandora</p>
                                        <p className="card_add">26, Jaipur</p>
                                        <div className="card_star_div flex gap-2">
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card_text_content mx-5">
                                    <p className="card_text_say pb-7">During my periods I used to get a lot of pimples on my face. After attending this workshop, this was the first time that I did not have a single pimple on my face.</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-10 mx-5">
                            <div className="testimonial_card  h-auto rounded">
                                <div className="testimonial_head_content flex">
                                    <div className="card_image_div">
                                        <img className="card_image" alt="samta" src={disha} />
                                    </div>
                                    <div className="card_name_div ml-5">
                                        <div className="card_special_img flex">
                                            <img className="line_imgs" alt="line" src={line} />
                                            <img className="line_img ml-3" alt="line" src={comma} />
                                        </div>
                                        <p className="card_name">Disha Mehta</p>
                                        <p className="card_add">30, vadodara, Gujarat</p>
                                        <div className="card_star_div flex gap-2">
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                            <img className="card_star" alt="star" src={star} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card_text_content mx-5">
                                    <p className="card_text_say pb-7">The cost is nothing against the knowledge Iâve gained from the challenge. This workshop is unbelievably amazing. Itâs one of the best decisions Iâve ever made.</p>
                                </div>
                            </div>
                        </div>

                    </Slider>
                    
                </div>
                
            </div> */}
        </>
    )
}

export default Testimonial