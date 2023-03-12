import React from 'react'
import './Services.css'
import Humble from '../../img/humble.png';
import Heart from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Card from '../Card/Card';
import { themContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import resume from '../../../src/resume.pdf';


const Services = () => {

  const theme = useContext(themContext);
  const darkMode = theme.state.darkMode;

  const transition = {duration: 3.5,type:"spring"};

  return (
    <div className="services" id="Services">
         {/* left side */}
         <div className="awesome">
           <span style={{color:darkMode && "white"}}>My Awesome</span>
           <span>Services</span>
           <span>
            Loem ipsum is used to display the dummy text and it is
            <br/>
            widely used if you don't know which text should be written.
           </span>
           <a href={resume} download>
           <button className='button s-button'>Download CV</button>
           </a>

           {/* Blur div 1 */}
           <div className="blur s-blur-1"
           style={{background:"#ABF1FF94"}}></div>
         </div>
         {/* right Side */}
         <div className="cards">

          {/* first Card */}
           <motion.div 
           initial={{left:"25rem"}}
           whileInView={{left:"14rem"}}
           transition={transition}
           
           style={{left:"14rem"}}>
            <Card 
            emoji = {Heart}
            heading={"About Me"}
            detail={"Myanmar Institute of Information Technology, 3rd year student,lives in Mandalay"}
            />
           </motion.div>

          {/* Second Card */}
          <motion.div 
          initial={{left:"-15rem",top:"12rem"}}
          whileInView={{left:"-4rem",top:"12rem"}}
          transition={transition}
          
          style={{left:"-4rem",top:"12rem"}}>
            <Card 
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML,CSS,Javascript,Node Express,React"}
            />
          </motion.div>
          {/* Third Card */}
          <motion.div 
          initial={{left:"25rem",top:"19rem"}}
          whileInView={{left:"12rem",top:"19rem"}}
          transition={transition}
          
          style={{left:"12rem",top:"19rem"}}>
            <Card 
            emoji={Humble}
            heading={"UI/UX Design"}
            detail={"Loem ipsum is displayed for printing"}
            />
          </motion.div>
          {/* blur2 */}
          <div className="blur s-blur-2"
          style={{background:"var(--purple)"}}
          ></div>
         </div>
    </div>
  )
}

export default Services