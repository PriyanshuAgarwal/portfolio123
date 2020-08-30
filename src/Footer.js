import React, { Component } from 'react';
import './css/Footer.css';


class Footer extends Component {

render() {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <a target="_blank" href="https://www.facebook.com/priyanshu.agarwal.7">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
        <a target="_blank" href="https://github.com/PriyanshuAgarwal">
          <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
        <a target="_blank" href="https://linkedin.com/in/priyanshu1960">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
 
}

export default Footer;
