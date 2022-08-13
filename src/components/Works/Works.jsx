import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png';
import Facebook from '../../img/Facebook.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import { themContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';

const Works = () => {
    const transition = {duration: 3.5,type:"spring"};
    const theme = useContext(themContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="works">
         {/* left side */}
        <div className="awesome">
           <span style={{color: darkMode && "white"}}>For the </span>
           <span>Future Purposes</span>
           <span>
            I want to work with your team for more experience and I hope
            <br/>
            I learn something from other senior.
           <br/>
            On the right is just the beauty of website and some effect to
            look good.
            <br />
            Loem ipsum is widely used from diplay purpose.
           </span>
           <button className='button s-button'>Hire me</button>

           {/* Blur div 1 */}
           <div className="blur s-blur-1"
           style={{background:"#ABF1FF94"}}></div>
         </div>
         
         {/* Right Side */}
         <div className="w-right">
            <motion.div 
            initial={{rotate:45}}
            whileInView={{rotate: 0}}
            viewport={{ margin: "-40px" }}
            transition={transition}

            className="main-circle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            
            </motion.div>
             {/* back Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>

           

         </div>


    </div>
  )
}

export default Works