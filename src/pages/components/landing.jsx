import Im1 from "../../assets/images/Im1.png";
import Frk from "../../assets/images/Frk.png";
import Bus from "../../assets/images/Bus.png";
import { Link } from "react-router-dom";
import '../styles/landing.css'
import React from "react";

function Landing() {
    return(
        <div className="hero">
            {/* LEFT IMAGE SECTION */}
            <div className="imgContainer">
                <img src={Im1} alt="la"/>
            </div> 

            {/* RIGHT CONTENT SECTION */}
            <div className="contentsContainer">
                <div className="logoContainer">
                    <p className="chuks">Chuks Kitchen</p>
                    <div className="signInContainer">
                        <Link to="/Login" className="signIn">Sign In</Link>
                    </div>  
                </div>
                <div className="heroFrame">
                    <div className="heroContainer">
                        <h1 className="heroH1">Your Authentic Taste of Nigeria</h1>
                        <p className="heroP">Experience homemade flavors delivered fresh to your desk or home.
                            We <br></br>bring the rich culinary heritage of Nigeria right to your doorstep.
                        </p>
                    </div>
                    <div className="features">
                        <div className="feature">
                            <span className="icon"><img src={Frk} /></span>
                            <div className="featureText">Freshly Prepared</div>
                        </div>
                        <div className="feature">
                            <span className="icon"><img src={Frk} /></span>
                            <div className="featureText">Support Local Business</div>
                        </div>
                        <div className="feature">
                            <span className="icon"><img src={Bus} /></span>
                            <div className="featureText">Fast & Reliable Delivery</div>
                        </div>
                    </div>
                    <div className="btnContainer">
                        <button className="btn1">Sign In</button>
                        <button className="btn2"><span className="btn2Text">Learn More About Us</span></button>
                    </div>
                    
                </div>
                <div className="ctpContainer">
                        <hr></hr>
                        <div className="tpContainer">
                            <p className="copyrightlanding">© 2024 Chuks Kitchen.</p>
                            <div className="tpContainer">
                                <a className="pP" href="#">Privacy Policy</a>
                                <a className="tS" href="#">Terms of Service</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Landing;