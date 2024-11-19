import React from 'react';
import { NavLink } from 'react-router-dom';
import { profile_img, ganesh } from '../assets/images';
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { PiShoppingBagThin, PiNotebookLight, PiBriefcaseLight, PiUser, PiCodeBlockLight, PiNewspaperClippingLight, PiEnvelopeLight, PiPaperPlaneTiltBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import Button from './Button';
import projectData from '../assets/data/projectData';

const NavBar = () => {
    return (
        <div className="fixed z-30 !bg-gray-100 dark:!bg-gray-800  dark:border-t lg:border-none   lg:bg-white border-gray-300 lg:sticky bottom-0 lg:top-0 lg:flex flex-row lg:flex-col  dark:lg:!bg-[#4F4F4F] lg:py-10 justify-between items-center px-4 lg:px-6 w-full lg:!max-w-[230px] secBg lg:h-[100vh] navbar-section">
            <div className='w-full'>
                <div className="hidden lg:flex flex-col items-center w-full mb-10 navbar-top-section">
                    <div className="flex justify-center items-center overflow-hidden w-[80px] h-[80px] rounded-full text-green-500 image_cover">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 11 15" fill="none">
                        <g clipPath="url(#clip0_3569_434)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.69145 8.43063L1.72801 5.49387L5.69145 2.54023V0L0 4.21303V6.75919L5.69145 10.9887V8.43063Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.72801 5.49387L5.69145 2.54023V0L0 4.21303V6.75919L1.72801 5.49387Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.86328 6.5702L8.82672 9.5065L4.86328 12.4606V15.0004L10.5552 10.7864V8.24163L4.86328 4.01172V6.5702Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.86328 6.5702L8.82672 9.5065L10.5552 10.7864V8.24163L4.86328 4.01172V6.5702Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.72466 2.00391C9.52091 2.00391 10.1657 2.64912 10.1657 3.44491C10.1657 4.24115 9.52091 4.88591 8.72466 4.88591C7.92841 4.88591 7.2832 4.2407 7.2832 3.44491C7.2832 2.64912 7.92841 2.00391 8.72466 2.00391Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.83013 12.9972C1.03388 12.9972 0.388672 12.352 0.388672 11.5562C0.388672 10.7604 1.03388 10.1152 1.82967 10.1152C2.62546 10.1152 3.27067 10.76 3.27067 11.5562C3.27067 12.3525 2.62592 12.9972 1.82967 12.9972H1.83013Z" fill="currentColor"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_3569_434">
                                <rect width="10.5561" height="15" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg> */}
                    <img className="object-cover h-full bg-white" src={ganesh} alt="ganesh" />
                    </div>

                    <h4 className="pt-2 text-[24px] font-semibold"><p>Ganesh Unhale</p></h4>
                    <span className='text-[14px] text-black dark:text-white'><p>Senior Frontend Developer</p></span>
                    <ul className='flex gap-4 text-[#5271ff] mt-[8px]'>
                        <li className='h-[32px] w-[32px] border border-gray-200 dark:border-gray-500 rounded-full flex items-center justify-center hover:bg-[#5271ff] hover:text-white duration-200'>
                            <CiFacebook />
                        </li>
                        <li className='h-[32px] w-[32px] border border-gray-200 dark:border-gray-500 rounded-full flex items-center justify-center hover:bg-[#5271ff] hover:text-white duration-200'>
                            <CiInstagram />
                        </li>
                        <li className='h-[32px] w-[32px] border border-gray-200 dark:border-gray-500 rounded-full flex items-center justify-center hover:bg-[#5271ff] hover:text-white duration-200'>
                            <FaXTwitter />
                        </li>
                        <li className='h-[32px] w-[32px] border border-gray-200 dark:border-gray-500 rounded-full flex items-center justify-center hover:bg-[#5271ff] hover:text-white duration-200'>
                            <CiLinkedin />
                        </li>
                    </ul>
                    <hr className='w-full mt-6 border-line' />
                </div>
                <div className='w-full py-1 lg:pb-4'>
                    <ul className='text-[16px] flex lg:flex-col justify-between  gap-5 navbar-link'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `leading-[130%] py-2 px-3 hover:bg-[#5271ff] hover:text-white w-full text-left flex gap-2 rounded-lg ${isActive ? 'bg-[#5271ff] text-white' : ''}`}
                            >
                                <PiUser className='text-[20px]' /><p className='hidden md:block'>About Me</p>
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink
                                to="/portfolio"
                                className={({ isActive }) => `leading-[130%] py-2 px-3 hover:bg-[#5271ff] hover:text-white w-full text-left flex gap-2 rounded-lg ${isActive ? 'bg-[#5271ff] text-white' : ''}`}
                            >
                                <PiCodeBlockLight className='text-[20px]' />
                                <p className='hidden md:block lg:hidden'>Portfolio</p>
                                <div className='hidden lg:flex justify-between items-center w-full'>
                                    <p className='hidden md:block'>Portfolio</p>
                                    <span className='hidden lg:block n5-color bg2-color fs-ten px-1 pt-1 rounded-md me-3 '>{projectData.length}</span>
                                </div>
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink
                                to="/resume"
                                className={({ isActive }) => `leading-[130%] py-2 px-3 hover:bg-[#5271ff] hover:text-white w-full text-left flex gap-2 rounded-lg ${isActive ? 'bg-[#5271ff] text-white' : ''}`}
                            >
                                <PiNotebookLight className='text-[20px]' /><p className='hidden md:block'>Resume</p>
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) => `leading-[130%] py-2 px-3 hover:bg-[#5271ff] hover:text-white w-full text-left flex gap-2 rounded-lg ${isActive ? 'bg-[#5271ff] text-white' : ''}`}
                            >
                                <PiNewspaperClippingLight className='text-[20px]' /><p className='hidden md:block'>Blog</p>
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => `leading-[130%] py-2 px-3 hover:bg-[#5271ff] hover:text-white w-full text-left flex gap-2 rounded-lg ${isActive ? 'bg-[#5271ff] text-white' : ''}`}
                            >
                                <PiEnvelopeLight className='text-[20px]' /><p className='hidden md:block'>Contact</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hidden lg:block'>
                <Button icon={<PiPaperPlaneTiltBold />} onClickLocation='/contact' title='Hire Me'></Button>
            </div>
        </div>
    );
}

export default NavBar;
