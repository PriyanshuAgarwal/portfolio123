import React, { Component } from 'react';
import HomeContent from './HomeContent';
import AboutMe from './AboutMe';
import Resume from './resume/Resume';

class Content extends Component {

  constructor(props) {
    super(props);
  }

render() {
  return (
      <div className="content">
        <div className={this.props.currentView === 'home' ? '' : 'hidden'}>
          <HomeContent/>
        </div>
        <div className={this.props.currentView === 'about' ? '' : 'hidden'}>
          <AboutMe/>
        </div>
        <div className={this.props.currentView === 'resume' ? '' : 'hidden'}>
          <Resume/>
        </div>
    </div>
  );
}
 
}

export default Content;
