import React, { Component } from 'react';
import './App.css';

class ProfilePic extends Component {

render() {
  return (
    <div className="profile-pic-container">
        <div className="header-name">Priyanshu</div>
        <img src="profile-img.jpg"/>
    </div>
  );
}
 
}

export default ProfilePic;
