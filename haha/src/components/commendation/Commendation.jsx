import React, { useState, useRef, useEffect } from 'react';
import './Commendation.css'; // Đường dẫn tới file CSS của bạn
import quotes from '../images/quote.png';
import triphan from '../images/triphan.jpg';
import lytuan from '../images/lytuan.jpg';
import ryannguyen from '../images/ryanngueyn.jpg';


const slides = [
  {
    id: 1,
    image: ryannguyen,
    nameCompany: "Ngo Thom",
    name: "Ryan Nguyen",
    Position: "Ngo Thom's Co-Foundation",
    title: 'UI/UX Design',
    date: '7/2023 - Now',
    description: 'Công (Kyos) is an exceptional Fullstack Developer. Despite having just one year of experience, he has demonstrated remarkable skills and dedication. His ability to understand complex problems and provide efficient solutions is impressive'
  },
  {
    id: 2,
    image: lytuan,
    nameCompany: "All In Vain",
    name: "Ly Tuan",
    Position: "President",
    title: 'Game Developer',
    date: '5/2019 - Now',
    description: 'Kyos Nguyen work ethic and passion for coding are unparalleled. He has a keen eye for detail and a deep understanding of user experience design, which greatly enhances the quality of his work. His contributions to our projects have been significant.'
  },
  {
    id: 3,
    image: triphan,
    nameCompany: "NavSoft",
    name: "Tri Phan",
    Position: "Product Manager",
    title: 'FullStack Developer',
    date: 'NavSoft/5 Jan 2017 - 2022',
    description: 'As a mentor of Cong, I see great potential in him and recognize his self-learning ability and creativity. I am impressed with his projects.'
  }
  // Thêm các slide khác tương tự
];

export const Commendation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const startX = useRef(0);
  const endX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      nextSlide();
    }
    if (startX.current - endX.current < -50) {
      prevSlide();
    }
  };
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Chuyển slide sau mỗi 5 giây

    return () => clearInterval(slideInterval); // Clear interval khi component bị unmounted
  }, []);

  const handleButtonClick = (e, action) => {
    e.stopPropagation(); // Ngăn chặn sự kiện touch từ ảnh hưởng đến nút bấm
    action();
  };
  

  return (
    <div className='containerCommendation' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}  >
      <div className='con-title' data-aos="fade-right">
        <h1>What Clients Say</h1>
        <h2>Commendations</h2>
      </div>
      <div className='con-container' >
      {slides.map((slide, index) => (
              <div
                key={index}
                className={`content-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              >
                <div className='card-img' data-aos="fade-down">
          <div className='img'>
            <img src={slide.image} alt="Avatar" />
          </div>
          <div className='card-content'>
            <h1>{slide.nameCompany}</h1>
            <h2>{slide.name}</h2>
            <span>{slide.Position}</span>
          </div>
        </div>
              </div>
            ))}
        <div className='side2-commendation'>
          <div className='content-above' >
            <img src={quotes} alt="Quotes" />
            <div className='button-container'>
        <a className='eachButton' onClick={prevSlide}>
          <i className='bx bx-left-arrow-alt' style={{ color: '#c4cfde' }}></i>
        </a>
        <a className='eachButton' onClick={nextSlide}>
          <i className='bx bx-right-arrow-alt' style={{ color: '#FF014F' }}></i>
        </a>
      </div>
          </div>
          <div className='content-below' data-aos="fade-up" >
            {slides.map((slide, index) => (
              <div key={index}
                className={`content-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}>
                <div className='content-commadation-title'>
                  <div className="left-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.date}</p>
                  </div>
                  <div className="right-content-stars">
                    <i className='bx bxs-star' style={{ color: '#ecf139' }}></i>
                    <i className='bx bxs-star' style={{ color: '#ecf139' }}></i>
                    <i className='bx bxs-star' style={{ color: '#ecf139' }}></i>
                    <i className='bx bxs-star' style={{ color: '#ecf139' }}></i>
                    <i className='bx bxs-star' style={{ color: '#ecf139' }}></i>
                  </div>
                </div>
                <div className='horizone-line-commendation'></div>
                <span>{slide.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};
