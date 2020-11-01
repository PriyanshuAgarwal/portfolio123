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
  this.setView = this.setView.bind(this);
}

changeView(view) {
  this.setState({
    currentView: view
  }) 
}

setView(view) {
  window.location.href = "#" + view;
  this.changeView(view);
}

render() {
  return (
    <div className="app-container">
        <Header
          setView={this.setView}
          currentView={this.state.currentView}>
        </Header>
        <Content
          currentView={this.state.currentView}
          changeView={this.changeView}>
        </Content>
    </div>
  );
}
 
}

export default App;
