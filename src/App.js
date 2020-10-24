import React, { Component } from 'react';
import './css/App.css';
import './css/Styles.css';
import $ from 'jquery';
import Header from './Header';
import Content from './Content';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    currentViewIndex: 0,
    currentView: "home",
    pageList: ["home", "about", "resume"]
  }

  this.changeView = this.changeView.bind(this);
}

changeView(index) {
  var pageList = this.state.pageList;
  this.setState({
    currentView: pageList[index],
    currentViewIndex: index
  })
}

render() {
  return (
    <div className="app-container">
        <Header changeView = {this.changeView}></Header>
        <Content currentView={this.state.currentView}></Content>
    </div>
  );
}
 
}

export default App;
