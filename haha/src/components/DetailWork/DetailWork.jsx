import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import '../DetailWork/DetailWork.css';


export const DetailWork = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    const navigate = useNavigate();
    const location = useLocation();
    const {card} = location.state || {};
    const [selectedCard, setSelectedCard] = useState(null);
    const closeModal = () => {
        navigate('/testGithubPageReact/work');
    }
     const handleOutsideClick = (event) => {
         if (event.target.className === 'modal1') {
             closeModal();
     }
    };
  return (
        <div className="modal1" onClick={handleOutsideClick}>
        <div className="modal-content1"> 
            <span className="close-button" onClick={closeModal}>&times;</span>
            <div className="blog-modal">
                <img src={card.imageMain} alt={card.title} className="modal-image"/>
                <h1>{card.description}</h1>
                <h2>{card.date}</h2>
                <div className='description-box'>
                    <div className="center-description-box">
                        <div className='techStack'>
                            <h1>TechStack:</h1>
                        </div>
                        <div className="stacks">
                            <h1>C#(ASP.NET)</h1>
                            <h1>SQLServer</h1>
                            <h1>REACTJS</h1>
                            <h1>CSS</h1>
                            <h1>TailwindCss</h1>
                        </div>
                    </div>
                    <div className='center-description-box'>
                        <div className='techStack'>
                                <h1>Tools:</h1>
                            </div>
                            <div className="stacks">
                                <h1>VStudio2022</h1>
                                <h1>Heidi</h1>
                                <h1>Postman</h1>
                                <h1>Github</h1>
                                <h1>brain</h1>
                            </div>
                        </div>
                    <div className='center-description-box'>
                        <div className='techStack'>
                                <h1>Roles:</h1>
                            </div>
                            <div className="stacks">
                                <h1>Superadmin</h1>
                                <h1>Admin</h1>
                                <h1>Employee</h1>
                                <h1>Warehouse</h1>
                                <h1>User</h1>
                            </div>
                        </div>
                </div>
                <p>{card.details}</p>
                <div className='box-detailwork'>
                    <div className='box-text-detailwork'>
                        <h3>{card.details}</h3>
                    </div>
                    <div className="box-image-detailwork">
                        <img src={card.imageMain} alt="" />
                    </div>
                </div>
                <div className="gallery-detailwork">
                    <div className='img-gallery-detailwork'>
                        <img src={card.imageMain} alt="" />
                    </div>
                    <div className='img-gallery-detailwork'>
                        <img src={card.imageMain} alt="" />
                    </div>
                    <div className='img-gallery-detailwork'>
                        <img src={card.imageMain} alt="" />
                    </div>
                    <div className='img-gallery-detailwork'>
                        <img src={card.imageMain} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
