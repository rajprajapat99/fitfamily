import React from 'react'
import notfor from './Images/notfor.png'
import mother from './Images/mother.png'
import old from './Images/old.png'
import child from './Images/child.png'
import lazy from './Images/lazy.png'


const Programme = () => {
    return (
        <>
            <div className='cover sm:mx-16 mx-5 mt-16 px-4 pt-10 md:w-3/5'>
                <center>
                    <div className='programme_heading'>
                        <img className='icon' alt='icon' src={notfor} />
                        <p className='programme_not_for text-2xl md:text-4xl ml-5'>Who This Program Is Not For</p>
                    </div>
                    <p className='Programme_not_p'>The meal plan followed in this challenge will not be sufficient for:</p>
                </center>
                <div className='programme_card_container mx-8 my-10 pb-16 grid sm:grid-cols-2 grid-cols-1 gap-10'>
                    <div className='programme_not_for_card sm:flex'>
                        <div className='programme_image flex justify-center'>
                            <img className='m28w-52 md:h-220w-40 h-20' alt='mother' src={mother} />
                        </div>
                        <div className='programme_content my-auto mx-5 flex justify-center'>
                            <p className='programme_not_text lg:text-lg sm:text-base text-sm text-center'>Pregnant or <br /> breastfeeding mothers</p>
                        </div>
                    </div>
                    <div className='programme_not_for_card sm:flex'>
                        <div className='programme_image flex justify-center'>
                            <img className='md:w-28 md:h-28 w-20 h-20' alt='old' src={old} />
                        </div>
                        <div className='programme_content my-auto mx-5'>
                            <p className='programme_not_text lg:text-lg sm:text-base text-sm text-center'> Elderly Citizens <br /> Above Age 60 </p>
                        </div>
                    </div>
                    <div className='programme_not_for_card sm:flex'>
                        <div className='programme_image flex justify-center'>
                            <img className='md:w-28 md:h-28 w-20 h-20' alt='child' src={child} />
                        </div>
                        <div className='programme_content my-auto mx-5'>
                            <p className='programme_not_text lg:text-lg sm:text-base text-sm text-center'> Childern below <br /> Age 14 </p>
                        </div>
                    </div>
                    <div className='programme_not_for_card sm:flex'>
                        <div className='programme_image flex justify-center'>
                            <img className='md:w-28 md:h-28 w-20 h-20' alt='lazy' src={lazy} />
                        </div>
                        <div className='programme_content my-auto mx-5'>
                            <p className='programme_not_text lg:text-lg sm:text-base text-sm text-center'> Those not serious about <br /> their health </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programme