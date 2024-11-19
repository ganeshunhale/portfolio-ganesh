import { useEffect, useState } from 'react';
import api from '../api/api'; 

const useFetchProjectData = () => {
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await api.get('api/projects/');
                setProjectData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjectData();
    }, []);

    return { projectData, loading, error };
};

export default useFetchProjectData;
