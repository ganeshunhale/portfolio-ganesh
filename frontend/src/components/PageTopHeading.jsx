import React from 'react'
import useAOS from '../hooks/useAOS'
import Button from './Button'
import { PiPaperPlaneTiltBold } from 'react-icons/pi';
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';


const PageTopHeading = ({ hText = '', pText = '', reqBtn = true, reqSocial = false,reqSubEmail=false,btnTitle='Hire Me',icon=<PiPaperPlaneTiltBold/> }) => {
  useAOS()
  return (
    <div data-aos='zoom-in' className='w-full ' >
      <div className='page-heading'>
        <h3 className=' n5-color dark:text-white font-semibold mb-2 md:mb-3 text-center fs-three'>{hText}</h3>
        {pText && <p className='fs-seven dark:text-white n5-color mb-4 md:mb-8 text-center'>
          {pText}
        </p>}
      </div>
      <div className='w-full'>
        {reqBtn && <Button title={btnTitle} onClickLocation='/contact' className=" m-auto" icon={icon} />}
      </div>
      {reqSocial && <div className='flex flex-col items-center'>
        <ul className='flex gap-4 text-[#5271ff] mt-[8px]'>
          <li className='h-[32px] w-[32px] border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#5271ff] dark:border-gray-500  hover:text-white duration-200'><CiFacebook /></li>
          <li className='h-[32px] w-[32px] border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#5271ff] dark:border-gray-500  hover:text-white duration-200'><CiInstagram /></li>
          <li className='h-[32px] w-[32px] border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#5271ff] dark:border-gray-500  hover:text-white duration-200'><FaXTwitter /></li>
          <li className='h-[32px] w-[32px] border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#5271ff] dark:border-gray-500  hover:text-white duration-200'><CiLinkedin /></li>
        </ul>
      </div>}
      {
        reqSubEmail && (
          <form className='flex justify-center flex-nowrap md:flex-wrap gap-3 md:gap-6'>
            <input placeholder='Enter Your Email' className='border  px-4 md:px-8 py-2 md:py-4 rounded-full w-1/2' />
            <Button icon={icon} title='Subscribe' className='' />
          </form>
        )
      }
    </div>
  )
}

export default PageTopHeading
