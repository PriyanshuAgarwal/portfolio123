import React, { Component } from 'react';
import './css/Footer.css';


class Footer extends Component {

render() {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <a href="#">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
 
}

export default Footer;
