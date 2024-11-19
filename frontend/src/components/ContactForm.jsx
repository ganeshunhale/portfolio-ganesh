import React from 'react';
import { FaRegEnvelope, FaRegUser } from 'react-icons/fa';
import { FiMapPin } from "react-icons/fi";
import { PiDeviceMobileCamera } from "react-icons/pi";
import TitleHeading from './TitleHeading';
import useAOS from '../hooks/useAOS';
import Button from './Button';

const ContactForm = () => {
    useAOS();

    const handleFocus = (event) => {
        event.target.parentElement.classList.add("border-blue-600");
    };

    const handleBlur = (event) => {
        event.target.parentElement.classList.remove("border-blue-600");
    };

    return (
        <section className="">
            <div className="container mx-auto">
                <TitleHeading
                    dataAos='fade-up'
                    h2Text='Get In Touch'
                    pText="Interested in working together or have a quick question? Feel free to fill out the contact form below or drop me an email at Ganesh.unhale.55@gmail.com. Let’s connect—follow me on my social channels as well!"
                />
                <form
                    data-aos="zoom-in"
                    id="contact-form"
                    autoComplete="on"
                    className="mt-8 md:mt-15 pt-5 px-5 md:pt-10 rounded-lg border bg-white dark:bg-gray-800 shadow-lg"
                >
                    <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-6 mb-3 md:mb-6">
                        <div className="flex text-blue-600 items-center gap-2 px-3 md:px-5 py-2 md:py-4 rounded-md border w-full">
                            <FaRegUser className="text-xl" />
                            <input
                                className="flex-1 focus:outline-none dark:bg-gray-800"
                                placeholder="Your Name*"
                                type="text"
                                id="name"
                                autoComplete="off"
                                required
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="flex text-blue-600 items-center gap-2 px-3 md:px-5 py-2 md:py-4 rounded-md border w-full">
                            <FaRegEnvelope className="text-blue-600 text-xl " />
                            <input
                                className="flex-1 focus:outline-none dark:bg-gray-800"
                                placeholder="Email address*"
                                type="email"
                                id="email"
                                autoComplete="off"
                                required
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap gap-6 mb-6">
                        <div className="flex text-blue-600 items-center gap-2 px-3 md:px-5 py-2 md:py-4 rounded-md border w-full">
                            <PiDeviceMobileCamera className="text-blue-600 text-xl" />
                            <input
                                className="flex-1 focus:outline-none dark:bg-gray-800 border-none"
                                placeholder="Phone*"
                                type="number"
                                id="phone"
                                autoComplete="off"
                                required
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="flex text-blue-600 items-center gap-2 px-3 md:px-5 py-2 md:py-4 rounded-md border w-full">
                            <FiMapPin className="text-blue-600 text-xl" />
                            <input
                                className="flex-1 focus:outline-none dark:bg-gray-800"
                                placeholder="Location*"
                                type="text"
                                id="location"
                                autoComplete="off"
                                required
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <textarea
                            className="w-full border focus:border-blue-600 focus:outline-none px-3 py-2 rounded-md dark:bg-gray-800"
                            placeholder="Your Message:"
                            id="message"
                            autoComplete="off"
                            rows={6}
                        ></textarea>
                    </div>
                    <div className="flex gap-2 items-center mt-3">
                        <input id="check" type="checkbox" className="cursor-pointer" />
                        <label htmlFor="check" className="text-gray-700 dark:text-white text-sm cursor-pointer">
                            Save my name, email, and website in this browser for the next time.
                        </label>
                    </div>
                    <div className='py-2 md:py-6 lg:py-7 '>
                        <Button title='Send Message' />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
