import React, { useContext } from 'react'
import './Intro.css';
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import LightBulbOff from '../../img/LightBulbOff.jpg'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import LightBulb from '../../img/lightBulb.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesEmoji from '../../img/glassesimoji.png'

import { themContext } from '../../Context';
import {motion} from 'framer-motion';


const Intro = () => {
  
  const mobile = window.innerWidth<= 480? true : false;
  const transition = {duration: 2,type:"spring"};
  const theme = useContext(themContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
           <div className="i-name">
            <motion.img
            initial={{left:"5%"}}
            whileInView={{left:"-15%"}}
            transition={transition}

            className='i-left-img' src={glassesEmoji} alt="" />
             <span style={{color: darkMode && "white"}}>Hi! I Am</span>
             <span>Kelly</span>
             <span>MERN stack beginner and react frontend
                developer , producting best quality
                work ,trying to make my dream come true as 
                a web developer.
             </span>
           </div>
           <button className='button i-button'>Hire Me</button>
           <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
           </div>
        </div>
        <div className="i-right">
            <img className='i-img' src={darkMode?LightBulb: LightBulbOff} alt="" />
           
            <motion.div
            initial={{top:"6%",left:"-5%"}}
            whileInView={{top:"-4%",left:mobile ? "20%":"-15%"}}
            transition={transition}

            className="floating-div"

            style={{position:"absolute" ,top:"-4%",left:"-15%"}}>
                <FloatingDiv  image={Crown} txt1='Wev' txt2='Developer'/>
            </motion.div>
            <motion.div 
             initial={{left:"-15%",bottom:"15%"}} 
             whileInView={{bottom: mobile? "40%": "15%",left: mobile? "5%": "0%"}} 
             transition={transition}
             
             className="floating-div"
            style={{bottom:"15%"}}>
                <FloatingDiv  image={thumbup} txt1='Give You' 
                txt2='best Quality' />
            </motion.div>
          </div>
          {/* blurDiv */}
          <div className="blur" 
          style={{background:"#C1F5FF",
            top: "17rem",
            width:"21rem",
            height:"11rem",
            left: "-9rem"}}></div>
      
    </div>
  )
}

export default Intro