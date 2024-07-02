import React, { useEffect } from 'react'
import '../resume/Resume.css';
import csharp from '../images/csharp.png';
import aspnet from '../images/logo/asp.net-removebg-preview.png';
import php from '../images/logo/php-removebg-preview.png';
import laravel from '../images/logo/laravel-removebg-preview.png';
import html from '../images/logo/html-removebg-preview.png';
import css from '../images/logo/css-removebg-preview.png';
import react from '../images/logo/react-removebg-preview.png';
import vue from '../images/logo/vuejs-removebg-preview.png';
import mysql from '../images/logo/mysql-removebg-preview.png';
import sqlserver from '../images/logo/sqlserver.png';
import tailwind from '../images/logo/tailwindcss-removebg-preview.png';

import vsc from '../images/logo/vsc.png';
import vs from '../images/logo/vs22.png';
import eclipse from '../images/logo/eclipse.png';
import git from '../images/logo/git.png';
import figma from '../images/logo/figma.png';
import notion from '../images/logo/notion.png';
import docker from '../images/logo/docker.png';
import fx from '../images/logo/javafx.png';
import heidi from '../images/logo/heidi.png';


export const Resume = () => {
    
    const skills = [
        {id:1,imageLogo: csharp},
        {id:2,imageLogo: aspnet},
        {id:3,imageLogo: php},
        {id:4,imageLogo: laravel},
        {id:5,imageLogo: html},
        {id:6,imageLogo: css},
        {id:7,imageLogo: react},
        {id:8,imageLogo: vue},
        {id:9,imageLogo: tailwind},
        {id:10,imageLogo: sqlserver},
        {id:11,imageLogo: mysql},    
    ];
    const skill1s = [
        {id:1,imageLogo: vsc},
        {id:2,imageLogo: vs},
        {id:3,imageLogo: eclipse},
        {id:4,imageLogo: git},
        {id:5,imageLogo: figma},
        {id:6,imageLogo: notion},
        {id:7,imageLogo: heidi},
        {id:8,imageLogo: docker},
        {id:9,imageLogo: fx},
           
    ];
  return (
    
    <div className='side2' data-aos="fade-down-right">
        <div className="container-resume">
            <div className="left-resume">
                <h1 data-aos="fade-down-right">2020 - 2024</h1>
                <h2 data-aos="fade-down-right">Education & Trainning</h2>
                <div class="timeline" data-aos="fade-right">
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>2022 - 2024</span>
                        <span class="rating">4.00/5</span>
                        <h3>Software Engineer </h3>
                        
                        <p class="institution">APTECH (2022 - 2024)</p>
                        
                        <p class="description">
                        Aptech offers Software Engineering training focusing on two core languages: C# and JAVA, with a robust programming foundation for complex functionality development..
                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>2022 - 2024</span>
                        <span class="rating">4.30/5</span>
                        <h3>Website Developer </h3>
                        
                        
                        <p class="institution">APTECH (2022 - 2024)</p>
                        
                        <p class="description">
                        Develop advanced full-stack websites encompassing both backend and frontend aspects, utilizing PHP and ASP.NET along with various database technologies.
                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>2020 - 2022</span>
                        <span class="rating">credit</span>
                        <h3>Control Technology </h3>
                        
                        <p class="institution">Transportation University (2020 - 2022)</p>
                        
                        <p class="description">
                        Training in fundamental technical skills and critical thinking..
                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                </div>

            </div>  
            <div className="right-resume">
            <h1 data-aos="fade-down-right">2020-2024</h1>
                <h2 data-aos="fade-down-right">Certifications & Award</h2>
                <div class="timeline" data-aos="fade-up">
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>April 2023</span>
                       
                        <h3>TOEIC 715 (2023-2025) </h3>
                        
                        <p class="institution">English Certificate </p>
                        
                        <p class="description">
                        TOEIC is an English proficiency test focusing on business communication skills..
                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>2023</span>
                        
                        <h3>CPISM Degree For Website Development </h3>
                        
                        
                        <p class="institution">APTECH certificate</p>
                        
                        <p class="description">
                            Certificate in proficiency in information systems management
                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item-content">
                        <span class="tag" style={{background: "#f45b69"}}>2020 - 2022</span>
                        <h3>3rd Prize Of Techwiz 2023</h3>
                        
                        <p class="institution">Techwiz global I.T Competition</p>
                        
                        <p class="description">
                        Achieving 3rd prize with my team in the Techwiz 2023 competition for web design and development!
                        </p>
                        <div className="circle">
                            <div className="center-circle"></div>
                        </div>
                        <span class="timeline-line"></span>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <div className='horizon-line'></div>
        <div className="container2-resume">
            <div className="box-resume" data-aos="fade-down">
                <h1>Technologys & Skills</h1>
                <div className="card-box-resume">
                    {skills.map((skill,index)=>(
                        <div className="logo-resume" key={index}>
                            <img src={skill.imageLogo} alt="" />
                        </div>
                    ))}
                    
                    
                    
                </div>
            </div>  
            <div className="box-resume" data-aos="fade-up">
                <h1>Tools & IDE</h1>
                <div className="card-box-resume">
                    {skill1s.map((skill,index)=>(
                        <div className="logo-resume" key={index}>
                            <img src={skill.imageLogo} alt="" />
                        </div>
                    ))}
                    
                    
                    
                </div>
            </div>  
             
        </div> 
          
    </div>
  )
}
