import React, { Component } from 'react';
import '../css/AboutMe.css';
import SectionSubheading from '../SectionSubheading';

const AboutService = () => {
    
    return (
        <div className="about-service-container">
            <SectionSubheading title="Services" />
            <div className="service-list">
               <div className="service-item">
                  <div className="icon">
                    <i class="lnr lnr-laptop"></i>
                  </div>
                  <h4>Web Development</h4>
                  <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                </div>
                <div className="service-item">
                  <div className="icon">
                    <i class="lnr lnr-eye"></i>
                  </div>
                  <h4>Web Design</h4>
                  <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                </div>
                <div className="service-item">
                  <div className="icon">
                    <i class="lnr lnr-laptop-phone"></i>
                  </div>
                  <h4>Responsive Design</h4>
                  <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                </div>
                <div className="service-item">
                  <div className="icon">
                    <i class="lnr lnr-camera"></i>
                  </div>
                  <h4>App Development</h4>
                  <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                </div>
            </div>
        </div>
    );
   
 
}

export default AboutService;
