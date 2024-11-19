import React from 'react';
import useAOS from '../hooks/useAOS';

const BlogCardSkelton = () => {
    useAOS();

    return (
        <div data-aos='fade-up'  className='mt-6 px-3 blog-wrapper dark:text-white '>
            <div className='flex flex-col gap-4 rounded-xl'>
                <div className='rounded-xl bg-gray-300 dark:bg-gray-700 aspect-video'>
                    <div className='w-full h-full bg-gray-400 dark:bg-gray-600 animate-pulse'>
                        
                    </div>
                </div>
                <div className='pt-4 px-3 md:px-5'>
                    <div className='flex items-center gap-3 mb-2 md:mb-3'>
                        <div className='w-16 h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 animate-pulse'></div>
                        <div className='w-8 h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse'></div>
                    </div>
                    <div className='w-32 h-3 bg-gray-300 rounded-full dark:bg-gray-600 animate-pulse'></div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardSkelton;
