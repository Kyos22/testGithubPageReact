import React from 'react';
import "./header.css";
import image from '../images/image1.png';
import '../../App1.css';
import avatar1 from '../images/avatarblackwhite.jpg';
import Mainpage from '../Mainpage/Mainpage';
import { Section2 } from '../section2/Section2';
const Header = () => {
  return (
    <html>
      <div className='general-template'>
        <section id='section-background' className='background-img'>
            <img src={avatar1} alt="" />
            
        </section>
        <div className='sec'>
             <div className='sec1'>
             <div className="header">
                <div className="header-side1">
                  <div className='img-avatar1'>
                    <div className='img-avatar'>
                    <img src={avatar1} alt="" />
                    </div>
                  </div>
                  <div className="conent-header1">
                    <h1>Kyos Nguyen</h1>
                    <p>I am a fullstack developer</p>
                    <ul>
                      <li><a href=""><i class='bx bxl-facebook' style={{color:'#c4cfde'}}  ></i></a></li>
                      <li><a href=""><i class='bx bxl-instagram' style={{color:'#c4cfde'}}  ></i></a></li>
                      <li><a href=""><i class='bx bxl-linkedin' style={{color:'#c4cfde'}}  ></i></a></li>
                      
                    </ul>
                  </div>
                </div>
                
                <div className='header-side2'>
                  <div className='content-header-side2'>
                  <div className='side1'>
                          <div className='content-side1'>
                              <h1>Phone</h1>
                              <p>0767778778</p>
                          </div>
                          <div className='content-side1'>
                              <h1>Location</h1>
                              <p>Ho Chi Minh City</p>
                          </div>
                      </div>
                      <div className='side1'>
                          <div className='content-side1'>
                              <h1>Email</h1>
                              <p>nguyenthanhcongvt123@gmail.com</p>
                          </div>
                          <div className='content-side1'>
                              <h1>Birthday</h1>
                              <p>22 October</p>
                          </div>
                      </div>
                      
                  </div>
                </div>
            </div>
             </div>
        </div>
        <div className='sec'>
             <div className='section2'>
              <Section2/>
             </div>
        </div>
            
        
    </div>
    <Mainpage/>
    </html>
  )
}

export default Header