import React, { useState,useRef, useEffect } from 'react';
import '../work/Work.css';
import image from '../images/aquarium.jpg';
import image1 from '../images/csharp.png';
import luattamthuc from '../images/books/luattamthuc.png';
import garbageTruck from '../images/books/garbageTruck.png';
import imGifted from '../images/books/image-removebg-preview.png';
import homo from '../images/books/homosapiens.webp';

export const Work = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalGalleryOpen, setIsModalGalleryOpen] = useState(false);
    const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const modalRef = useRef();
    const cards = [
        {
            id: 1,
            title: 'blog',
            date: 'October 2023',
            description: 'Youth x Time = Power',
            imageMain: image,
            details: `1 * 0 = 0
Youth x time = power
youth x time wasted = loser
Tuổi trẻ được ví như một nguồn năng lượng vô tận, một thời kỳ tràn đầy sức sống và nó chỉ đến 1 LẦN DUY NHẤT. Khi bạn có tuổi trẻ với thời gian, ta tạo ra sức mạnh – một sức mạnh có thể thay đổi thế giới, xây dựng tương lai và đạt được những ước mơ lớn lao. Tuy nhiên, nếu lãng phí thời gian, sức mạnh đó không chỉ biến mất mà còn để lại một sự trống rỗng, biến tuổi trẻ trở thành một kẻ thua cuộc, vậy câu hỏi đặt ra ở đây là Bạn có đang lãng phí thời gian tuổi trẻ không ?
            `
        },
        {
            id: 2,
            title: 'gallery',
            type: 'Books',
            date: 'October 2023',
            description: 'Showroom Management System',
            imageMain: image1,
            image: [homo,imGifted,luattamthuc,garbageTruck],
           
            details: 'This is a detailed description of the Showroom Management System...'
        },
        {
            id: 3,
            title: 'Gallery',
            date: 'October 2023',
            description: 'Showroom Management System',
            image: image,
            details: 'This is a detailed description of the Showroom Management System...'
        },
        {
            id: 4,
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
        if (title === 'blog') {
            setIsModalGalleryOpen(true);
        } else if (title === 'gallery') {
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
                            <img src={card.imageMain} alt={card.title} />
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
                        {/* <img src={selectedCard.imageMain} alt={selectedCard.title} className="modal-image"/>
                        <h1>{selectedCard.title}</h1>
                        <label><i className='bx bx-calendar' style={{ color: '#bcb9b9' }} ></i> {selectedCard.date}</label>
                        <p>{selectedCard.description}</p>
                  
                        <p>{selectedCard.details}</p>  */}
                        <div className="blog-modal">
                            <img src={selectedCard.imageMain} alt={selectedCard.title} className="modal-image"/>
                            <h1>{selectedCard.description}</h1>
                            <h2>{selectedCard.date}</h2>
                            <p>{selectedCard.details}</p>
                        </div>
                    </div>
                </div>
            )}
            {isModalVideoOpen && selectedCard && (
                <div className="modal" onClick={handleOutsideClick} >
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <div className='gallery-modal'>
                            <h1>{selectedCard.type}</h1>
                            <div className='gallery-image-container'>
                                {selectedCard.image.map((img,index)=>(
                                    <div className='img-gallery' key={index}>
                                        <img className="modal-image" src={img} alt="" />
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
