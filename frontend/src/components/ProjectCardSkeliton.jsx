import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import useAOS from '../hooks/useAOS';

const ProjectCardSk = () => {
    useAOS();

    return (
        <div data-aos='fade-up'>
            <div className="flex items-center justify-center bg-gray-300 rounded dark:bg-gray-700 h-[250px]">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>

            <div className='flex justify-between gap-2 items-center pt-4 md:pt-8 px-3 md:px-6'>
                <div className='flex flex-col flex-wrap'>
                    <div className='flex flex-wrap gap-2 items-center'>
                        <div className='w-24 h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 animate-pulse'></div>
                    </div>
                    <div className='w-32 h-3 bg-gray-300 rounded-full dark:bg-gray-600 animate-pulse mt-3'></div>
                    <div className='w-20 h-3 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse mt-2'></div>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='w-12 h-12 bg-gray-300 rounded-full dark:bg-gray-700 animate-pulse'></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardSk;
