import React from 'react';
import Button from './Button';
import { FaArrowRight } from "react-icons/fa6";
import useAos from '../hooks/useAOS';
import Container from '../components/Container';

const NextProject = () => {
    useAos();

    return (
        <Container className='w-auto'>
            <div className='flex gap-3 md:gap-6 flex-wrap justify-between items-center w-full'>
                <div data-aos='zoom-in-left' className='md:w-[636px]'>
                    <h3 className='display-four text-white font-semibold mb-2 md:mb-4'>
                        Let’s Collaborate on Your Next Project
                    </h3>
                    <p className='text-white mb-2 md:mb-4'>
                        As a full-time developer with expertise in  JavaScript, React, and more, I’m ready to take on new challenges. 
                        Whether you're looking for a full-time team member or need assistance with freelance projects, I'm here to help you succeed.
                    </p>
                </div>
                <Button 
                    title="Let's Get in Touch" 
                    icon={<FaArrowRight />} 
                    aosClass='zoom-in-right' 
                    onClickLocation='/contact' 
                />
            </div>
        </Container>
    );
}

export default NextProject;
