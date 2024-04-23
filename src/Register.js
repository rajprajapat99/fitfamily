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
    const [showAlert, setShowAlert] = useState(false);
    console.log(name, email, whatsapp, city, fromTime, toTime)

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked; // Get the current state of the checkbox
        setIsChecked(isChecked); // Update isChecked state based on checkbox status
        if (isChecked) { // Check if checkbox is checked
            handleSubmit(e); // Call handleSubmit if checkbox is checked
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !whatsapp || !city || !fromTime || !toTime) {
            console.error('Please fill in all required fields');
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            return;
        }
        const data = {
            Name: name,
            Email: email,
            Whatsapp: whatsapp,
            City: city,
            FromTime: fromTime,
            ToTime: toTime
        };
        axios.post('https://sheet.best/api/sheets/1e4d70a4-7176-4eae-bb2c-6c9ada019d7b', data)
            .then((response) => {
                console.log(response);
                setName('');
                setEmail('');
                setWhatsapp('');
                setCity('');
                setFromTime('');
                setToTime('');
                // Call the "Pay Now" function here
                // payNow();
            })
            .catch((error) => {
                console.error('Error while submitting data:', error);
                // Handle error if needed
            });
    }

    // const payNow = () => {
    //     const script = document.createElement('script');
    //     script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    //     script.setAttribute('data-payment_button_id', 'pl_O1ZlX0NhjA1LUG');
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // };

    return (
        <>
            <div className='register_form_div cover px-16 mt-24 mx-2 pt-10' id='formregister'>

                {showAlert && (
                    <div className="alert new_add_alert alert-dismissible fade show" role="alert">
                        Please Enter all the Details
                    </div>
                )}
                <center>
                    <h1 className='register_now_heading'>Register Now</h1>
                </center>
                <div className='mx-8'>
                    <form className="pb-10" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className="mb-5 input_div flex w-4/5">
                                <div className='name_tag'>Name*</div>
                                <input
                                    type="text"
                                    id="name"
                                    className="text-gray-900 text-sm rounded-3xl p-2.5 dark:placeholder-gray-400 w-2/3"
                                    placeholder="Enter Your Full Name Here..."
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name} />
                            </div>
                            <div className="mb-5 input_div flex  w-4/5">
                                <div className='name_tag'>Email Id*</div>
                                <input type="email" id="email" className=" text-gray-900 text-sm w-4/5  rounded-3xl p-2.5 dark:placeholder-gray-400  " placeholder="Enter Your Email Address Here..." required onChange={(e) => setEmail(e.target.value)}
                                    value={email} />
                            </div>
                            <div className="mb-5 input_div flex w-4/5">
                                <div className='name_tag'>Whatsapp No.*</div>
                                <input
                                    type="text"
                                    id="whatsapp"
                                    className="text-gray-900 text-sm w-2/3 rounded-3xl p-2.5 dark:placeholder-gray-400"
                                    placeholder="Enter 10-digit Number Here..."
                                    pattern="[0-9]{10}"
                                    title="Please enter a 10-digit number"
                                    maxLength="10"
                                    required
                                    onChange={(e) => {
                                        const sanitizedValue = e.target.value.replace(/\D/g, '');
                                        setWhatsapp(sanitizedValue);
                                    }}
                                    value={whatsapp}
                                />
                            </div>

                            <div className="mb-5 input_div flex  w-4/5">
                                <div className='name_tag'>Your City*</div>
                                <input type="text" id="city" className=" text-gray-900 text-sm w-2/5  rounded-3xl p-2.5 dark:placeholder-gray-400  " placeholder="Jaipur, Rajasthan, India" required onChange={(e) => setCity(e.target.value)}
                                    value={city} />
                            </div>
                        </div>
                        <div className='time_choose_div flex grid-cols-3 gap-5 mr-28'>
                            <div className='choose_time w-full'>Choose Your Time Slot:</div>
                            <div className="mb-5 input_div flex w-full">
                                <div className='name_tag'>From:</div>
                                <input type="time" id="fromTime" className=" text-gray-900 text-sm w-full  rounded-3xl p-2.5 dark:placeholder-gray-400  " placeholder="Enter Your Full Name Here.." required onChange={(e) => setFromTime(e.target.value)}
                                    value={fromTime} />
                            </div>
                            <div className="mb-5 input_div flex w-full">
                                <div className='name_tag'>To:</div>
                                <input type="time" id="toTime" className=" text-gray-900 text-sm w-full  rounded-3xl p-2.5 dark:placeholder-gray-400  " placeholder="Enter Your Full Name Here.." required onChange={(e) => setToTime(e.target.value)}
                                    value={toTime} />
                            </div>
                        </div>
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="terms" onChange={handleCheckboxChange} type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Register