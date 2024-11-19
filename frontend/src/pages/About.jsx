import React from 'react';
import HeroSection from '../components/HeroSection';
import Container from '../components/Container';
import WhatIDo from '../components/WhatIDo';
import NextProject from '../components/NextProject';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import useFetchBlogData from '../hooks/useFetchBlogData'; 
import useFetchProjectData from '../hooks/useFetchProjectData'; 
import ShutterEffect from '../components/ShutterEffect';

const About = () => {
    const { blogData, loading: blogLoading, error: blogError } = useFetchBlogData(); 
    console.log(blogData);
    const { projectData, loading: projectLoading, error: projectError } = useFetchProjectData(); 
    console.log(projectData.slice(0, 4))

    return (
        <>
            <div className='flex flex-col gap-10 md:gap-20 xl:gap-28 w-full overflow-hidden'>
                <Container reqPadding={true} className='flex flex-col gap-10 lg:gap-14 xl:gap-16'>
                    <section className='container px-0 md:px-4 m-auto pb-10 lg:pb-14 xl:pb-16 border-b'><HeroSection /></section>
                    <section><WhatIDo /></section>
                </Container>
                <section className='next-project py-[60px] lg:py-[120px] px-3'><NextProject /></section>
                <Container className='flex flex-col gap-10 lg:gap-14 xl:gap-16'>
                    
                    <section><Footer /></section>
                </Container>
            </div>
        </>
    );
};

export default About;
