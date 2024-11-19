import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    python_img,
    js_img,
    html_img,
    css_img,
    django_img,
    flask_img,
    react_img,
    sql_img,
    git_img,
    docker_img,
    postman_img,
    aws_img,
    linux_img,
    jenkins_img,
    kubernetes_img,
    ansible_img,
    terraform_img,
    react_native_img,
    microservices_img,
    jira_img, // Add the import for Jira image
    redis_img, // Add the import for Redis image
    unit_testing_img // Add the import for Unit Testing image
} from '../assets/images';
import Card from './Card';
import TitleHeading from './TitleHeading';
import useAos from '../hooks/useAOS';

const WhatIDo = () => {
    useAos();

    // Grouping the skills by categories
    const skillCategories = [
        {
            category: 'Languages',
            skills: [
                { img: js_img, title: 'JavaScript', description: 'Expert in JavaScript for dynamic web applications.', duration: 500 },
                { img: html_img, title: 'HTML5', description: 'Expert in HTML to structure a web page and its content.', duration: 800 },
                { img: css_img, title: 'CSS', description: 'Proficient in CSS to style and layout web pages.', duration: 800 },
                // { img: sql_img, title: 'SQL', description: 'Strong knowledge of SQL for database management.', duration: 600 },
            ],
        },
        {
            category: 'Frameworks',
            skills: [
                // { img: django_img, title: 'Django', description: 'Experienced in building applications with Django.', duration: 800 },
                // { img: flask_img, title: 'Flask', description: 'Using Flask for lightweight web applications.', duration: 600 },
                { img: react_img, title: 'React', description: 'Building user interfaces with React.', duration: 700 },
                { img: react_native_img, title: 'React Native', description: 'Building mobile applications with React Native.', duration: 800 },
            ],
        },
        // {
        //     category: 'DevOps & Cloud',
        //     skills: [
        //         { img: aws_img, title: 'AWS', description: 'Cloud computing services expertise in AWS.', duration: 700 },
        //         { img: docker_img, title: 'Docker', description: 'Familiar with Docker for containerization.', duration: 700 },
        //         { img: jenkins_img, title: 'Jenkins', description: 'CI/CD pipeline automation with Jenkins.', duration: 600 },
        //         { img: kubernetes_img, title: 'Kubernetes', description: 'Container orchestration with Kubernetes.', duration: 700 },
        //         { img: ansible_img, title: 'Ansible', description: 'Automation and configuration management with Ansible.', duration: 600 },
        //         { img: terraform_img, title: 'Terraform', description: 'Infrastructure as code with Terraform.', duration: 700 },
        //         { img: linux_img, title: 'Linux', description: 'Proficient in Linux for server management.', duration: 600 },
        //     ],
        // },
        {
            category: 'Tools',
            skills: [
                { img: git_img, title: 'Git', description: 'Version control expertise with Git.', duration: 500 },
                { img: postman_img, title: 'Postman', description: 'API testing and development with Postman.', duration: 600 },
                // { img: microservices_img, title: 'Microservices', description: 'Architecting applications with microservices.', duration: 700 },
                // { img: jira_img, title: 'Jira', description: 'Project management and issue tracking with Jira.', duration: 600 },
                // { img: redis_img, title: 'Redis', description: 'In-memory data structure store for caching.', duration: 600 },
                // { img: unit_testing_img, title: 'Unit Testing', description: 'Experience in unit testing for code quality assurance.', duration: 600 },
            ],
        },
    ];

    return (
        <section className="mx-3">
            <TitleHeading
                h2Text='What I do'
                pText={<p data-aos="fade-up" data-aos-duration="500" className="text-lg mt-2 mt-md-4">
                    I have more than 2 years of experience building software for <span></span>
                    <span className='text-red-500'>Clients</span> and <span className='text-red-500'>Companies</span> all over the world. Below is a quick overview of my 
                    main technical skill sets and technologies I use. Want to find
                    out more about my experience? Check out my <span></span>
                    <NavLink to="/resume" className="text-primary">online resume</NavLink> and
                    <NavLink to="/portfolio" className="text-primary"> project portfolio</NavLink>.
                </p>}
                buttonTitle='View Resume'
                reqBtn={true}
                onClickLocation='/resume'
            />

            {skillCategories.map((category, index) => (
                <div key={index} className="mt-5">
                    <h3 className="text-xl font-bold mb-3">{category.category}</h3>
                    <div className="card-container m-auto">
                        {category.skills.map((service, idx) => (
                            <div
                                key={idx}
                                data-aos="fade-up"
                                data-aos-duration={service.duration}
                                className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
                            >
                                <Card
                                    img={service.img}
                                    title={service.title}
                                    description={service.description}
                                    icons={service.icons}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default WhatIDo;
