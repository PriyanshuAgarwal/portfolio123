import React from 'react';
import '../css/Resume.css';


const HistoryItem = (props) => { 

    return (
        <li>
            <span className="line-left"></span>
            <div className="content">
                <h4>{props.title}</h4>
                <h5>{props.short_description}</h5>
                <p className="info">
                    {props.info}
                </p>
            </div>
            <span className="year">
                <span className="to">2018</span>
                <span className="from">2016</span>
            </span>
    </li>
    );

  }
  
  export default HistoryItem;

