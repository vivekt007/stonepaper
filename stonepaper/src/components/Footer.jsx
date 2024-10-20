import React from "react";
import "../styles/Footer.css";
import WhiteLogo from "../assets/Logo/stonepaperWhiteLogo.svg";
import Facebook from "../assets/Icons/Icon-Facebook.svg";
import Twitter from "../assets/Icons/Icon-Twitter.svg";
import Instagram from "../assets/Icons/icon-instagram.svg";
import Linkedin from "../assets/Icons/Icon-Linkedin.svg";
import Mail from "../assets/Icons/mail.svg";
import Location from "../assets/Icons/Navigation.svg";
import Phone from "../assets/Icons/Phone.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-row1">
                <div className="footer-r1-col1">
                    <div className="footer-r1-c1-row1">
                        <h3>About Stone Paper</h3>
                    </div>
                    <div className="footer-r1-c1-row2">
                        <p>
                            Premium cotton clothing with a purpose. Every
                            purchase is a step towards a more sustainable
                            future.
                        </p>
                    </div>
                    <div className="footer-r1-c1-row3">
                        <h4>Follow Us</h4>
                        <div className="socials">
                            <a href="#">
                                <img src={Facebook} alt="Facebook icon" />
                            </a>
                            <a href="#">
                                <img src={Twitter} alt="Facebook icon" />
                            </a>
                            <a href="#">
                                <img src={Instagram} alt="Facebook icon" />
                            </a>
                            <a href="#">
                                <img src={Linkedin} alt="Facebook icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-r1-col2">
                    <div className="footer-r1-c2-col1">
                        <h3>Navigation</h3>
                        <div className="nav-links">
                            <a href="#">Home</a>
                            <a href="#">About Us</a>
                            <a href="#">Membership</a>
                        </div>
                    </div>
                    <div className="footer-r1-c2-col2">
                        <h3>Contact Us</h3>
                        <div className="contact-links">
                            <a href="#">
                                <img src={Mail} alt="Mail icon" />
                                stonepaper@gmail.com
                            </a>

                            <a href="#">
                                <img src={Phone} alt="Phone icon" />
                                8975 432 012
                            </a>

                            <a href="#">
                                <img src={Location} alt="Location icon" />
                                Bengaluru, Karnataka
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-row2">
                <div className="footer-r2-col1">
                    <p>© 2024 StonePaper. All rights reserved.</p>
                </div>
                <div className="footer-r2-col2">
                    <img src={WhiteLogo} alt="Logo" />
                </div>
                <div className="footer-r2-col3">
                    <a href="#">
                        <p>Privacy policy</p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
