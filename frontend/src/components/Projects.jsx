import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import TitleHeading from './TitleHeading';
import useAOS from '../hooks/useAOS';
import api from '../api/api';
import ProjectCardSk from './ProjectCardSkeliton';

const Projects = ({ titleHeading = true, reqFilterHeader = false, slice = false }) => {
  const [apiData, setApiData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [activeType, setActiveType] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useAOS();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('api/projects/');
        setFilterData(slice ? response.data.slice(0, 4) : response.data);
        setApiData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [slice]);

  if (error) return <div>Error: {error}</div>;

  const devType2 = {
    "MOBILE APP": 'MOBILE_APP',
    "FRONTEND": "FRONTEND",
    "WEB APP": "WEB_APP",
    "BACKEND": "BACKEND",
  };

  const handleDevType = (type) => {
    setActiveType(type);

    if (type === 'All') {
      return setFilterData(apiData);
    }

    setFilterData(apiData.filter((data) => data.dev_type === devType2[type]));
  };

  return (
    <div>
      {reqFilterHeader && (
        <ul data-aos="zoom-in" className="flex justify-center gap-3 md:gap-6 flex-wrap p-2 pb-5 md:pb-10">
          <li
            onClick={() => handleDevType('All')}
            className={`fs-seven font-medium cursor-pointer pb-1 ${activeType === 'All' ? 'text-blue-500 border-b-2 border-blue-600 duration-150' : 'n3-color'}`}
          >
            All
          </li>
          {Object.keys(devType2).map((type) => (
            <li
              key={type}
              onClick={() => handleDevType(type)}
              className={`fs-seven font-medium cursor-pointer pb-1 ${activeType === type ? 'text-blue-500 border-b-2 border-blue-600 duration-150' : 'n3-color'}`}
              aria-label={`View projects for ${type}`}
            >
              {type}
            </li>
          ))}
        </ul>
      )}

      {titleHeading && (
        <TitleHeading
          h2Text="Featured Projects"
          pText="My comprehensive approach ensures a seamless project experience, from our initial consultation to the final delivery. With a focus on collaboration and attention to detail, I handle all aspects of development, allowing you to concentrate on what you do best."
          buttonTitle="View Portfolio"
          reqBtn={true}
          onClickLocation="/portfolio"
        />
      )}

      <div className="post-card-container">
        {loading ? (
          new Array(4).fill().map((_, index) => (
            <ProjectCardSk key={index} />
          ))
        ) : (
          filterData.map((data) => (
            <ProjectCard key={data.id} project={data} />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
