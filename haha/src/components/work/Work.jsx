import React, { useState,useRef, useEffect } from 'react';
import '../work/Work.css';
import image from '../images/aquarium.jpg';
import image1 from '../images/csharp.png';
import luattamthuc from '../images/books/luattamthuc.png';
import garbageTruck from '../images/books/garbageTruck.png';
import imGifted from '../images/books/image-removebg-preview.png';
import homo from '../images/books/homosapiens.webp';
import cuocdieuhanh from '../images/books/cuocdieuhanhthamlang.jpg';
import bookself from '../images/books/bookself.jpg';
import naoko from '../images/books/naoko.jpg';
import vuanmang from '../images/books/vuanmang.jpg';
import namiya from '../images/books/taphoanamiya.jpg';
import nghicanx from '../images/books/nghicanx.jpg';
import tencuatrochoi from '../images/books/tencuatrochoi.jpg';
import bachdahang from '../images/books/bachdahanh.jpg';
import blogimage1 from '../images/blogimage1.jpg';
import blogimage2 from '../images/blogimage2.jpg';
import blogimage3 from '../images/blogimage3.jpg';
import blogimage4 from '../images/blogimage4.jpg';
import blogimageMoitruonglamviec from '../images/imageblogMoitruonglamviec.jpg';

import drawnhavip1 from '../images/draws/draw-nha-vip1.jpg';
import drawnhavip2 from '../images/draws/draw-nha-vip2.jpg';
import drawnhavip3 from '../images/draws/draw-nha-vip3.jpg';
import drawnhavip4 from '../images/draws/draw-nha-vip4.jpg';
import drawnhavip5 from '../images/draws/draw-nha-vip5.jpg';
import drawnhavip6 from '../images/draws/draw-nha-vip6.jpg';
import drawnhavip7 from '../images/draws/draw-nha-vip7.jpg';
import drawhousecui1 from '../images/draws/draw-house-cui1.jpg';
import drawhousega from '../images/draws/draw-house-ga.jpg';
import drawtapve from '../images/draws/draw-tapve.jpg';
import drawguitar from '../images/draws/drawGuitar.jpg';
import drawtrain from '../images/draws/draw-train.jpg';

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
            imageMain: blogimage1,
            details: `1 * 0 = 0
Youth x time = power
youth x time wasted = loser
Tuổi trẻ được ví như một nguồn năng lượng vô tận, một thời kỳ tràn đầy sức sống và nó chỉ đến 1 LẦN DUY NHẤT. Khi bạn có tuổi trẻ với thời gian, ta tạo ra sức mạnh – một sức mạnh có thể thay đổi thế giới, xây dựng tương lai và đạt được những ước mơ lớn lao. Tuy nhiên, nếu lãng phí thời gian, sức mạnh đó không chỉ biến mất mà còn để lại một sự trống rỗng, biến tuổi trẻ trở thành một kẻ thua cuộc, vậy câu hỏi đặt ra ở đây là Bạn có đang lãng phí thời gian tuổi trẻ không ?
            `,
            details1: 'Youth is likened to an endless source of energy, a period brimming with vitality, and it comes only once in a lifetime. When you possess youth and time, you create a power – a power that can change the world, build the future, and achieve great dreams. However, if you waste time, that power not only vanishes but also leaves an emptiness, turning youth into a loser. So the question here is, "Are you wasting your youth?"'
        },
        {
            id: 2,
            title: 'gallery',
            type: 'Books',
            date: 'October 2023',
            description: 'Books (Lifestyle)',
            imageMain: bookself,
            image: [homo,imGifted,luattamthuc,garbageTruck],
           
            details: 'This is a detailed description of the Showroom Management System...'
        },
        {
            id: 3,
            title: 'gallery',
            type: 'Books',
            date: 'October 2023',
            description: 'Books (Detective)',
            imageMain: nghicanx,
            image: [nghicanx,naoko,vuanmang,namiya,tencuatrochoi,bachdahang,cuocdieuhanh],
           
            details: 'This is a detailed description of the Showroom Management System...'
        },
        {
            id: 4,
            title: 'blog',
            date: 'October 2023',
            description: 'The workspace significantly contributes to our work efficiency.',
            imageMain: blogimageMoitruonglamviec,
            details: `Không gian làm việc cũng góp phần không nhỏ vào hiệu suất công việc của chúng ta

Không gian làm việc quả thực có ảnh hưởng không nhỏ tới hiệu suất công việc của chúng ta. Đặc biệt trong thời đại ngày nay, khi mà việc làm việc từ xa, làm việc tại nhà trở nên phổ biến, việc tạo dựng một không gian làm việc lý tưởng lại càng trở nên quan trọng.

Làm việc ở nhà đòi hỏi một không gian thoáng đãng và sạch sẽ. Sự gọn gàng không chỉ giúp chúng ta giảm căng thẳng mà còn tạo điều kiện thuận lợi để tập trung vào công việc. Ánh sáng cũng đóng một vai trò quan trọng; ánh sáng tự nhiên là tốt nhất, nhưng nếu không có điều kiện, hãy chọn loại đèn chiếu sáng phù hợp, dễ chịu cho mắt.

Bên cạnh đó, không ít người lại thích chọn quán cà phê làm nơi làm việc. Không khí nơi đây, với âm thanh nền nhẹ nhàng và nhộn nhịp, có thể tạo cảm giác sôi động và tràn đầy năng lượng. Ngồi ở quán cà phê, đôi khi chúng ta cảm thấy được khích lệ hơn, như được tiếp thêm động lực từ nhịp sống xung quanh.

Quan trọng nhất, mỗi người nên tìm cho mình một phong cách làm việc phù hợp. Dù là một góc nhỏ tại nhà hay một bàn ở quán cà phê, không gian làm việc lý tưởng chính là nơi bạn cảm thấy thoải mái và hiệu quả nhất. Hãy nhớ rằng, không gian tốt sẽ góp phần nâng cao năng suất và chất lượng công việc của bạn.
            `,
            details1: `Indeed, the workspace has a considerable impact on our work performance. Especially in today's era, when remote working and working from home have become common, creating an ideal workspace has become even more important.

Working from home requires a spacious and clean environment. Tidiness not only helps us reduce stress but also creates favorable conditions for concentrating on work. Lighting also plays a crucial role; natural light is best, but if it's not available, choose appropriate lighting that is easy on the eyes.

Moreover, many people prefer to work in coffee shops. The atmosphere there, with its gentle and bustling background sounds, can create a lively and energetic feel. Sitting in a coffee shop, sometimes we feel more encouraged, as if motivated by the surrounding rhythm of life.

Most importantly, everyone should find a working style that suits them. Whether it's a small corner at home or a table in a coffee shop, the ideal workspace is where you feel most comfortable and efficient. Remember, a good workspace will enhance your productivity and the quality of your work.`
        },
        {
            id: 5,
            title: 'gallery',
            type: 'Books',
            date: 'October 2023',
            description: 'Drawing/Sketch',
            imageMain: drawtrain,
            image: [drawnhavip1,drawnhavip2,drawnhavip3,drawnhavip4,drawnhavip5,drawnhavip6,drawnhavip7,drawtrain,drawguitar,drawhousecui1,drawhousega,drawtapve],
           
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
    useEffect(() => {
        if (isModalGalleryOpen || isModalVideoOpen) {
            modalRef.current.scrollTo(0, 0);
        }
    }, [isModalGalleryOpen, isModalVideoOpen]);
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
                <div className="modal" onClick={handleOutsideClick} ref={modalRef}>
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
                            <p>{selectedCard.details1}</p>
                        </div>
                    </div>
                </div>
            )}
            {isModalVideoOpen && selectedCard && (
                <div className="modal" onClick={handleOutsideClick} ref={modalRef}>
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
