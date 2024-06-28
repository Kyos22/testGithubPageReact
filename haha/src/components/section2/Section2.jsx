import React from 'react'
import '../section2/Section2.css';
import avatar2 from '../images/avatar.jpg';
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci.</p>

                    </div>
                    <div className='service'>
                        <label htmlFor=""><i class='bx bx-check' style={{color:'#c4cfde'}}  ></i> Web Design Full Stack</label>
                        <label htmlFor=""><i class='bx bx-check' style={{color:'#c4cfde'}}  ></i> Design System Data Architect</label>
                        <label htmlFor=""><i class='bx bx-check' style={{color:'#c4cfde'}}  ></i> 24/7 support</label>
                    </div>
                    <a href="" >Dowload My CV <i class='bx bxs-download' style={{color:'#ff014f'}} ></i></a>
                </div>
            </div>
        </div>
        
    </div>
  )
}
