import React from 'react'
import { useState,useRef } from 'react';
import '../work/Work.css';
import image from '../images/aquarium.jpg';
import image1 from '../images/csharp.png';
import luattamthuc from '../images/books/luattamthuc.png';
import garbageTruck from '../images/books/garbageTruck.png';
import imGifted from '../images/books/image-removebg-preview.png';
import homo from '../images/books/homosapiens.webp';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';


export const Work1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalGalleryOpen, setIsModalGalleryOpen] = useState(false);
    const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
    const modalRef = useRef();
    const navigate = useNavigate();
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
            description: 'Books (Lifestyle)',
            imageMain: image1,
            image: [homo,imGifted,luattamthuc,garbageTruck],
           
            details: 'This is a detailed description of the Showroom Management System...'
        },
       
    ];

    const openModal = (card) => {
        // setSelectedCard(card);
        // checkTitle(card.title);
        navigate('/detailWork',{state: {card}});
    };

    const checkTitle = (title) => {
        if (title === 'blog') {
            setIsModalGalleryOpen(true);
        } else if (title === 'gallery') {
            setIsModalVideoOpen(true);
        }
    };

    // const closeModal = () => {
    //     setSelectedCard(null);
    //     setIsModalGalleryOpen(false);
    //     setIsModalVideoOpen(false);
        
    // };



    

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

            {/* {isModalGalleryOpen && selectedCard && (
                <div className="modal" onClick={handleOutsideClick} >
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>

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
            )} */}

        </div>
    );
}
