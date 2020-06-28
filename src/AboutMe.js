import React, { Component } from 'react';
import './css/AboutMe.css';
import PageHeading from './PageHeading';


class AboutMe extends Component {

    render() {
        return (
            <div className="page-container">
                <div className="page-block">
                    <PageHeading title="About Me test " icon="lnr-user"></PageHeading>      
                </div>
                
            </div>
        );
    }
 
}

export default AboutMe;
