import { CiTrophy } from "react-icons/ci";
import { PiGraduationCap } from "react-icons/pi";
import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaMapPin, FaLinkedin } from 'react-icons/fa';
import resumeData from '../assets/data/resumeData';
import profile_img from '../assets/images/profile.png';
import {ganesh} from '../assets/images'
import useAOS from '../hooks/useAOS';
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';

const ProfileCard = () => {
    useAOS();
    const { personalInfo, workExperience, skills, education, awards, projects, languages, interests } = resumeData;

    return (
        <div data-aos='fade-up' className="bgn2-color dark:bg-[#4f4f4f] p-4 md:p-8 lg:p-[60px] rounded-[2rem] shadow-lg border">
            {/* Personal Info, Contact, Summary */}
            <div className="flex flex-wrap justify-between items-center gap-3 border-b pb-3 md:pb-6">
                <div>
                    <h2 className="display-three text-3xl font-semibold text-primary dark:text-white">{personalInfo.name}</h2>
                    <span className="n4-color fs-six font-medium dark:text-white">{personalInfo.title}</span>
                </div>
                <div className="pl-5 border-l border-black">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a
                                href={`tel:${personalInfo.contact.phone}`}
                                className="flex gap-2 items-center text-gray-700 dark:text-white"
                                aria-label={`Call ${personalInfo.contact.phone}`}
                            >
                                <FaPhone aria-hidden="true" /> {personalInfo.contact.phone}
                            </a>
                        </li>
                        <li>
                            <a
                                href={`mailto:${personalInfo.contact.email}`}
                                className="flex gap-2 items-center text-gray-700 dark:text-white"
                                aria-label={`Email ${personalInfo.contact.email}`}
                            >
                                <FaEnvelope aria-hidden="true" /> {personalInfo.contact.email}
                            </a>
                        </li>
                        <li className="flex gap-2 items-center text-gray-700 dark:text-white">
                            <FaLinkedin aria-hidden="true" />
                            <a href={personalInfo.contact.website} target="_blank" rel="noopener noreferrer" className="dark:text-white">{personalInfo.contact.website}</a>
                        </li>
                        <li className="flex gap-2 items-center text-gray-700 dark:text-white">
                            <FaMapPin aria-hidden="true" /> {personalInfo.contact.location}
                        </li>
                    </ul>
                </div>
            </div>

            {/* Profile Image and Summary */}
            <div className="flex flex-wrap md:flex-nowrap items-start gap-5 md:gap-10 pb-4 md:pb-8 pt-10 border-b">
                <div className="resume-profile flex-shrink-0">
                    <img src={ganesh} alt="profile" className="object-cover w-32 h-40 rounded-md" />
                </div>
                <p className="text-gray-800 dark:text-white text-base flex-1">{personalInfo.summary}</p>
            </div>

            {/* Work Experience Section */}
            <div className="resume-section flex flex-wrap md:flex-nowrap pt-16 pb-16 gap-5 border-b">
                <div className="w-full md:w-2/3 lg:w-full xl:w-2/3 2xl:w-3/4 md:border-r pr-5 ">
                    <div className="flex items-center gap-2 mb-5 md:mb-10">
                        <div className="title-line2"></div>
                        <h2 className="fs-three font-semibold text-primary dark:text-white">Work Experiences</h2>
                    </div>

                    {workExperience.map((job, index) => (
                        <div key={index} className="mb-4 md:mb-6">
                            <div className="flex flex-wrap gap-1 md:gap-3 justify-between items-center">
                                <span className="n5-color fs-six font-medium dark:text-white">{job.title}</span>
                                <span className="n4-color fs-eight dark:text-white">{job.company} | {job.date}</span>
                            </div>
                            <p className="n42-color fs-seven my-2 md:my-5 dark:text-white">{job.description}</p>
                            <ul className="list-disc flex flex-col gap-3 ms-6 lg:ms-10">
                                {job.built.map((point, index) => (
                                    <li key={index} className="n42-color fs-seven dark:text-white">{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Projects Section */}
                    <div className="flex items-center gap-2 ">
                        <div className="title-line2"></div>
                        <h2 className="fs-three font-semibold text-primary dark:text-white">Projects</h2>
                    </div>

                    {projects.map((project, index) => (
                        <div key={index} className="mb-4 md:mb-6 mt-3 md:mt-7">
                            <div className="flex flex-wrap justify-between items-center">
                                <span className="n5-color fs-six font-medium dark:text-white">{project.title}</span>
                                <a href={project.link} className="text-primary fs-eight cursor-pointer dark:text-white" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                            <p className="n42-color fs-seven my-1 md:my-2 dark:text-white">{project.description}</p>
                            <p className="n42-color fs-seven my-1 md:my-2 dark:text-white"><strong className="">Technologies:</strong> {project.technologies.join(', ')}</p>
                            <ul className="list-disc flex flex-col gap-1 ms-6 lg:ms-10">
                                {project.built.map((point, index) => (
                                    <li key={index} className="n42-color fs-seven dark:text-white">{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Skills, Education, Awards, Languages, Interests Section */}
                <div className="w-full md:w-1/3 lg:w-full xl:w-1/3 2xl:w-1/4 pl-5 flex flex-col gap-5 ">
                    {/* Skills */}
                    <div className='flex flex-col gap-6 mb-5  md:mb-10'>
                        <div className='flex items-center gap-2 mb-3 '>
                            <div className="title-line2"></div>
                            <h2 className="fs-three font-semibold text-primary dark:text-white">Skills</h2>
                        </div>
                        <div>
                            <h3 className="fs-six font-medium mb-2 md:mb-4 dark:text-white">Technical Skills</h3>
                            <ul className="list-disc flex flex-col gap-3 ms-6 lg:ms-10">
                                {skills.technical.map((skill, index) => (
                                    <li key={index} className="n4-color fs-seven dark:text-white">{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="fs-six font-medium mb-2 md:mb-4 dark:text-white">Professional Skills</h3>
                            <ul className="list-disc flex flex-col gap-3 ms-6 lg:ms-10">
                                {skills.professional.map((skill, index) => (
                                    <li key={index} className="n4-color fs-seven dark:text-white">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <div className='flex items-center gap-2 mb-2 md:mb-6'>
                            <div className="flex items-center gap-2">
                                <div className="title-line2"></div>
                                <h2 className="fs-three font-semibold text-primary dark:text-white">Education</h2>
                            </div>
                        </div>
                        {education.map((edu, index) => (
                            <div key={index} className="flex gap-2 items-center mb-3 md:mb-5">
                                <PiGraduationCap className="text-xl text-primary" />
                                <div className="flex flex-col">
                                    <span className="n4-color fs-seven dark:text-white">{edu.degree}</span>
                                    <span className="n4-color fs-eleven dark:text-white">{edu.institution} | {edu.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Awards */}
                    {/* <div>
                        <div className='flex items-center gap-2 mb-2 md:mb-6 '>
                            <div className="flex items-center gap-2">
                                <div className="title-line2"></div>
                                <h2 className="fs-three font-semibold text-primary dark:text-white">Awards</h2>
                            </div>
                        </div>
                        {awards.map((award, index) => (
                            <div key={index} className="flex gap-2 items-center mb-3 md:mb-5">
                                <CiTrophy className="text-xl text-primary" />
                                <div className="flex flex-col">
                                    <span className="n4-color fs-seven dark:text-white">{award.title}</span>
                                    <span className="n4-color fs-eleven dark:text-white">{award.year}</span>
                                </div>
                            </div>
                        ))}
                    </div> */}

                    {/* Languages */}
                    <div>
                        <div className="flex items-center gap-2 mb-2 md:mb-6 ">
                            <div className="title-line2"></div>
                            <h2 className="fs-three font-semibold text-primary dark:text-white">Languages</h2>
                        </div>
                        <ul className="list-disc flex flex-col gap-3 ms-6 lg:ms-10">
                            {languages.map((lang, index) => (
                                <li key={index} className="n4-color fs-seven dark:text-white">{lang}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Interests */}
                    <div>
                        <div className="flex items-center gap-2 mb-2 md:mb-6">
                            <div className="title-line2"></div>
                            <h2 className="fs-three font-semibold text-primary dark:text-white">Interests</h2>
                        </div>
                        <ul className="list-disc flex flex-col gap-3 ms-6 lg:ms-10">
                            {interests.map((interest, index) => (
                                <li key={index} className="n4-color fs-seven dark:text-white">{interest}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-2 md:gap-3 items-center justify-center mt-4 md:mt-8'>
                <ul className='flex gap-4 text-[#5271ff] mt-[8px]'>
                {/* <a href="https://www.linkedin.com/in/real-ganesh-unhale/" target="_blank" rel="noopener noreferrer"> <li className='h-[32px] w-[32px] border border-gray-200 dark:border-gray-500  rounded-full flex items-center justify-center hover:bg-[#5271ff] hover:text-white duration-200'><CiFacebook /></li></a> */}
                    {/* <li className='h-[32px] w-[32px] border border-gray-200 dark:border-gray-500  rounded-full flex items-center justify-center hover:bg-[#5271ff] hover:text-white duration-200'><CiInstagram /></li>
                    <li className='h-[32px] w-[32px] border border-gray-200 dark:border-gray-500  rounded-full flex items-center justify-center hover:bg-[#5271ff] hover:text-white duration-200'><FaXTwitter /></li> */}
                    <a href="https://www.linkedin.com/in/real-ganesh-unhale/" target="_blank" rel="noopener noreferrer"> <li className='h-[32px] w-[32px] border border-gray-200 dark:border-gray-500  rounded-full flex items-center justify-center hover:bg-[#5271ff] hover:text-white duration-200'><CiLinkedin /></li></a>
                </ul>
            </div>
        </div>
    );
};

export default ProfileCard;
