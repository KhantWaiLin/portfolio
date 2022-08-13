import React,{useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { themContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
    const theme = useContext(themContext);
    const darkMode = theme.state.darkMode;

    const [done,setDone] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_i4wolzd', 'template_zdvcnsd', form.current, 'dY0pOOdlS64Wgj1XQ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form" id="Contact">
        <div className="awesome">
            <span style={{color:darkMode && "white"}}>Get in touch</span>
            <span>Contact Me</span>
            <div className="blur s-blur-1"
            style={{background:"#ABF1FF94"}}>

            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' 
                placeholder='Name'/>
                <input type="email" name="user_email" className="user" 
                placeholder='Email'/>
                <textarea className="user" name="message" 
                placeholder='Message'/>
                <input type="submit" value="Send" className="button"/>
                <span>{done && "Thanks for contacting me!"}</span>

                <div className="blurl c-blur-1"
                style={{background:"var(--purple)"}}>
                </div>

            </form>
        </div>
         
    </div>
  )
}

export default Contact