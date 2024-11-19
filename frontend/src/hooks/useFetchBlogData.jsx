// fatchBlogData.js
import { useEffect, useState } from 'react';
import api from '../api/api'; 

const useFetchBlogData = () => {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await api.get('api/blogs/');
                setBlogData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, []);

    return { blogData, loading, error };
};

export default useFetchBlogData;
