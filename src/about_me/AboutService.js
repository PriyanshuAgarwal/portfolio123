import React, { Component } from 'react';
import '../css/AboutMe.css';
import SectionSubheading from '../SectionSubheading';

const AboutService = () => {
    
    return (
        <div className="about-service-container">
            <SectionSubheading title="Services" />
            <div className="service-list">
               <div>Web Development</div>
               <div>Web Design</div>
               <div>Responsive Design</div>
               <div>App Development</div>
            </div>
        </div>
    );
   
 
}

export default AboutService;
