import React from 'react';
import '../css/Resume.css';


const SkillItem = (props) => { 

    return (
        <div className="skill-item">
            <h4 className="progress-title"></h4>
            <div className="progress">
                <div className="progress-bar" data-progress-value="91" style={{width: "91%"}}>
                    <div className="progress-value">91%</div>
                </div>
            </div>
        </div>
    );

  }
  
  export default SkillItem;

