import React, { Component } from 'react';
import './css/AboutMe.css';
import PageHeading from './about_me/PageHeading';
import AboutInfo from './about_me/AboutInfo';


class AboutMe extends Component {

    render() {
        return (
            <div className="page-container">
                <div className="page-block">
                    <PageHeading title="About Me" icon="lnr-user"></PageHeading>
                    <AboutInfo></AboutInfo>    
                </div>
            </div>
        );
    }
 
}

export default AboutMe;
