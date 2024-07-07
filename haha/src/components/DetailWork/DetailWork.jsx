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
                            <h1>{card.teckstack1}</h1>
                            <h1>{card.teckstack2}</h1>
                            <h1>{card.teckstack3}</h1>
                            <h1>{card.teckstack4}</h1>
                            <h1>{card.teckstack5}</h1>
                        </div>
                    </div>
                    <div className='center-description-box'>
                        <div className='techStack'>
                                <h1>Tools:</h1>
                            </div>
                            <div className="stacks">
                                <h1>{card.tool1}</h1>
                                <h1>{card.tool2}</h1>
                                <h1>{card.tool3}</h1>
                                <h1>{card.tool4}</h1>
                                <h1>{card.tool5}</h1>
                                
                            </div>
                        </div>
                    <div className='center-description-box'>
                        <div className='techStack'>
                                <h1>Roles:</h1>
                            </div>
                            <div className="stacks">
                                <h1>{card.role1}</h1>
                                <h1>{card.role2}</h1>
                                <h1>{card.role3}</h1>
                                <h1>{card.role4}</h1>
                                <h1>{card.role5}</h1>
                                
                            </div>
                        </div>
                </div>
                <p>{card.details}</p>
                <div className='box-detailwork'>
                    <div className='box-text-detailwork'>
                        <h3>{card.details1}</h3>
                    </div>
                    <div className="box-image-detailwork">
                        <img src={card.imageDb} alt="" />
                    </div>
                </div>
                <div className="gallery-detailwork">
                    {card.imageDetail.map((img,index)=>(
                        <div className='img-gallery-detailwork' key={index}>
                        <img src={img} alt="" />
                    </div>
                    ))}
                    
                </div>
                <div className='video-detailWork'>
                <iframe width="100%" height="500px" src={card.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
                
            </div>
        </div>
    </div>
  )
}
