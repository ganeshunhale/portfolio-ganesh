import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Container from '../components/Container';
import useAOS from '../hooks/useAOS';
import api from '../api/api';
import ReactHtmlParser from 'html-react-parser';
import Loader from '../components/Loader';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addclassName, setAddclassName] = useState(false);  // Controls loader fade-out
    useAOS();

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await api.get(`api/blog/${id}`);
                setBlog(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                // Set a delay to allow loader to fade out before data is displayed

                // Trigger fade-out
                setLoading(false);
                setTimeout(() => {
                    setAddclassName(true);
                }, 0);
                console.log(addclassName);

            }
        };

        fetchBlogDetails();
    }, [id]);

    const modifyHtmlContent = (content) => {
        return ReactHtmlParser(content, {
            transform: (node) => {
                if (node.type === 'div') {
                    return React.cloneElement(node, { className: 'dark:text-gray-900 my-4' });
                }
                if (node.type === 'p') {
                    return React.cloneElement(node, { className: 'dark:text-gray-300 my-4' });
                }
                if (node.type === 'h1' || node.type === 'h2' || node.type === 'h3') {
                    return React.cloneElement(node, { className: 'dark:!text-blue-400' });
                }
                if (node.type === 'li') {
                    return React.cloneElement(node, { className: 'dark:text-white' });
                }
                if (node.type === 'strong') {
                    return React.cloneElement(node, { className: 'dark:text-gray-50' });
                }
                return node;
            },
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center w-full">
                <Loader addclassName={addclassName} />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
             <div className={`${addclassName && '!w-0'} duration-1000 !z-10 h-full bg-primary opacity-50 absolute left-0 w-[52%]`}></div>
            <div className={`${addclassName && '!w-0'} !z-50 h-full duration-700 bg-primary opacity-50 absolute right-0 w-[52%]`}></div>
            <div className='px-0 md:px-4 lg:px-8 xl:px-12 2xl:px-16 mx-auto pt-4 lg:pt-28'>

                <section className='!z-10'>
                    <div>
                        <ul data-aos="fade-down" className="flex items-center gap-10 flex-wrap">
                            <li className="n3-color fs-eight">Published On {new Date(blog.date).toLocaleDateString()}</li>
                            <li className="n3-color fs-eight">{blog.category}</li>
                        </ul>
                        <div data-aos="fade-up" className="mt-4">
                            {/* Render the HTML content of the blog */}
                            {modifyHtmlContent(blog.content)}
                        </div>
                    </div>
                </section>
                <section>
                    <Footer className="sticky bottom-0" />
                </section>
            </div>
        </div>
    );
};

export default BlogDetails;
