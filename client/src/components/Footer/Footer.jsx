import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate=useNavigate();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Discover Trend Trove, your ultimate source for premium headphones. Our passion for exceptional sound drives us to curate the finest selection, 
                    catering to music lovers and gamers alike. Join us in redefining your audio experience.
                    Elevate your senses with Trend Trove.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                        123 Harmony Street,Sangeet Nagar,New Delhi, 110001,India 
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 8655 555 445</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: trendtrove@store.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title" >Categories</div>
                    <span className="text" onClick={() => navigate("/category/1")}>Headphones</span>
                    <span className="text" onClick={() => navigate("/category/2")}>Smart Watches</span>
                    <span className="text" onClick={() => navigate("/category/3")}>Bluetooth Speakers</span>
                    <span className="text" onClick={() => navigate("/category/4")}>Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    Elevate your audio experience with premium headphones and Smart Watches from Trend Trove
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;