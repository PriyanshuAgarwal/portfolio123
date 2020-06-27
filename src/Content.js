import React, { Component } from 'react';
import HomeContent from './HomeContent';

class Content extends Component {

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
    <div className="content">
      <HomeContent></HomeContent>
    </div>
  );
}
 
}

export default Content;
