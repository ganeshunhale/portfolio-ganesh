// components/Card.js
import React from 'react';

const Card = ({ img, title, description, icons }) => {
    return (
        <div className="flex flex-col gap-y-4 px-4 lg:px-8  py-5 lg:py-10 border bg-gray-100 hover:bg-white hover:!text-black dark:bg-gray-800  dark:hover:bg-gray-950  hover:border-blue-700 hover:shadow-2xl hover:scale-105 duration-500">
            <div className="flex items-center gap-3 w-[28px] h-[28px]">
                <img src={img} alt={title.toLowerCase()} className="service-icon w-full h-full" />
                {icons && icons.map((icon, idx) => (
                    <img key={idx} src={icon} alt="service-icon"  className="service-icon" />
                ))}
            </div>
            <h4 className="text-xl leading-[120%] dark:!text-white hover:!text-black n5-color font-medium mt-3 mt-md-6 mb-2 mb-md-3">{title}</h4>
            <p className="fs-seven dark:!text-white n4-color">{description}</p>
        </div>
    );
};

export default Card;
