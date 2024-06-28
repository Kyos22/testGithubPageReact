import React from 'react'
import '../section2/Section2.css';
import avatar2 from '../images/avatar.jpg';
import aquarium from '../images/aquarium.jpg';

export const Section2 = () => {
  return (
    <div className='section2-container'>
        <div className='side1'>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Resume</a></li>
                <li><a href="">Work</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div className='side2'>
            <div className='section1'>
                <div className='imgg'>
                    <img src={avatar2} alt="" />
                </div>
                <div className='content-card'>
                    <h1>Visit my portfolio & hire me</h1>
                    <h2>About Me</h2>
                    <div className='p-tag'>
<p>I am a fullstack developer with several years of experience. Thanks to my strong self-learning ability and passion for programming and design, I have the capability to create and develop cross-platform websites for both mobile and web applications.</p>
                    </div>
                    <div className='service'>
                        <label htmlFor=""><i class='bx bx-check' style={{color:'#c4cfde'}}  ></i> Web Design Full Stack</label>
                        <label htmlFor=""><i class='bx bx-check' style={{color:'#c4cfde'}}  ></i> Design System Data Architect</label>
                        <label htmlFor=""><i class='bx bx-check' style={{color:'#c4cfde'}}  ></i> 24/7 support</label>
                    </div>
                    <a href={`${process.env.PUBLIC_URL}/NGUYENTHANHCONG_CV.pdf`} download>Download My CV <i className='bx bxs-download' style={{color:'#ff014f'}}></i></a>
                </div>
            </div>
            {/* ============================================================================================ */}
            <div className='section2'>               
                <div className='content-card'>
                    <h1>Hi there! I'M</h1>
                    <h2>A Fullstack <br /> Developer <span>Kyos Nguyen</span></h2>
                    <h3>based in Ho Chi Minh, Viet Nam</h3>
                    <div className='p-tag'>
<p> For a more comprehensive understanding of my qualifications and career achievements, please visit my <a className='link-linkedin' href="https://www.linkedin.com/in/cong-nguyen-kyos-a8a729289/">LinkedIn profile</a> .</p>
                    </div>
                    
                </div>
                <div className='imgg'>
                    <div className='imgg1'>
                    <img src={aquarium} alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
