import React, { Component } from 'react';
import ProfilePic from './ProfilePic';
import SideBarItems from './SideBarItems';
import Footer from './Footer';

class Header extends Component {

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
    <div className="header">
  
        <ProfilePic></ProfilePic>

        <div className="sidebar-items">
            <SideBarItems></SideBarItems>
        </div>
        <div className="footer">
            <Footer></Footer>
        </div>
       
    </div>
  );
}
 
}

export default Header;
