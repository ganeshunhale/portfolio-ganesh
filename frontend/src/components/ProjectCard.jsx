import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from "react-icons/fi";
import useAOS from '../hooks/useAOS';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div key={project.id} className=''>
            <div
                onClick={() => navigate(`/project/${project.title}`)}
                className="project-card   "
            >
                <div className="thumb relative">
                    <div className="post-thumb">
                        <img src={project.thumbnail} alt={project.title} className='w-full p-2' />
                    </div>
                    <div className="post-thumb-sec">
                        <img src={project.thumbnail} alt={project.title} className='w-full p-2 ' />
                    </div>
                </div>
            </div>

            <div className='flex justify-between gap-2 items-center pt-4 md:pt-8 px-3 md:px-6'>
                <div className='flex flex-col flex-wrap'>
                    <div className='flex flex-wrap gap-2 items-center'>
                        {project.technologies.map((category, index) => (
                            <Link
                                key={index}
                                to='/portfolio'
                                className='n5-color fs-nine px-2 md:px-4 py-1 md:py-2 brn3 rounded-full hover:bg-gray-100 dark:text-white dark:hover:text-black duration-300'>
                                {category}
                            </Link>
                        ))}
                    </div>
                    <Link
                        to='/'
                        className='project-title text-xl md:text-lg lg:text-2xl font-semibold n5-color mt-3 md:mt-5 block dark:text-white hover:text-[#5271ff] duration-500'>
                        {project.title}
                    </Link>
                    <span className='dev-type text-sm text-gray-500 dark:text-white'>{project.devType}</span>
                </div>

                <NavLink
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseOut}
                    to={`/project/${project.id}`}
                    className={`p-3 md:p-4 rounded-full ${isHovered ? 'bg-[#5271ff] text-white rotate-45' : 'bg-gray-200 dark:bg-[#4f4f4f]'} fs-five flex items-center justify-center flex-shrink-0 duration-700`}
                >
                    <FiArrowUpRight className={`text-lg md:text-xl dark:text-white font-bold ${isHovered ? 'text-white dark:text-black' : 'n5-color'}`} />
                </NavLink>
            </div>
        </div>
    );
};

export default ProjectCard;
