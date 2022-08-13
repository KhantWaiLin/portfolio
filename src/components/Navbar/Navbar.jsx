import React from 'react'
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
        <div className="n-left">
            <div className="n-name">Kelly</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>
                       <Link spy={true} smooth={true} to='Navbar' activeClass='activeClass'>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link spy={true} smooth={true} to="Services" activeClass='activeClass'>
                        Services
                        </Link>
                    </li>
                    <li>
                       <Link spy={true} smooth={true} to='Experience' activeClass='activeClass'>
                        Experience
                        </Link>
                    </li>
                    <li>    
                        <Link spy={true} smooth={true} to='Portfolio' activeClass='activeClass'>
                         Portfolio
                        </Link>
                     </li>
                    <li>
                        <Link spy={true} smooth={true} to='Testimonials' activeClass='activeClass'>
                        Testimonials
                        </Link>
                    </li>
                
                </ul>
            </div>
            <button className="button n-button">
               <Link spy={true} smooth={true} to='Contact' activeClass='activeClass'>
                    Contact
               </Link>
            </button>
        </div>
    </div>
  )
}

export default Navbar