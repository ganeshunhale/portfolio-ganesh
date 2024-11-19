import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  let {pathname} = useLocation();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center w-full p-4">
      <h1 className="text-9xl font-bold text-primary animate-pulse mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-white mb-8">
        Oops! The page {pathname} you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#3358fa] transition-transform duration-300 transform hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;