import React, { useState } from 'react';
import BlogCard from './BlogCard';
import TitleHeading from './TitleHeading';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import BlogCardSkeliton from './BlogCardSkeliton';

const BlogList = ({ showTitle = true, blogData, showPagination = true,loading }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const pageCount = Math.ceil(blogData.length / itemsPerPage);
    const currentItems = blogData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    console.log(currentItems);
    console.log(blogData);


    const prevPageHandler = () => {
        if (currentPage == 0) return
        setCurrentPage(currentPage - 1)
    }

    const nextPageHandler = () => {
        if (currentPage === pageCount - 1) return
        setCurrentPage(currentPage + 1)
    }



    return (
        <div className="px-4 py-8">
            {showTitle && (
                <TitleHeading
                    h2Text='Latest Blog Posts'
                    pText='Game Changer Blog To Learn Web '
                    buttonTitle='See All Articles'
                    reqBtn={true}
                    onClickLocation='/blogs'
                />
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 gap-6 mb-8">
                
                {loading ? (
                    new Array(6).fill().map((data,index) => (
                        <BlogCardSkeliton key={index} />
                    ))
                ) : (
                    currentItems.map((data,index) => (
                        <BlogCard key={data.id} data={data} />
                    ))
                )}
            </div>

            {showPagination && (
                <div className='flex justify-center gap-2 md:gap-6 items-center mt-10'>
                    <div onClick={prevPageHandler} className={`px-3 py-1 mr-4 md:mr-10  border border-gray-300 dark:hover:bg-[#4f4f4f] rounded ${currentPage === 0 ? 'bg-gray-200 text-gray-400 cursor-default2' : 'hover:bg-gray-200 cursor-pointer'}`}><MdKeyboardDoubleArrowLeft /></div>
                    {Array.from({ length: pageCount }).map((_, index) => (
                        <div onClick={() => setCurrentPage(index)} key={index} className={`px-3 py-1 border border-gray-300 rounded dark:hover:bg-[#4f4f4f] hover:bg-gray-200  ${index === currentPage ? 'font-bold text-primary border-blue2' : 'cursor-pointer'}`}>{index + 1}</div>
                    ))}
                    <div onClick={nextPageHandler} className={`px-3 py-1 ml-4 md:ml-10 border border-gray-300 dark:hover:bg-[#4f4f4f] rounded ${currentPage === pageCount - 1 ? 'bg-gray-200 text-gray-400 cursor-default2' : 'hover:bg-gray-200 cursor-pointer'}`}><MdKeyboardDoubleArrowRight /></div>

                </div>
            )}
        </div>
    );
};

export default BlogList;
