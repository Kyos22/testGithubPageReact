import React from 'react'
import '../service/Service.css';
export const Service = () => {
  return (
    <div className='serviceContainer'>
            <div className='container'>
                <h1>What i Am Doing</h1>
                <div className="cards">
                  <div className='card' data-aos="zoom-out-right">
                    <i class='bx bx-layout' style={{color:'#ff014f'}}  ></i>
                    <h2>Web Design Full stack</h2>
                    <p>Crafting user-friendly and visually appealing websites for all devices.</p>
                    </div>
                  <div className='card' data-aos="zoom-out-right">
                    <i class='bx bx-desktop' style={{color:'#ff014f'}}  ></i>
                    <h2>Web Developer Full stack</h2>
                    <p>Building high-performance, secure, and scalable web applications.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
