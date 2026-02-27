import React from "react";
import upArrow from "../../assets/images/Uparrow.png";
import '../styles/footer.css'


function Footer() {
  return (
    <footer>
        <div className="footerFrame">
            <div className="footerFrame1">
                <p className="footerChuks">Chuks Kitchen</p>
                <p className="chuksP">Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
            </div>
            <div className="rrrr">
                <div className="footerFrame2">
                    <div className="quickLink"><h4>Quick Links</h4></div>
                    <p className="frame2P">Home</p>
                    <p className="frame2P">Explore</p>
                    <p className="frame2P">My Order</p>
                    <p className="frame2P">Account</p>
                    <p className="frame2P">Contact</p>
                </div>
                <div className="footerFrame3">
                    <h4>Contact Us</h4>
                    <p className="frame3P">+234 801 234 5678</p>
                    <p className="frame3P">hello@chukskitchen.com</p>
                    <p className="frame3P">123 Taste Blvd, Lagos, Nigeriat</p>
                </div>
                <div className="footerFrame4">
                    <p className="frame4P">Facebook</p>
                    <p className="frame4P">Twitter</p>
                    <p className="frame4P">Linkedin</p>
                    <p className="frame4P">Instagram</p>
                </div>
            </div>
            
        </div>
      
        <div className="copyrightContainer">
            <div className="copyrightFrame">
                <p className="copyright">&copy; {new Date().getFullYear()} Lift Media. All rights reserved..</p>
                <img src={upArrow}/>
            </div>
        </div>
        
    </footer>
  );
}


export default Footer;