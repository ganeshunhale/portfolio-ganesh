import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './components/NotFound';
import SideMenuLeft from './components/SideMenuLeft';
import BlogDetails from './pages/BlogDetails';
import Test from './components/Test'
import ProjectDetails from './pages/ProjectDetails';

const App = () => {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
    const path = useLocation();

    useEffect(() => {
        scrollTo(0, 0);
    }, [path.pathname]);

    useEffect(() => {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [mode]);

    return (
        <div className="flex  flex-col  lg:flex-row w-full min-h-[100vh]  md:px-0 dark:bg-gray-800 text-black dark:text-white ">
            <div className="sticky top-0 w-full  flex-row lg:flex-col bgn1-color dark:bg-gray-900  lg:bg-white z-50 lg:flex h-auto  lg:h-[100vh] lg:w-[63px]">
                <SideMenuLeft setMode={setMode} />
            </div>
            <NavBar />
            <Routes>
                <Route path='/' element={<About />} />
                {/* <Route path='/portfolio' element={<Portfolio />} /> */}
                <Route path='/resume' element={<Resume />} />
                {/* <Route path='/blogs' element={<Blog />} /> */}
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
                {/* <Route path='blog/:id' element={<BlogDetails />} /> */}
                {/* <Route path='/test' element={<Test />} /> */}
                {/* <Route path='/project/:id' element={<ProjectDetails />} />
                <Route path='/blog/:id' element={<BlogDetails />} /> */}
            </Routes>
        </div>
    );
}

export default App;
