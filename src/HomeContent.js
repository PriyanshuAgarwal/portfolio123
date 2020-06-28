import React, { Component } from 'react';
import './css/HomeContent.css';


class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "img-1.jpg",
                "img-2.jpg"
            ],
            currentImageIndex: 0,
            currentImage: "img-1.jpg" 
        };
        this.flipImage = this.flipImage.bind(this);

    }
    componentDidMount() {
        setInterval(this.flipImage, 5000);
    }

    flipImage() {
        var currentImageIndex = this.state.currentImageIndex ? 0 : 1;
        var currentImage = this.state.images[currentImageIndex]; 
        this.setState({ 
            currentImage: currentImage,
            currentImageIndex: currentImageIndex
        });    
    }
    
    /*  TODO */
    /* componentWillUnmount() { 
        clearInterval(this.state.intervalId);
      } */

    render() {
    return (
        <div className="home-content-container">
            <img src={this.state.currentImage}/>
        </div>
    );
    }
 
}

export default HomeContent;
