import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({className=''}) => {
    return (
        <div className={`flex flex-wrap gap-3 md:gap-6 justify-center sm:justify-between items-center pb-4 md:pb-8 text-center mb-16 lg:mb-0 ${className}`}>
            <div className='fs-eight font-medium n5-color sm:order-2 dark:text-white'>
                Designed by <a href='https://www.linkedin.com/in/real-ganesh-unhale/' target='_blank'>
                    Ganesh Unhale
                </a>
            </div>
            <div className='fs-eight font-medium n5-color sm:order-1 dark:text-white'>
                Copyright © 2024 <Link to='/portfolio'>
                    Portfolify
                </Link>. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer
