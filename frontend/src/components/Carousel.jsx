import React, { useState, useRef, useEffect } from 'react';
import items from '../assets/data/testimonials';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const autoPlayRef = useRef(null);
    const [singleItemsWidth, setSingleItemWidth] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(4);
    const [data,setData] = useState(items)
    const element = useRef()



    useEffect(() => {
    }, [itemsPerSlide])

    const itemsPerSlideHandler = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1600) {
            setItemsPerSlide(4);
        } else if (screenWidth >= 1400) {
            setItemsPerSlide(3);
        } else if (screenWidth >= 768) {
            setItemsPerSlide(2);
        } else {
            setItemsPerSlide(1);
        }
    };

    const totalSlides = Math.ceil(items.length);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };


    const handleOnScreenResize = () => {
        const width = element.current.clientWidth
        if (element) {
            setSingleItemWidth(width);
        }
    };


    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const handleResize = () => {
            requestAnimationFrame(() => {
                handleOnScreenResize(); 
                itemsPerSlideHandler(); 
            });
        };
        handleResize()
        window.addEventListener("resize", handleResize);

        autoPlayRef.current = setInterval(nextSlide, 3000);

        return () => {
            clearInterval(autoPlayRef.current);
            window.removeEventListener("resize", handleResize);
        };
    }, [element.current]);


    const [translateX, setTranaslateX] = useState()

    useEffect(() => {
        setTranaslateX((activeIndex * (singleItemsWidth * itemsPerSlide)) + (activeIndex * (16 * itemsPerSlide)))
    }, [activeIndex, singleItemsWidth, itemsPerSlide, activeIndex, itemsPerSlide])

    return (
        <div className="relative w-full overflow-hidden ">
            <div
                className="flex swipe-wrapper transition ease-in-out duration-1000"
                style={{ transform: `translateX(-${translateX / itemsPerSlide}px)` }}
            >
                {data.map((item, index) => (
                    <div key={index} ref={index == 0 ? element : null} id={index === 0 ? "SingleItem" : undefined}
                        className={`flex-none ${itemsPerSlide === 4 ? 'md:w-[calc(25%-1rem)]' :
                            itemsPerSlide === 3 ? 'md:w-[calc(33.33%-1rem)]' :
                                itemsPerSlide === 2 ? 'md:w-[calc(50%-1rem)]' : 'w-full'} p-[1.1px] bg-gray-50 rounded-lg overflow-hidden m-[8px] dark:bg-[#4f4f4f] dark:!text-white dark:hover:bg-gray-800`}
                    >
                        <div className="flex flex-col items-center justify-start p-6 border-l-2 border-blue-500 h-full">
                            <p className="text-gray-500 mb-4 text-l dark:!text-white">
                                <BiSolidQuoteAltLeft className='inline pe-1 text-sm -mt-2' /> 
                                {item.quote+" "} 
                                 <BiSolidQuoteAltRight className='inline pe-1 text-sm -mt-2' /> 
                            </p>

                            <div className='flex gap-3 items-center mt-4'>
                                <img className="rounded-full shadow-lg mb-4  w-12 h-12 md:w-14 md:h-14 " src={item.imgSrc} alt="avatar" />
                                <div>
                                    <h5 className="mb-1  md:text-lg font-semibold uppercase dark:!text-white">{item.author}</h5>
                                    <p className="text-gray-600 mb-1 text-sm dark:!text-white te">{item.position}</p>
                                    <div className='block text-gray-600 mb-1 text-left md:text-center lg:text-left dark:!text-white'>{item.country}</div>
                                </div>
                            </div>

                            <ul className="flex justify-center text-yellow-500 mb-2">
                                {[...Array(5)].map((_, starIndex) => (
                                    <li key={starIndex}>
                                        <i className={`fas fa-star ${starIndex < item.rating ? 'fa-sm' : 'far fa-star fa-sm'}`}></i>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
