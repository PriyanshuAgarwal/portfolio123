import React, { Component } from 'react';
import './css/AboutMe.css';
import PageHeading from './commons/PageHeading';
import AboutInfo from './about_me/AboutInfo';
import AboutService from './about_me/AboutService';


class AboutMe extends Component {

    render() {
        return (
            <div className="page-block">
                <PageHeading title="About Me" icon="lnr-user"></PageHeading>
                <AboutInfo></AboutInfo>
                <AboutService></AboutService>
            </div>
        );
    }
 
}

export default AboutMe;
