import React, { Component } from 'react';
import './css/PageHeading.css';

const PageHeading = (props) => {
    
    return (
        <div className="page-heading">
            <span className="icon">
                <i className={"lnr " + props.icon}></i>
            </span>
            <h2>{props.title}</h2>
        </div>
    );
   
 
}

export default PageHeading;
