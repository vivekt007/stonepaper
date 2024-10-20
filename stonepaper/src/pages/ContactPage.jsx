import React from "react";
import handGraphic from "../assets/BackgroundImages/Hand.svg";
import "../styles/ContactUs.css";
import linkedin from "../assets/Icons/Linkedin-Fill.svg";
import Youtube from "../assets/Icons/Youtube-Fill.svg";
import Facebook from "../assets/Icons/Facebook-Fill.svg";
import Instagram from "../assets/Icons/Instagram-Fill.svg";
import Twitter from "../assets/Icons/Twitter-Fill.svg";
import "../styles/variables.css";

const ContactUsPage = () => {
    return (
        <div className="contact-us-page">
            <div className="left-section">
                <h1>
                    Feel free to reach out – <br /> We're here for you.
                </h1>
                <div className="contact-img">
                    <img
                        src={handGraphic}
                        alt="Hand"
                        className="hand-graphic"
                    />
                </div>
            </div>
            <div className="right-section">
                <div className="form-container">
                    <h2>CONTACT US</h2>
                    <form>
                        <div className="name-fields">
                            <input type="text" placeholder="FIRST NAME" />
                            <input type="text" placeholder="LAST NAME" />
                        </div>
                        <div className="contact-fields">
                            <input type="email" placeholder="EMAIL ID" />
                            <input type="tel" placeholder="PHONE NUMBER" />
                        </div>
                        <textarea placeholder="MESSAGE"></textarea>
                        <button type="submit" className="submit-btn">
                            SUBMIT
                        </button>
                    </form>
                    <div className="social-icons">
                        <a href="#">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a href="#">
                            <img src={Youtube} alt="YouTube" />
                        </a>
                        <a href="#">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src={Twitter} alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
