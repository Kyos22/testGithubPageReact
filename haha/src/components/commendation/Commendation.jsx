import React, { useState, useRef, useEffect } from 'react';
import './Commendation.css'; // Đường dẫn tới file CSS của bạn
import quotes from '../images/quote.png';
import avatar2 from '../images/avatar.jpg';
import image from '../images/aquarium.jpg';

const slides = [
  {
    id: 1,
    image: avatar2,
    nameCompany: "SofTech",
    name: "Tri Phan",
    Position: "Operating Officer",
    title: 'Web App Development',
    date: 'Upword - Mar 4, 2016 - Aug 30, 2021',
    description: 'CNTT ngày càng trở thành lựa chọn của nhiều bạn trẻ nhiệt huyết, yêu thích lĩnh vực công nghệ. Và cơ hội việc làm của ngành CNTT cũng mang đến cho bạn nhiều lựa chọn hấp dẫn.'
  },
  {
    id: 2,
    image: image,
    nameCompany: "Vietlink",
    name: "Phong Tran",
    Position: "Fullstack Developer",
    title: 'UI/UX Design',
    date: 'Upword - Jan 5, 2018 - Dec 15, 2020',
    description: 'Thiết kế UI/UX đóng vai trò quan trọng trong việc nâng cao trải nghiệm người dùng, giúp sản phẩm của bạn nổi bật và thu hút khách hàng.'
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
    }, 3000); // Chuyển slide sau mỗi 5 giây

    return () => clearInterval(slideInterval); // Clear interval khi component bị unmounted
  }, []);

  const handleButtonClick = (e, action) => {
    e.stopPropagation(); // Ngăn chặn sự kiện touch từ ảnh hưởng đến nút bấm
    action();
  };
  

  return (
    <div className='containerCommendation' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}  >
      <div className='con-title'>
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
                <div className='card-img'>
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
          <div className='content-above'>
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
          <div className='content-below' >
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
