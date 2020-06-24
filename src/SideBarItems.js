import React, { Component } from 'react';
import './css/Navbar.css'

class SideBarItems extends Component {

 /* renderIcons() {
    return _.map(this.state.models, (model) => {
      return (<SidebarIcon
        onChange={this.changeView}
        modelName={model.name}
        icon={model.icon}
        isActive={this.state.activeView === model.name} 
      />)
    })
  } */

render() {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <div className="menu-item">
              <i class="lnr lnr-home" aria-hidden="true"></i>
              <span className="menu-label">Home</span>
          </div>
        </li>
        <li>
          <div className="menu-item">
              <i class="lnr lnr-user" aria-hidden="true"></i>
              <span className="menu-label">About Me</span>
          </div>
        </li>
        <li>
          <div className="menu-item">
              <i class="lnr lnr-license" aria-hidden="true"></i>
              <span className="menu-label">Resume</span>
          </div>
        </li>
        <li>
          <div className="menu-item">
              <i class="lnr lnr-briefcase" aria-hidden="true"></i>
              <span className="menu-label">Projects</span>
          </div>
        </li>
        <li>
          <div className="menu-item">
              <i class="lnr lnr-envelope" aria-hidden="true"></i>
              <span className="menu-label">Contact</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
 
}

export default SideBarItems;
