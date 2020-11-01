import React, { Component } from 'react';
import HomeContent from './HomeContent';
import AboutMe from './AboutMe';
import Resume from './resume/Resume';

class Content extends Component {
  constructor(props) {
    super(props);

   this.trackScrolling = this.trackScrolling.bind(this);
  }

  trackScrolling() {
    if (this.isScrolledIntoView(document.getElementById("resume")))
       this.props.changeView("resume");
    else if (this.isScrolledIntoView(document.getElementById("about_me")))
       this.props.changeView("about_me");
    else if (this.isScrolledIntoView(document.getElementById("home")))
       this.props.changeView("home");

  }

  isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
       //var isVisible = (elemTop == 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
 
  render () {
    return (
      <div className="content">
        <div className="page-container" onScroll={this.trackScrolling}>
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
