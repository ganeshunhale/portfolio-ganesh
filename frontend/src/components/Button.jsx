import React, { useState, useRef, useEffect } from 'react';
import useAos from '../hooks/useAOS'
import { useNavigate } from 'react-router-dom';

function Button({ icon, title, bgRev = false, aosClass = '', className = "", onClickLocation = '' }) {
  const navigate = useNavigate()
  useAos()
  const [circleStyle, setCircleStyle] = useState({
    width: '0',
    height: '0',
    left: '0',
    top: '0',
  });



  const timeoutRef = useRef(null);

  const colorStyle = bgRev ? 'bg-black hover:bg-primary' : 'bg-primary hover:bg-black';

  const onMouseEnter = (e) => {
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - buttonRect.left;
    const y = e.clientY - buttonRect.top;

    setCircleStyle({
      width: '0',
      height: '0',
      left: `${x}px`,
      top: `${y}px`,
    });


    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setCircleStyle((prev) => ({
        ...prev,
        width: '1000px',
        height: '1000px',

      }));
    }, 0);
  };

  const onMouseLeave = (e) => {
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - buttonRect.left;
    const y = e.clientY - buttonRect.top;
    clearTimeout(timeoutRef.current);
    setCircleStyle((prev) => ({
      ...prev,
      width: '0',
      height: '0',
      left: `${x}px`,
      top: `${y}px`,
    }));
  };

  return (
    <div
      onClick={() => navigate(`${onClickLocation}`)}
      data-aos={`${aosClass}`}
      className={`${className} relative rounded-[100rem] cursor-pointer  text-base px-4 w-max py-[10px]  sm:py-[14px] sm:px-4 font-medium text-white tracking-wider overflow-hidden ${colorStyle} common-btn`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='flex items-center justify-center gap-2'>
        <div className='z-10 font-bold'>{icon}</div>
        <button className="relative  z-10">{title}</button>
      </div>
      <div
        style={{
          width: circleStyle.width,
          height: circleStyle.height,
          left: circleStyle.left,
          top: circleStyle.top,
        }}
        className={`absolute rounded-full z-8 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${bgRev ? 'bg-primary' : 'bg-black'}`}
      />
    </div>
  );
}

export default Button;
