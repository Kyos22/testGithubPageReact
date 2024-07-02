import React, { useState, useEffect,useRef } from 'react';
import '../section2/Section2.css';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

export const Section2 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeButton, setActiveButton] = useState('');
    const outletRef = useRef(null);

    useEffect(() => {
        const path = location.pathname.split('/').pop();
        setActiveButton(path === '' || path === 'testGithubPageReact' ? 'about' : path);
    }, [location.pathname]);

    const handleNavigate = (path, buttonName) => {
        setActiveButton(buttonName);
        navigate(path);
    };
    useEffect(() => {
        if (outletRef.current) {
            outletRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.pathname]);
    return (
        <div className='section2-container'>
            <div className='side1' >
                <ul>
                    <li
                        onClick={() => handleNavigate('/testGithubPageReact', 'about')}
                        className={activeButton === 'about' ? 'active' : ''}
                    >
                        <a>About</a>
                    </li>
                    <li
                        onClick={() => handleNavigate('/testGithubPageReact/resume', 'resume')}
                        className={activeButton === 'resume' ? 'active' : ''}
                    >
                        <a>Resume</a>
                    </li>
                    <li
                        onClick={() => handleNavigate('/testGithubPageReact/work', 'work')}
                        className={activeButton === 'work' ? 'active' : ''}
                    >
                        <a>Work</a>
                    </li>
                    <li
                        onClick={() => handleNavigate('/testGithubPageReact/blog', 'blog')}
                        className={activeButton === 'blog' ? 'active' : ''}
                    >
                        <a>Blog</a>
                    </li>
                    <li
                        onClick={() => handleNavigate('/testGithubPageReact/contact', 'contact')}
                        className={activeButton === 'contact' ? 'active' : ''}
                    >
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div ref={outletRef}>
                <Outlet />
            </div>
        </div>
    );
};
