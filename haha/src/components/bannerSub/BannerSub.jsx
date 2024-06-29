import '../bannerSub/BannerSub.css';

import React from 'react'
import image from '../images/avatar-swe.png';
import { Service } from '../service/Service';
export const BannerSub = () => {
  const showAlert = (event) => {
    event.preventDefault();
    alert('feature coming soon');
  }
  return (
    <div className='container'>
       
          <div className='card-img'>
            <img src={image} alt="" />
        </div>
        <div className='card-content'>
            <h1>E-Learning Platform</h1>
            <h2>Enhancing Student Success</h2>
            <p>See how our design improvements on an e-learning platform led to higher engagement, better retention rates, and improved learning outcomes.</p>
            <div className='horizon-line'></div>
            <a href="#" onClick={showAlert}><i class='bx bx-right-arrow-alt'  style={{color:'#878e99'}}  ></i>Learn More About This Case Study</a>
          </div>
        
        
    </div>
  )
}
