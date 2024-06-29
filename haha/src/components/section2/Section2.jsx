import React, { useState } from 'react'
import '../section2/Section2.css';
import avatar2 from '../images/avatar.jpg';
import aquarium from '../images/aquarium.jpg';
import Typical from 'react-typical';
import { BannerSub } from '../bannerSub/BannerSub';
import { Service } from '../service/Service';
import { Commendation } from '../commendation/Commendation';
import { Resume } from '../resume/Resume';
import { About } from '../about/About';

import {useLocation, useNavigate,Outlet} from "react-router-dom";
export const Section2 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(location.pathname === '/testGithubPageReact' ? 'about' : '');
    const handleNavigate = (path, buttonName) => {
        setActiveButton(buttonName);
        navigate(path);
    }
    return (
    <div className='section2-container'>
        <div className='side1'>
            <ul>
                <li 
                    onClick={() => handleNavigate('/testGithubPageReact', 'about')} 
                    style={{ backgroundColor: activeButton === 'about' ? '#FF014F' : '' }}
                ><a  >About</a></li>
                <li 
                     onClick={() => handleNavigate('/testGithubPageReact/resume', 'resume')}
                     style={{ backgroundColor: activeButton === 'resume' ? '#FF014F' : '' }}
                ><a  >Resume</a></li>
                <li><a >Work</a></li>
                <li><a >Blog</a></li>
                <li><a >Contact</a></li>
            </ul>
        </div>
        <Outlet/>
        
    </div>
  )
}
