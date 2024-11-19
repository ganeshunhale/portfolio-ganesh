import React from 'react'
import TitleHeading from './TitleHeading'
import useAOS from '../hooks/useAOS'
import { PiDeviceMobileCamera } from "react-icons/pi";
import { FaRegCompass } from "react-icons/fa6";
import { PiEnvelopeOpenDuotone } from "react-icons/pi";

const ContactDetails = () => {
    useAOS()
    return (
        <div>
            <TitleHeading reqBtn={false}
                h2Text='Contact Details'
                pText="I’m a software developer specializing in JavaScript React, and React Native. If you’re looking to build web or mobile apps, let’s connect and discuss how I can help bring your ideas to life!"
                dataAos='fade-left'
            />
            <div data-aos="fade-up" className='flex flex-wrap gap-3 md:gap-6 items-center justify-between mt-8 md:mt-15'>
                <div className='flex gap-3 items-center p-3 md:p-5 border-l-[1px] border-blue-500'>
                    <PiDeviceMobileCamera className='text-primary fs-one' />
                    <div>
                        <span className='fs-five font-semibold block mb-2'>Phone</span>
                        <a href="tel:+919820317676">+91 9324311833</a>
                    </div>
                </div>
                <div className='flex gap-3 items-center p-3 md:p-5 border-l-[1px]'>
                    <FaRegCompass className='text-primary fs-one' />
                    <div>
                        <span className='fs-five font-semibold block mb-2'>Location</span>
                        <span>Kandivali, Mumbai 400067, India</span>
                    </div>
                </div>
                <div className='flex gap-3 items-center p-3 md:p-5 border-l-[1px]'>
                    <PiEnvelopeOpenDuotone className='text-primary fs-one' />
                    <div>
                        <span className='fs-five font-semibold block mb-2'>Email</span>
                        <a href="mailto:Ganesh.unhale.55@gmail.com">Ganesh.unhale.55@gmail.com</a>
                    </div>
                </div>

            </div>
            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1885.0569903569026!2d72.8874136!3d19.102655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87204f8fcf1%3A0x3fc380686ed4cd51!2sSaki%20Naka!5e0!3m2!1sen!2sin!4v1729505919344!5m2!1sen!2sin"
                width="100%"
                height="450"
                className='my-10'
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15070.321058307334!2d72.84083027523789!3d19.213526773435053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6d40d6d59e7%3A0x78a5c2492ea59b9b!2sMahavir%20Nagar%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1730981452526!5m2!1sen!2sin"
            width="100%"
            height="450"
            className='my-10'
            allowFullScreen
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}

export default ContactDetails
