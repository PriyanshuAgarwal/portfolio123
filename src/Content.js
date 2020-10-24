import React, { Component } from 'react';
import HomeContent from './HomeContent';
import AboutMe from './AboutMe';
import Resume from './resume/Resume';
import { extend } from 'jquery';

class Content extends Component {
  constructor(props) {
    super(props);

    this.trackScrolling = this.trackScrolling.bind(this);
    this.scrollToNext = this.scrollToNext.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.trackScrolling, true);
  }

  trackScrolling(event) {
    var element = event.target;
    if (this.hasReachedBottom(element)) {
        console.log('scrolled');
        this.scrollToNext();
    }
  }
  scrollToNext() {
    var {changeView, currentViewIndex, pageCount} = this.props;
    changeView(this.getNextPageIndex(currentViewIndex, pageCount));
  }

  getNextPageIndex(currentViewIndex, pageCount) {
    var nextViewIndex = 0;
    if (currentViewIndex === pageCount)
      nextViewIndex = 0;
    else
      nextViewIndex = currentViewIndex + 1;
    return nextViewIndex;
  }

  hasReachedBottom(element) {
    return (element.scrollHeight - element.scrollTop === element.clientHeight);
  }

  render () {
    return (
      <div className="content">
        <div className={this.props.currentViewIndex === 0 ? 'h-101' : 'hidden'}>
          <div className="page-container">
            <HomeContent/>
          </div>
        </div>
        <div className={this.props.currentViewIndex === 1 ? 'h-100' : 'hidden'}>
          <div className="page-container">
            <AboutMe/>
          </div>
        </div>
        <div className={this.props.currentViewIndex === 2 ? 'h-100' : 'hidden'}>
          <div className="page-container">
            <Resume/>
          </div>
        </div>
      </div>
    )
  }

 
}

export default Content;
