import React from 'react';
import './Experience.css';

const Experience = () => {

  return (
    <div className="experience" id="Experience">
        <div className="achievement">
            <div className="circle" style={{color:"var(--black)"}}>0</div>
            <span>years</span>
            <span>Experience</span>
        </div>

        <div className="achievement">
            <div className="circle" style={{color:"var(--black)"}}>10+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>

        <div className="achievement">
            <div className="circle" style={{color:"var(--black)"}}>0</div>
            <span>companies</span>
            <span>work</span>
        </div>
        
    </div>
  )
}

export default Experience