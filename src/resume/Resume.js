import React, { Component } from 'react';
import PageHeading from '../commons/PageHeading';
import SectionSubheading from "../commons/SectionSubheading";
import '../css/Resume.css';

class Resume extends Component {


render() {
    return (
        <div className="page-container">
            <div className="page-block">
                <PageHeading title="My Resume" icon="lnr-license"></PageHeading>
                <div className="history-container">
                    <div className="experience-container">
                        <SectionSubheading title="Experience" />
                    </div>
                    <div className="education-container">
                        <SectionSubheading title="Education" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
}

export default Resume;
