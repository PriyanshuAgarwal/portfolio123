import React, { Component } from 'react';
import HomeContent from './HomeContent';
import AboutMe from './AboutMe';
import Resume from './resume/Resume';

const Content = (props) => {

  return (
      <div className="content">
        <div className={props.currentView === 'home' ? 'h-100' : 'hidden'}>
          <HomeContent/>
        </div>
        <div className={props.currentView === 'about' ? 'h-100' : 'hidden'}>
          <AboutMe/>
        </div>
        <div className={props.currentView === 'resume' ? 'h-100' : 'hidden'}>
          <Resume/>
        </div>
    </div>
  );
 
}

export default Content;
