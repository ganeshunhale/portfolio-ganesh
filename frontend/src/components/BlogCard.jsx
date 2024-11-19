import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAos from '../hooks/useAOS'

const BlogCard = ({ data }) => {
    useAos()
    const navigate = useNavigate()

    return (
        <div onClick={()=>navigate(`/blog/${data.title}`)}   className='mt-6  px-3 blog-wrapper dark:text-white '>
            <Link className='flex flex-col gap-4'>
                <div className=' rounded-xl blog-img-container border-b aspect-video'>
                <img 
                        className='rounded-xl w-full h-full' 
                        src={data.thumbnail} 
                        alt={data.title} 
                    />
                </div>
                <div className='pt-4 px-3 md:px-5 '>
                    <div className='flex items-center gap-3 mb-2 md:mb-3'>
                        <span className='n4-color fs-eight dark:text-white '>{data.date}</span>
                        <span className='p1-color fs-eight dark:text-white'>/</span>
                        <span className='n4-color fs-eight dark:text-white'>{data.category}</span>
                    </div>
                    <h4 className='blog-title fs-five n5-color  font-semibold dark:text-white'>{data.title}</h4>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard
