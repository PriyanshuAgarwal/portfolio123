import React, { Component } from 'react';
import HomeContent from './HomeContent';
import AboutMe from './AboutMe';
import Resume from './resume/Resume';

class Content extends Component {
  constructor(props) {
    super(props);

   this.trackScrolling = this.trackScrolling.bind(this);
  }

  trackScrolling(event) {
    var element = event.target;
    // TODO track scrolling
  }
 
  render () {
    return (
      <div className="content">
        <div className="page-container">
          <div id="home" className="h-100">
              <HomeContent/>
          </div>
          <div id="about_me">
              <AboutMe/>
          </div>
          <div id="resume">
              <Resume/>
          </div>
        </div>
      </div>
    )
  }

 
}

export default Content;
