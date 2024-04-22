import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    console.log(name, email, whatsapp,  city, fromTime, toTime)

    const handleCheckboxChange = (e) => {
        setIsChecked(true);
        if (!isChecked) {
            handleSubmit(e);
        }
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(name, email, whatsapp, city, fromTime, toTime)
        const data={
            Name: name,
            Email: email,
            Whatsapp: whatsapp,
            City: city,
            FromTime: fromTime,
            ToTime: toTime
        }
        axios.post('https://sheet.best/api/sheets/1e4d70a4-7176-4eae-bb2c-6c9ada019d7b', data).then((response)=>{
            console.log(response);
            setName('');
            setEmail('');
            setWhatsapp('');
            setCity('');
            setFromTime('');
            setToTime('')
        })
    }
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', 'pl_O1ZlX0NhjA1LUG');
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className='register_form_div cover px-16 mt-24  pt-10' id='formregister'>
                <center>
                    <h1 className='register_heading'>Register Now</h1>
                </center>
                <div className='grid grid-col-2 mx-8'>
                    <form className="pb-10" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2'>
                            <div className="mb-5 input_div flex w-4/5">
                                <div className='name_tag'>Name*</div>
                                <input
                                    type="text"
                                    id="name"
                                    className="text-gray-900 text-sm rounded-lg p-2.5 dark:placeholder-gray-400"
                                    placeholder="Enter Your Full Name Here..."
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name} />
                            </div>
                            <div className="mb-5 input_div flex  w-4/5">
                                <div className='name_tag'>Email Id*</div>
                                <input type="email" id="email" className=" text-gray-900 text-sm rounded-lg w-auto p-2.5 dark:placeholder-gray-400  " placeholder="Enter Your Email Address Here..." required onChange={(e) => setEmail(e.target.value)}
                                    value={email}/>
                            </div>
                            <div className="mb-5 input_div flex  w-4/5">
                                <div className='name_tag'>Whatsapp No.*</div>
                                <input type="number" id="whatsapp" className=" text-gray-900 text-sm rounded-lg p-2.5 dark:placeholder-gray-400  " placeholder="Number Here..." required onChange={(e) => setWhatsapp(e.target.value)}
                                    value={whatsapp}/>
                            </div>
                            <div className="mb-5 input_div flex  w-4/5">
                                <div className='name_tag'>Your City*</div>
                                <input type="text" id="city" className=" text-gray-900 text-sm rounded-lg p-2.5 dark:placeholder-gray-400  " placeholder="Jaipur, Rajasthan, India" required onChange={(e) => setCity(e.target.value)}
                                    value={city}/>
                            </div>
                        </div>
                        <div className='time_choose_div grid grid-cols-3'>
                            <div className='choose_time'>Choose Your Time Slot:</div>
                            <div className="mb-5 input_div flex">
                                <div className='name_tag'>From:</div>
                                <input type="time" id="fromTime" className=" text-gray-900 text-sm rounded-lg p-2.5 dark:placeholder-gray-400  " placeholder="Enter Your Full Name Here.." required onChange={(e) => setFromTime(e.target.value)}
                                    value={fromTime}/>
                            </div>
                            <div className="mb-5 input_div flex">
                                <div className='name_tag'>To:</div>
                                <input type="time" id="toTime" className=" text-gray-900 text-sm rounded-lg p-2.5 dark:placeholder-gray-400  " placeholder="Enter Your Full Name Here.." required onChange={(e) => setToTime(e.target.value)}
                                    value={toTime}/>
                            </div>
                        </div>
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="terms" onChange={handleCheckboxChange} type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                        </div>
                        <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_O1ZlX0NhjA1LUG" async></script>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Register