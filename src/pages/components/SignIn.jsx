import React from "react";
import Im1 from "../../assets/images/Im1.png";
import emailIcon from "../../assets/images/Email-icon.png"
import passwordIcon from "../../assets/images/password-Icon.png"
import hiddenIcon from "../../assets/images/hidden-Icon.png"
import showIcon from "../../assets/images/show-Icon.png"
import Facebook from "../../assets/images/Facebook.png" 
import Google from "../../assets/images/Social-media-login.png"
import phoneIcon from "../../assets/images/phone-Icon.png"
import '../styles/login.css'
import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn () {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    return (
        <div className="loginContainer">
            {/* LEFT IMAGE SECTION */}
            <div className="hero-section">
                <img src={Im1} alt="la" className="hero-image"/>
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Chuks Kitchen</h1>
                        <p>
                            Your journey to delicious, authentic Nigerian meals starts here. 
                            Sign up or log in to order your favorites today!
                        </p>
                    </div>
                </div>
            </div>

            
            {/* RIGHT FORM SECTION */}
            <div className="form-section">
                <div className="form-wrapper">
                    <header className="form-header">
                        <h2 className="brand-logo-script">Chuks Kitchen</h2>
                        <h3 className="form-title">Create your Account</h3>
                    </header>

                    <form className="login-form">
                        <div className="input-group">
                            <label>Email</label>
                            <div className="input-with-icon">
                               <span className="icon-placeholder"><img src={emailIcon} /></span>
                               <input className="email-text" type="email" placeholder="name@gmail.com" required /> 
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Phone number</label>
                            <div className="input-with-icon">
                               <span className="icon-placeholder"><img src={phoneIcon} /></span>
                               <input className="email-text" type="tel" placeholder="0800 0000 000" required /> 
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <div className="input-with-icon">
                                <span className="icon-placeholder"><img src={passwordIcon} /></span>
                                <input 
                                    className="email-text"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="******" 
                                    required
                                />
                                <button 
                                    type="button" 
                                    className="toggle-password"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <img src={showIcon} /> : <img src={hiddenIcon} />}
                                </button>
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Confirm Password</label>
                            <div className="input-with-icon">
                                <span className="icon-placeholder"><img src={passwordIcon} /></span>
                                <input 
                                    className="email-text"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="******" 
                                    required
                                />
                                <button 
                                    type="button" 
                                    className="toggle-password"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <img src={showIcon} /> : <img src={hiddenIcon} />}
                                </button>
                            </div>
                        </div>
                        {/*<a href="#" className="forgot-password">Forgot Password?</a>*/}
                        <div className="btnContainer">
                            <Link to="/login"><button className="btn1">Continue</button></Link>
                        </div>
                        <div className="divider"><p className="dividerText">Or continue with</p></div>
                        <div className="social-login">
                            <button className="btn-social">
                               <img className="googl" src={Google} alt="Google" />
                               <p>Continue with Google</p>
                            </button>
                            <button className="btn-social">
                               <img  src={Facebook} alt="Apple" />
                               <p>Continue with Apple</p>
                            </button>
                        </div>
                        <div className="foot-note">Already have an account?
                            <Link to="/login" className="foot-link"> Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
