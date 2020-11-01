import React, { Component } from 'react';
import './css/Navbar.css'

class SideBarItems extends Component {

  constructor(props) {
    super(props);
  }

render() {
  return (
    <div className="navbar-container">
      <ul>
        <li onClick={() => this.props.changeView("home")}>
          <div className={"menu-item " + (this.props.currentView === 'home' ? "menu-item-active": "")}>
              <i className="lnr lnr-home" aria-hidden="true"></i>
              <span className="menu-label">Home</span>
          </div>
        </li>
        <li onClick={() => this.props.changeView("about_me")}>
          <div className={"menu-item " + (this.props.currentView === 'about_me' ? "menu-item-active": "")}>
              <i className="lnr lnr-user" aria-hidden="true"></i>
              <span className="menu-label">About Me</span>
          </div>
        </li>
        <li onClick={() => this.props.changeView("resume")}>
          <div className={"menu-item " + (this.props.currentView === 'resume' ? "menu-item-active": "")}>
              <i className="lnr lnr-license" aria-hidden="true"></i>
              <span className="menu-label">Resume</span>
          </div>
        </li>
        <li onClick={() => this.props.changeView(3)}>
          <div className={"menu-item " + (this.props.currentView === 3 ? "menu-item-active": "")}>
              <i className="lnr lnr-briefcase" aria-hidden="true"></i>
              <span className="menu-label">Projects</span>
          </div>
        </li>
        <li onClick={() => this.props.changeView(4)}>
          <div className={"menu-item " + (this.props.currentView === 4 ? "menu-item-active": "")}>
              <i className="lnr lnr-envelope" aria-hidden="true"></i>
              <span className="menu-label">Contact</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
 
}

export default SideBarItems;
