import React, { useEffect, useState } from 'react';
import whatsapp from '../Images/WhatsApp.png';
import logo from '../Images/logo.svg';
import { Link } from 'react-router-dom';
import uturn from '../Images/arrowdown.png'
const WhatsappLink = () => {
    const [refreshed, setRefreshed] = useState(false);

    useEffect(() => {
        const isFirstTime = localStorage.getItem('firstTimeLoad') === null;

        if (isFirstTime) {
            localStorage.setItem('firstTimeLoad', 'false');
            setRefreshed(true);
            window.location.reload();

        }
    }, []);

    return (
        <>
            {refreshed && (
                <div className='logo_bg h-20 flex justify-center items-top'>
                    <div className='logo_div h-28 w-28'>
                        <img className='logo_img h-full w-full' alt='Logo' src={logo} />
                    </div>
                </div>
            )}
            <div className='whatsapp_container md:mx-24 sm:mx-10 mx-5 my-20 rounded-xl'>
                <div className='h-96'>
                    <div className='pay_success pt-16 text-center'>
                        <p className='pay_success_p md:text-3xl text-xl mb-4'>
                            Your payment is successful!
                        </p>
                        <p className='join_whatsapp md:text-xl text-xl my-5'>
                            Join our Whatsapp Group for Further Updates
                        </p>
                        <div className='flex justify-center -ml-28'>
                            <p>Please Click Here</p>
                            <img className='u_turn h-8 w-8 mt-3 ml-3' alt='arrow down' src={uturn} />
                        </div>
                        <div className='w-32 mx-auto'>
                            <Link to='https://chat.whatsapp.com/Eard00ZH3UHJ6PsG64oUKe' className='text-lg link_whatsapp'>
                                <img className='h-24 mx-auto mt-3' alt='whatsappLink' src={whatsapp} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatsappLink;
