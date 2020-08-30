import React, { Component } from 'react';
import './css/App.css';
import './css/Styles.css';
import Header from './Header';
import Content from './Content';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    currentView: "home"
  }

  this.changeView = this.changeView.bind(this);
}

changeView(view) {
  this.setState({currentView: view})
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
