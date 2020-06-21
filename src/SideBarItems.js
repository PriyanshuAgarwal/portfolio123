import React, { Component } from 'react';
import './App.css';

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
    <div>Hello Content - SideBarItems</div>
  );
}
 
}

export default SideBarItems;
