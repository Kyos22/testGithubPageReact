import React, { useEffect, useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
import image from '../images/shakehand.jpg';
import '../contact/Contact.css';
export const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_fj5hkpx', 'template_9ks3hxz', form.current, {
          publicKey: 'lyLpDLObN6AQGK7Yb',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            window.Swal.fire({
                icon: 'success',
                title: 'Email sent successfully!',
                showConfirmButton: false,
                timer: 1500
              });
          },
          (error) => {
            console.log('FAILED...', error.text);
            window.Swal.fire({
                icon: 'error',
                title: 'Email sent failed!',
                showConfirmButton: false,
                timer: 1500
              });
          },
        );
    };
  
    return (
      <div className='side2' data-aos="fade-down-right">
            <div className="container-contact">
                <div className="left-box-contact">
                    <div className="img-box-contact">
                        <div className="img2-box-contact">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className='content-box-contact'>
                        <h1>Kyos Nguyen</h1>
                        <h2>FullStack Developer</h2>
                        <h3>I am available for freelance work. Connect with me via and call into my account</h3>
                        <h4>Phone: <b>+0767778778</b> </h4>
                        
                        <h6>Find with me</h6>
                        <div className="conent-header2"  >
                           
                            <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=100013789689193"><i class='bx bxl-facebook' style={{color:'#c4cfde'}}  ></i></a></li>
                            <li><a href="https://www.instagram.com/kyos_oarsis.2202/"><i class='bx bxl-instagram' style={{color:'#c4cfde'}}  ></i></a></li>
                            <li><a href="https://www.linkedin.com/in/cong-nguyen-kyos-a8a729289/"><i class='bx bxl-linkedin' style={{color:'#c4cfde'}}  ></i></a></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-box-contact">
                    
                    
                        <form ref={form} onSubmit={sendEmail} className='form-box-contact'>
                            <div className='row-2-item'>
                                <div className='row'>
                                    <h1>Name</h1>
                                    <input type="text" name="from_name" required/>
                                </div>
                                <div className='row'>
                                    <h1>Phone</h1>
                                    <input type="number" name="phone" required/>
                                </div>
                            </div>
                            <div className='row'>
                                <h1>Email</h1>
                                <input type="text" name="user_email" required/>
                            </div>
                            <div className='row'>
                                <h1>Subject</h1>
                                <input type="text" name="subject" />
                            </div>
                            <div className='row-text-area'>
                                <h1>Your Message</h1>
                                <textarea name="" required id=""></textarea>
                            </div>
                            <div className='row-button'>
                                
                                <input type="submit" value="Send Message" />
                            </div>
                            </form>
                        
                    
                </div>
            </div>
      </div>
    );
}
