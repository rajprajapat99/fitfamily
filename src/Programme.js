import React from 'react'
import icon from './Images/Icons.svg'
import professional from './Images/working.png'
import housewife from './Images/housewife.png'
import student from './Images/student.png'
import parent from './Images/parents.png'
import youth from './Images/youth.png'
import spiritual from './Images/spiritual.png'
import notfor from './Images/notfor.png'
import mother from './Images/mother.png'
import old from './Images/old.png'
import child from './Images/child.png'
import lazy from './Images/lazy.png'


const Programme = () => {
    return (
        <>
            <div className='cover mx-16 mt-24 px-4 pt-10  w-3/5'>
                <center className='programme_heading'>
                    <img className='icon' alt='icon' src={icon} />
                    <p className='programme_for ml-5'>Who is This For ?</p>
                </center>
                <div className='programme_card_container mx-8 my-10 grid md:grid-cols-2 grid-cols-1 gap-10'>
                    <div className='professional_card flex py-3'>
                        <div className='programme_image'>
                            <img className='prog_img' alt='professional' src={professional} />
                        </div>
                        <div className='programme_content my-auto mx-2'>
                            <p className='professional_heading_p'>For Working Professional</p>
                            <p className='programme_text'>You live a very busy life and have no time to spend on your health? Well, this workshop is for you. By spending just 60 minutes every morning, you can transform your life!</p>
                        </div>
                    </div>
                    <div className='housewife_card flex py-3'>
                        <div className='programme_image'>
                        <img className='prog_img' alt='housewife' src={housewife} />
                        </div>
                        <div className='programme_content my-auto mx-2'>
                            <p className='housewife_heading_p'>For Homemakers</p>
                            <p className='programme_text'>Always taking care of others but forget to do something meaningful for your own health? Well, it's time to focus on yourself so you can better support your family.</p>
                        </div>
                    </div>
                    <div className='student_card flex py-3'>
                        <div className='programme_image'>
                        <img className='prog_img' alt='student' src={student} />
                        </div>
                        <div className='programme_content my-auto mx-2'>
                            <p className='student_heading_p'>For Students Wanting Better Focus</p>
                            <p className='programme_text'>If you're focusing on self growth and personal development, and want unwavering attention and high levels of energy to accomplish your goals, this challenge is for you!</p>
                        </div>
                    </div>
                    <div className='parent_card flex py-3'>
                        <div className='programme_image'>
                        <img className='prog_img' alt='parent' src={parent} />
                        </div>
                        <div className='programme_content my-auto mx-2'>
                            <p className='parent_heading_p'>For Parents</p>
                            <p className='programme_text'>Not sure how to pass on great health habits to your children? In this challenge, you will learn about simple secrets of health that will improve your full family's health.</p>
                        </div>
                    </div>
                    <div className='youth_card flex py-3'>
                        <div className='programme_image'>
                        <img className='prog_img' alt='youth' src={youth} />
                        </div>
                        <div className='programme_content my-auto mx-2'>
                            <p className='youth_heading_p'>For Teenagers & Young Adults</p>
                            <p className='programme_text'>You will learn simple habits that will help you lead a disease-free life even when you grow up. This challenge will help you think about health beyond the physical level.</p>
                        </div>
                    </div>
                    <div className='spiritual_card flex py-3'>
                        <div className='programme_image'>
                        <img className='prog_img' alt='spiritual' src={spiritual} />
                        </div>
                        <div className='programme_content my-auto mx-2'>
                            <p className='spiritual_heading_p'>For Spiritual Seekers</p>
                            <p className='programme_text'>You are spiritually inclined but unhappy with your progress? Well, this course will teach you the basics of how to maintain a clean body and mind for fastest spiritual growth.</p>
                        </div>
                    </div>
                </div>



                <center>
                    <div className='programme_heading'>
                        <img className='icon' alt='icon' src={notfor} />
                        <p className='programme_not_for ml-5'>Who This Program Is Not For</p>
                    </div>
                    <p className='Programme_not_p'>The meal plan followed in this challenge will not be sufficient for:</p>
                </center>
                <div className='programme_card_container mx-8 my-10 pb-16 grid md:grid-cols-2 grid-cols-1 gap-10'>
                    <div className='programme_not_for_card px-5 flex'>
                        <div className='programme_image'>
                            <img className='prog_not_img' alt='mother' src={mother} />
                        </div>
                        <div className='programme_content my-auto mx-5'>
                            <p className='programme_not_text pl-5'>Pregnant or <br /> breastfeeding mothers</p>
                        </div>
                    </div>
                    <div className='programme_not_for_card px-5 flex'>
                        <div className='programme_image'>
                        <img className='prog_not_img' alt='old' src={old} />
                        </div>
                        <div className='programme_content my-auto mx-5'>
                            <p className='programme_not_text pl-5'> Elderly Citizens <br /> Above Age 60 </p>
                        </div>
                    </div>
                    <div className='programme_not_for_card px-5 flex'>
                        <div className='programme_image'>
                        <img className='prog_not_img' alt='child' src={child} />
                        </div>
                        <div className='programme_content my-auto mx-5'>
                            <p className='programme_not_text pl-5'> Childern below <br /> Age 14 </p>
                        </div>
                    </div>
                    <div className='programme_not_for_card px-5 flex'>
                        <div className='programme_image'>
                        <img className='prog_not_img' alt='lazy' src={lazy} />
                        </div>
                        <div className='programme_content my-auto mx-5'>
                            <p className='programme_not_text pl-5'> Those not serious about <br /> their health </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programme