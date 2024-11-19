import React from 'react'
import { FaArrowRight } from "react-icons/fa6";;
import Button from './Button';
import useAOS from '../hooks/useAOS';


const TitleHeading = ({h2Text='',pText='',buttonTitle,icon=<FaArrowRight/>,reqBtn=false,dataAos='zoom-in-left',onClickLocation}) => {
    
    useAOS()

    return (
        <div className='flex gap-7 flex-wrap 2xl:flex-nowrap justify-between items-end mb-8 md:mb-14'>
            <div data-aos={dataAos} className='section-heading w-full' >
                <div className='flex items-center gap-2'>
                    <div className='title-line'></div>
                    <h2 className='display-four font-semibold'>{h2Text}</h2>
                </div>
                <span className='fs-seven n4-color mt-2 md:mt-10'><p className='dark:text-white text-lg mt-2 mt-md-4'>{pText}</p></span>
            </div>
            {reqBtn && <Button icon={icon} title={buttonTitle} aosClass='zoom-in-right' onClickLocation={onClickLocation} />}
        </div>
    ) 
}

export default TitleHeading
