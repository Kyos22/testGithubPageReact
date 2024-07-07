import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

export const Gallery = () => {

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
    <div className="modal" onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <div className='gallery-modal'>
                            <h1>{card.type}</h1>
                            <div className='gallery-image-container'>
                                {card.image.map((img,index)=>(
                                    <div className='img-gallery' key={index}>
                                        <img className="modal-image" src={img} alt="" />
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
  )
}
