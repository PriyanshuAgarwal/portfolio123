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
        <li>
          <div className="menu-item" onClick={() => this.props.changeView("home")}>
              <i className="lnr lnr-home" aria-hidden="true"></i>
              <span className="menu-label">Home</span>
          </div>
        </li>
        <li>
          <div className="menu-item" onClick={() => this.props.changeView("about")}>
              <i className="lnr lnr-user" aria-hidden="true"></i>
              <span className="menu-label">About Me</span>
          </div>
        </li>
        <li>
          <div className="menu-item" onClick={() => this.props.changeView("resume")}>
              <i className="lnr lnr-license" aria-hidden="true"></i>
              <span className="menu-label">Resume</span>
          </div>
        </li>
        <li>
          <div className="menu-item" onClick={() => this.props.changeView("project")}>
              <i className="lnr lnr-briefcase" aria-hidden="true"></i>
              <span className="menu-label">Projects</span>
          </div>
        </li>
        <li>
          <div className="menu-item" onClick={() => this.props.changeView("contact")}>
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
