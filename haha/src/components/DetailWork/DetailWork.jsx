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
                <p>{card.details}</p>
                <div className='box-detailwork'>
                    <div className='box-text-detailwork'>
                        <h3>{card.description}</h3>
                    </div>
                    <div className="box-image-detailwork">
                        <img src={card.imageMain} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
