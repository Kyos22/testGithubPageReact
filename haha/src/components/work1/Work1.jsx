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
import carzonebg from '../images/carzone/carzoneBackground.png';
import carzone1 from '../images/carzone/carzone1.png';
import carzone2 from '../images/carzone/carzone2.png';
import carzone3 from '../images/carzone/carzone3.png';
import carzone4 from '../images/carzone/carzone4.png';
import carzone5 from '../images/carzone/carzone5.png';
import carzone6 from '../images/carzone/carzone6.png';
import carzone7 from '../images/carzone/carzone7.png';
import carzone8 from '../images/carzone/carzone8.png';
import carzone9 from '../images/carzone/carzone9.png';
import carzonedb from '../images/carzone/carzoneDB.jpg';


import aovisbg from '../images/aovis/aovisBg.jpg';
import aovis1 from '../images/aovis/aovis1.png';
import aovis2 from '../images/aovis/aovis2.png';
import aovis3 from '../images/aovis/aovis3.png';
import aovis4 from '../images/aovis/aovis4.jpg';
import aovis5 from '../images/aovis/aovis5.png';
import aovis6 from '../images/aovis/aovis6.png';
import aovis7 from '../images/aovis/aovis7.png';
import aovis8 from '../images/aovis/aovis8.png';
import aovis9 from '../images/aovis/aovis9.png';
import aovisDb from '../images/aovis/aovisDb.jpg';

import hiraolabg from '../images/hiraola/hiraolabg.png';
import hiraola1 from '../images/hiraola/hiraola1.png';
import hiraola2 from '../images/hiraola/hiraola2.png';
import hiraola3 from '../images/hiraola/hiraola3.png';
import hiraola4 from '../images/hiraola/hiraola4.png';
import hiraola5 from '../images/hiraola/hiraola5.png';
import hiraola6 from '../images/hiraola/hiraola6.png';
import hiraolaDB from '../images/hiraola/hiraolaDb.png';

import bemusebg from '../images/bemuse/bemusebg.png';
import bemuse1 from '../images/bemuse/bemuse1.png';
import bemuse2 from '../images/bemuse/bemuse2.png';
import bemuse3 from '../images/bemuse/bemuse3.png';
import bemuse4 from '../images/bemuse/bemuse4.png';
import bemuse5 from '../images/bemuse/bemuse5.png';
import bemuse6 from '../images/bemuse/bemuse6.png';
import bemuse7 from '../images/bemuse/bemuse7.png';
import bemuse8 from '../images/bemuse/bemuse8.png';
import bemuse9 from '../images/bemuse/bemuse9.png';
import bemusedb from '../images/bemuse/bemuseDb.png';




