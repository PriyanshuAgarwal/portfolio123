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
    currentView: "home"
  }

  this.changeView = this.changeView.bind(this);
}

changeView(view) {
  window.location.href = "#" + view; 
  this.setState({
    currentView: view
  }) 
}

render() {
  return (
    <div className="app-container">
        <Header
          changeView = {this.changeView}
          currentView={this.state.currentView}>
        </Header>
        <Content
          currentView={this.state.currentView}
          currentViewIndex={this.state.currentViewIndex}
          changeView = {this.changeView}
          //pageCount={this.state.pageList.length}>
          pageCount={2}>
        </Content>
    </div>
  );
}
 
}

export default App;
