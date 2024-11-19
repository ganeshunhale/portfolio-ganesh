import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'phosphor-react';

const SideMenuLeft = ({ setMode }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode') || 'light';
    setIsLightMode(savedMode === 'light');
    document.body.classList.toggle('dark', savedMode === 'dark');
  }, []);

  const lightModeHandler = () => {
    const newMode = isLightMode ? 'dark' : 'light';
    localStorage.setItem('mode', newMode);
    setIsLightMode(!isLightMode);
    setMode(newMode); 
    document.body.classList.toggle('dark', newMode === 'dark');
  };

  return (
    <div className='w-full lg:w-[63px] flex flex-col border-b lg:border-none border-gray-300 dark:border-gray-500 py-2 lg:py-0'>
      <div className='flex flex-row lg:flex-col gap-4 justify-between px-2 lg:justify-center items-center mt-0 lg:mt-6'>
        <Link to='/' className='side-icon text-primary bg-gray-100 dark:bg-gray-400'>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
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
          </svg>
        </Link>
        <div className='flex flex-col items-center gap-1'>
          <span className='hidden lg:block toggle_name fs-eleven n5-color dark:text-white'>Dark Mode</span>
          <button onClick={lightModeHandler} className='side-icon2 bg1-color mood_toggle'>
            {isLightMode ? <Moon className='text-white text-xl' /> : <Sun className='text-white text-xl' />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideMenuLeft;
