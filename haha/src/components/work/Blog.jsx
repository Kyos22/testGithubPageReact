import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

export const Blog = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    const navigate = useNavigate();
    const location = useLocation();
    const {card} = location.state || {};
    const [selectedCard, setSelectedCard] = useState(null);
    const closeModal = () => {
        navigate('/testGithubPageReact/blog');
    }
    const handleOutsideClick = (event) => {
        if (event.target.className === 'modal') {
            closeModal();
    }
   };
    
    
  return (
    <div className="modal" onClick={handleOutsideClick} >
            <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <div className="blog-modal">
                    <img src={card.imageMain} alt={card.title} className="modal-image"/>
                    <h1>{card.description}</h1>
                    <h2>{card.date}</h2>
                    <p>{card.details}</p>
                    <p className='detail-blog-modal'>{card.details1}</p>
                </div>
            </div>
        </div>
  )
}
