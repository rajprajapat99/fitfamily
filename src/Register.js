import React, { useState, useEffect } from 'react';
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
    const [showRazorpayButton, setShowRazorpayButton] = useState(false);

    const handleCheckboxChange = (e) => {
        if (!name || !email || !whatsapp || !city) {
            setShowAlert(true);
            setIsChecked(false)
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            return;
        }
        else {
            setIsChecked(e.target.checked);
            handleSubmit(e)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                console.log(response.data);
                setShowRazorpayButton(true);
                setName('');
                setEmail('');
                setWhatsapp('');
                setCity('');
                setFromTime('');
                setToTime('');
            })
            .catch((error) => {
                console.error('Error while submitting data:', error);
            });
    };

    useEffect(() => {
        if (showRazorpayButton) {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
            script.async = true;
            script.setAttribute('data-payment_button_id', 'pl_O1ZlX0NhjA1LUG');
            document.getElementById('registration-form').appendChild(script);
        }
    }, [showRazorpayButton]);

    return (
        <>
            <div className='register_form_div cover sm:px-16 mt-10 mx-4 md:mx-8 py-12' id='formregister'>

                {showAlert && (
                    <div className="alert new_add_alert alert-dismissible fade show" role="alert">
                        Please Enter all the Details
                    </div>
                )}
                <center>
                    <h1 className='register_now_heading'>Register Now</h1>
                </center>
                <div className='mx-8'>
                    <form id="registration-form" className="pb-10" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className="mb-5 input_div flex sm:w-4/5">
                                <div className='name_tag text-sm p-2 sm:text-lg'>Name*</div>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    id="name"
                                    className="register_input text-gray-900 text-sm sm:text-lg rounded-3xl p-2.5 dark:placeholder-gray-400 w-full mr-2"
                                    placeholder="Enter Your Full Name Here..."
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name} />
                            </div>
                            <div className="mb-5 input_div flex  sm:w-4/5">
                                <div className='name_tag  text-sm p-2 sm:text-lg'>Email Id*</div>
                                <input
                                    type="email"
                                    autoComplete="off"
                                    id="email"
                                    className="register_input text-sm sm:text-lg text-gray-900  w-full mr-2  rounded-3xl p-2.5 dark:placeholder-gray-400  "
                                    placeholder="Enter Your Email Address Here..."
                                    required onChange={(e) => setEmail(e.target.value)}
                                    value={email} />
                            </div>
                            <div className="mb-5 input_div flex sm:w-4/5">
                                <div className='name_tag  text-sm p-2 sm:text-lg'>Whatsapp No.*</div>
                                <input
                                    type="text"
                                    id="whatsapp"
                                    className="register_input text-gray-900 text-sm sm:text-lg w-3/5 rounded-3xl p-2.5 dark:placeholder-gray-400"
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

                            <div className="mb-5 input_div flex  sm:w-4/5">
                                <div className='name_tag  text-sm p-2 sm:text-lg'>Your City*</div>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    id="city"
                                    className="register_input text-gray-900 text-sm sm:text-lg w-3/5 rounded-3xl p-2.5 dark:placeholder-gray-400  "
                                    placeholder="Jaipur, Rajasthan, India"
                                    required onChange={(e) => setCity(e.target.value)}
                                    value={city} />
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-5">
                            <div className="flex items-center h-5">
                                <input id="terms" onChange={handleCheckboxChange} type="checkbox" checked={isChecked} className="w-4 h-4 border border-red-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="terms" className="ms-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#formregister" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
