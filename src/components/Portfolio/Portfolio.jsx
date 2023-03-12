import React from 'react';
import "./Portfolio.css";
import {Swiper,SwiperSlide} from 'swiper/react';

import TikTik from '../../img/tik-tik.png'
import Gym from '../../img/gym-fitness.png';
import Amazone from '../../img/myAmazon.png';
import Lyriks from '../../img/Lyriks.png';
import Youtube from '../../img/YouTube.PNG'

import 'swiper/css';
import Calculator from '../../img/simple-calculator.png';
import { themContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
    
    const theme = useContext(themContext);
    const darkMode = theme.state.darkMode;
    
    

  return (
    <div className="portfolio" id="Portfolio">

        {/* Heading */}
        <span style={{color:darkMode && "white"}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Gym} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={TikTik} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Lyriks} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Amazone} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Youtube} alt="" />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio;