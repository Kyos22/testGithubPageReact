import React, { useState,useRef } from 'react';
import '../work/Work.css';
import image from '../images/aquarium.jpg';

export const Work = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalGalleryOpen, setIsModalGalleryOpen] = useState(false);
    const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const modalRef = useRef();
    const cards = [
        {
            id: 1,
            title: 'Gallery',
            date: 'October 2023',
            description: 'Showroom Management System',
            image: image,
            details: 'This is a detailed description of the Showroom Management System...'
        },
        {
            id: 2,
            title: 'video ',
            date: 'October 2023',
            description: 'Showroom Management System',
            image: image,
            details: 'This is a detailed description of the Showroom Management System...'
        },
        {
            id: 1,
            title: 'Gallery',
            date: 'October 2023',
            description: 'Showroom Management System',
            image: image,
            details: 'This is a detailed description of the Showroom Management System...'
        },
        {
            id: 1,
            title: 'Gallery',
            date: 'October 2023',
            description: 'Showroom Management System',
            image: image,
            details: 'This is a detailed description of the Showroom Management System...'
        },
        // Thêm các card khác nếu cần
    ];

    const openModal = (card) => {
        setSelectedCard(card);
        checkTitle(card.title);
        console.log(card.title);
    };

    const checkTitle = (title) => {
        if (title === 'Gallery') {
            setIsModalGalleryOpen(true);
        } else if (title === 'video') {
            setIsModalVideoOpen(true);
        }
    };

    const closeModal = () => {
        setSelectedCard(null);
        setIsModalGalleryOpen(false);
        setIsModalVideoOpen(false);
        
    };



    const handleOutsideClick = (event) => {
        if (event.target.className === 'modal') {
            closeModal();
        }
    };

    return (
        <div className='side2' data-aos="fade-down-right">
            <div className="container-work">
                {cards.map(card => (
                    <div className="card-work" key={card.id} onClick={() => openModal(card)}>
                        <div className='card-image-work'>
                            <img src={card.image} alt={card.title} />
                        </div>
                        <div className='title-work'>
                            <h1>{card.title}</h1>
                            <label><i className='bx bx-calendar' style={{ color: '#bcb9b9' }} ></i> {card.date}</label>
                        </div>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>

            {isModalGalleryOpen && selectedCard && (
                <div className="modal" onClick={handleOutsideClick} >
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img src={selectedCard.image} alt={selectedCard.title} className="modal-image"/>
                        <h1>{selectedCard.title}</h1>
                        <label><i className='bx bx-calendar' style={{ color: '#bcb9b9' }} ></i> {selectedCard.date}</label>
                        <p>{selectedCard.description}</p>
                        <p>{selectedCard.details}</p> {/* Thêm thông tin chi tiết */}
                    </div>
                </div>
            )}
            {isModalVideoOpen && selectedCard && (
                <div className="modal" onClick={handleOutsideClick} >
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img src={selectedCard.image} alt={selectedCard.title} className="modal-image"/>
                        <h1>{selectedCard.title}</h1>
                        <label><i className='bx bx-calendar' style={{ color: '#bcb9b9' }} ></i> {selectedCard.date}</label>
                        <p>{selectedCard.description}</p>

                    </div>
                </div>
            )}

        </div>
    );
};
