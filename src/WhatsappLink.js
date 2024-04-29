import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/logo.svg'

const WhatsappLink = () => {
    return (
        <>
            <div className='logo_bg h-20 flex justify-center items-top'>
                <div className='logo_div h-28 w-28'>
                    <Link to="/">
                        <img className='logo_img h-full w-full' alt='Logo' src={logo} />
                    </Link>
                </div>
            </div>
            <div className='whatsapp_container md:mx-24 sm:mx-10 mx-5 my-20 rounded-xl'>
                <div className='h-96'>
                    <div className='pay_success pt-16 text-center'>
                        <p className='pay_success_p md:text-3xl text-xl mb-4'>
                            Your payment is successful !
                        </p>
                        <p className='join_whatsapp md:text-xl text-xl my-5'>
                            Join our whatsapp Group for Daily Updates
                        </p>
                        <a className='text-lg link_whatsapp' href='https://chat.whatsapp.com/Eard00ZH3UHJ6PsG64oUKe'>WhatsappLink</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WhatsappLink