export const Work1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalGalleryOpen, setIsModalGalleryOpen] = useState(false);
    const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
    const modalRef = useRef();
    const navigate = useNavigate();
    const cards = [
        {
            id: 1,
            title: 'Fullstack',
            date: 'May 2024',
            description: 'CarZone (Showroom Management System)',
            imageMain: carzonebg,
            imageDb: carzonedb,
            imageDetail: [carzone1,carzone2,carzone3,carzone4,carzone5,carzone6,carzone7,carzone8,carzone9],
            details: `Vehicle showroom management system describes the complete process of selling a vehicle to a customer from the dealer’s showroom. Before selling, the vehicle belongs to the fixed asset of the dealer’s showroom. So the main point of this scenario is posting the vehicle from a fixed asset to a current asset. While executing the process, the dealer can manually maintain the vehicle business transaction type, which means, the vehicle can be set as a new or used vehicle to sell to the customer. This scenario shows the process of new vehicle sales.
            `,
            details1: `Key Features: The system is expandable, allowing for the creation of new branch chains. Each branch will have management representatives responsible for inventory management and reporting. The system facilitates vehicle distribution from suppliers to the central warehouse and ultimately to the customer. It provides detailed product revenue statistics in the superadmin module. Additionally, it allows the creation of information such as country, district, brand, model, and vehicle, and enables the creation of orders for customers purchasing vehicles.
            `,
            teckstack1: 'C#(ASP.NET)',
            teckstack2: 'REACTJS',
            teckstack3: 'SQLSERVER',
            teckstack4: 'HTML/CSS',
            teckstack5: 'TAILWINDCSS',
            tool1:'VStudio2022',
            tool2:'Heidi',
            tool3:'Postman',
            tool4:'Github',
            tool5:'Brain',
            role1: 'Superadmin',
            role2: 'Admin',
            role3: 'Employee',
            role4: 'Warehouse',
            role5: 'User',
            video: 'https://www.youtube.com/embed/fjvfVAGZ5UU?si=KDZEOopkSvFeheeu'
        },
        {
            id: 2,
            title: 'Fullstack',
            date: 'February 2024',
            description: 'AOVIS (Movie Ticket)',
            imageMain: aovisbg,
            imageDb: aovisDb,
            imageDetail: [aovis1,aovis2,aovis3,aovis4,aovis5,aovis6,aovis7,aovis8,aovis9],
            details: `The movie ticket booking website can be expanded to include multiple cinema chains. It allows the creation of specific cinemas including screening rooms, the number of seats in each room, and setting showtimes for each movie at each specific cinema. Customers can view the showtimes and apply vouchers.
            `,
            details1: `Create cinemas, create admins to manage those cinemas, create screening rooms, and set the number of seats. Create movies and set showtimes for each movie at each cinema branch. Create vouchers for ticket discounts. Customers can book movie tickets for the cinema chains they choose. Create a blog.
            `,
            teckstack1: 'C#(ASP.NET)',
            teckstack2: 'REACTJS',
            teckstack3: 'SQLSERVER',
            teckstack4: 'HTML/CSS',
            teckstack5: 'TAILWINDCSS',
            tool1:'VStudio2022',
            tool2:'Heidi',
            tool3:'Postman',
            tool4:'Github',
            tool5:'Brain',
            role1: 'Superadmin',
            role2: 'Admin',
            role3: 'User',
           
            video: 'https://www.youtube.com/embed/ki_qXH_sZUw?si=6yh4YwHgnTDdv38l'
        },
        {
            id: 3,
            title: 'Fullstack',
            date: 'November 2023',
            description: 'Hiraola (Ecommerce-website)',
            imageMain: hiraolabg,
            imageDb: hiraolaDB,
            imageDetail: [hiraola1,hiraola2,hiraola3,hiraola4,hiraola5,hiraola6],
            details: `This e-commerce website allows customers to create accounts using Google, purchase products, track orders, and apply vouchers. They can also make payments via PayPal. On the admin side, the platform includes features for inventory management, sales reporting, and many other functionalities, ...
            `,
            details1: `The superadmin can monitor providers, view warehouse history, and access all customer and admin information. They can reset admin passwords, create vouchers for discounts and free shipping, and view voucher details.

The admin can manage categories, products, and providers. They perform CRUD operations, monitor orders, add transport fees, and create blog categories and homepage banners.

Customers can register via Google, confirm their account via email, add products to their cart, apply vouchers, and proceed to checkout. They can also check order status and view the event page.
            `,
            teckstack1: 'PHP(LARAVEL)',
            teckstack2: 'REACTJS',
            teckstack3: 'MySQL',
            teckstack4: 'HTML/CSS',
            teckstack5: 'TAILWINDCSS',
            tool1:'VSC',
            tool2:'Heidi',
            tool3:'Postman',
            tool4:'Github',
            tool5:'Brain',
            role1: 'Superadmin',
            role2: 'Admin',
            role3: 'User',
           
            video: 'https://www.youtube.com/embed/b5l8F--yURk?si=zQ_Zv3YxkGVf3-Xn'
        },
        {
            id: 4,
            title: 'FrontEnd',
            date: 'August 2023',
            description: 'BeMuse (Museum Gallery)',
            imageMain: bemusebg,
            imageDb: bemusedb,
            imageDetail: [bemuse1,bemuse2,bemuse3,bemuse4,bemuse5,bemuse6,bemuse7,bemuse8,bemuse9],
            details: `This is a frontend project for a museum gallery website that allows customers to follow information about exhibitions and showcases the museum's artworks.
            `,
            details1: `100% frontend project for a museum gallery website with responsive design. The website includes pages such as Exhibition, Museum, Gallery, About, and Contact. Overall, this project is purely frontend and is developed by referencing a sample website.
            `,
            teckstack1: 'VueJS',
            teckstack2: 'Javascript',
            teckstack3: 'HTML/CSS',
            teckstack4: 'TAILWINDCSS',
            tool1:'VSC',
            tool3:'Github',
            tool4:'Brain',
            role1: 'User',
           
            video: 'https://www.youtube.com/embed/onRCmqSi4X8?si=M8_-OBq3wOyxVBwr'
        },
    
       
    ];

    const openModal = (card) => {
        // setSelectedCard(card);
        // checkTitle(card.title);
        navigate('/detailWork',{state: {card}});
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
