import React, { Component } from 'react';
import '../css/AboutMe.css';



class AboutInfo extends Component {

    render() {
        return (
                <div className="about-info-container">
                    <div className="about-details">
                        <h3 className="mb-20">UI/UX Designer & Developer</h3>
                        <p>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum</p>

                        <p>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur? </p>
                        <div className="signature mt-20">
                            <img src="signature-white.png"></img>
                        </div>
                    </div>
                    <div className="about-personal-details">
                        <h3 className="mb-20">Personal Information</h3>
                        <ul>
                            <li>
                                <span className="title">Name </span>
                                <span className="value"> Priyanshu Agarwal</span>
                            </li>
                            <li>
                                <span className="title">Age </span>
                                <span className="value"> 27 years</span>
                            </li>
                            <li>
                                <span className="title">Residence </span>
                                <span className="value">Hyderabad, India</span>
                            </li>
                            <li>
                                <span className="title">Email </span>
                                <span className="value">priyanshuag.iet@gmail.com</span>
                            </li>
                            <li>
                                <span className="title">Phone </span>
                                <span className="value">(+91) 8755191368</span>
                            </li>
                            <li>
                                <span className="title">Freelance </span>
                                <span className="value">Available</span>
                            </li>
                        </ul>
                        <div className="resume-btn mt-30">
                            <div className="btn-main">
                                Download Resume
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
 
}

export default AboutInfo;
