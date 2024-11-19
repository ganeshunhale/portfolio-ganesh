import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from "react-type-animation";
import Button from './Button';
import { FaArrowRight } from "react-icons/fa6";
import { resume_icon, user_img,ganesh } from '../assets/images';
import CountUp from '../hooks/CountUp';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [atScreen, setAtScreen] = useState(false);
    const statsRef = useRef(null);



    useEffect(() => {
        const observer = new IntersectionObserver((e) => setAtScreen(e[0].isIntersecting), { threshold: 0.1 });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            
            observer.disconnect();
        };
    }, []);





    return (
        <div className={`flex flex-wrap gap-20 mt-0 m-auto profile-container`}>
            <div className='flex flex-wrap 2xl:gap-20 w-full items-center justify-between flex-grow'>
                <div className='container mx-auto flex ml-0 md:ml-32 xl:ml-0 w-full lg:w-[800px] flex-col gap-3'>
                    <span className='text-xl sm:leading-[120%] sm:text-2xl' >HI, I'M A PROFESSIONAL</span>
                    <TypeAnimation
                        className='text-primary text-handler mt-2 mb-3 font-bold text-3xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-7xl leading-none'
                        sequence={[
                            "Web Developer",
                            1000,
                            "FrontEnd Developer",
                            1000,
                            
                        ]}
                        wrapper="h1"
                        speed={50}
                        repeat={Infinity}
                    />
                    <p className='fs-seven'>
                        I'm a software Developer specializing in scalable web apps
                        <br />
                        Explore my <Link to='/blogs' className='text-blue-600'>blogs</Link>, <Link to='/blogs' className='text-blue-600'>project portfolio</Link> and online <Link to='/blogs' className='text-blue-600'>resume</Link>.
                    </p>
                    <div className='flex flex-wrap items-center gap-3 md:gap-6 md:mt-8'>
                        <Button icon={<FaArrowRight />} title='View Portfolio' onClickLocation='/portfolio' />
                        <Button bgRev={true} icon={<img src={resume_icon} alt="Resume Icon" />} title='View Resume' onClickLocation='/resume' />
                    </div>
                </div>
                <div className='relative m-auto my-20 2xl:my-0'>
                    <div className='user-bg'></div>
                    <div className='bg-white rounded-lg overflow-hidden'>
                        <img src={ganesh} alt="User" className='user-img bg-white shadow-2xl' />
                    </div>
                </div>
            </div>
            {/* <div
                ref={statsRef}
                className='flex ml-0 md:ml-32 xl:ml-0 w-[636px] flex-wrap xl:flex-nowrap items-center gap-3 md:gap-6 md:mt-17 '
            >
                <div className='flex items-center gap-2 xl:gap-4'>
                    <h2 className='fle-2 font-semibold text-primary text-5xl md:text-6xl xl:text-7xl'>
                        <CountUp end={2} inView={atScreen} duration={2}/>
                    </h2>
                    <div className='w-[1px] h-[38px] bg-gray-700'></div>
                    <span>Years of Experience</span>
                </div>
                <div className='flex items-center gap-2 xl:gap-4'>
                    <h2 className='fle-2 font-semibold text-primary text-5xl md:text-6xl xl:text-7xl flex'>
                        <CountUp end={10} duration={3} inView={atScreen}>110 </CountUp> 
                    </h2>
                    <div className='w-[1px] h-[38px] bg-gray-700'></div>
                    <span>Projects Completed</span>
                </div>
                <div className='flex items-center gap-2 xl:gap-4'>
                    <h2 className='fle-2 font-semibold text-primary text-5xl md:text-6xl xl:text-7xl'>
                        <CountUp end={5} inView={atScreen} duration={3} />
                    </h2>
                    <div className='w-[1px] h-[38px] bg-gray-700'></div>
                    <span>Freelancing Work</span>
                </div>
            </div> */}
        </div>
    );
}

export default HeroSection;
