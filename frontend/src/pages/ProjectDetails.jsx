import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import PageTopHeading from '../components/PageTopHeading';
import useAOS from '../hooks/useAOS';
import api from '../api/api'; // Ensure this points to your API
import NextProject from '../components/NextProject';
import Footer from '../components/Footer';

const ProjectDetails = () => {
    const { id } = useParams(); // Get the project ID from the URL
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useAOS();

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await api.get(`api/project/${id}`); // Fetch the project details
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjectDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Ensure data exists before rendering
    if (!data) return null;

    return (
        <div className='flex flex-col gap-10'>
            <Container className='w-full mx-auto' reqPadding={true}>
                <PageTopHeading
                    hText={`Case Study: ${data.title}`}
                    pText={data.title_des || "Project description not available."} 
                    reqBtn={false}
                />

                <div className='flex flex-wrap gap-6 mt-8 md:mt-15 pb-7'>

                    <div data-aos="fade-left" className='flex-none w-full xl:w-1/6'>
                        <div className='flex flex-col gap-5 !sticky top-5 p-3 border'>
                            <div>
                                <span className='n4-color dark:!text-white fs-eight font-medium block'>Client:</span>
                                <span className='n5-color fs-six font-medium dark:!text-white'>{data.client || "Client info not available"}</span>
                            </div>
                            <div>
                                <span className='n4-color dark:!text-white fs-eight font-medium block'>Technologies:</span>
                                <span className='n5-color fs-six font-medium dark:!text-white'>{data.technologies.join(', ') || "Technologies info not available"}</span>
                            </div>
                            <div>
                                <span className='n4-color dark:!text-white fs-eight font-medium block'>Development Type:</span>
                                <span className='n5-color fs-six font-medium dark:!text-white'>{data.dev_type.replace(/_/g, ' ').toLowerCase() || "Dev type info not available"}</span>
                            </div>
                            <div>
                                <span className='n4-color dark:!text-white fs-eight font-medium block'>Website:</span>
                                <span className='n5-color fs-six font-medium dark:!text-white'>
                                    <a href={data.link} target="_blank" rel="noopener noreferrer">Live preview</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='flex-none w-full xl:w-9/12'>
                        <div className='flex flex-col gap-8 md:gap-15'>
                            <article className='p-5 '>
                                <img
                                    data-aos="fade-right"
                                    src={data.thumbnail}
                                    alt={data.title}
                                    className="w-full  mx-auto   aspect-video mb-4"
                                />
                                <h2 className='text-xl font-bold'>Project Overview</h2>
                                <div className='mt-2' dangerouslySetInnerHTML={{ __html: data.description }} />
                            </article>
                        </div>
                    </div>
                </div>
            </Container>
            <section className='next-project py-[60px] lg:py-[120px] px-3'><NextProject /></section>
            <Container ><section className='mt-3'><Footer/></section></Container>
        </div>
    );
}

export default ProjectDetails;
