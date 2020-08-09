import React, { Component } from 'react';
import '../css/Resume.css';


const HistoryItem = (props) => { 

    return (
        <li>
            <div class="content">
                <h4>{props.title}</h4>
                <h5>{props.short_description}</h5>
                <p class="info">
                    {props.info}
                </p>
            </div>
    </li>
    );

  }
  
  export default HistoryItem;

