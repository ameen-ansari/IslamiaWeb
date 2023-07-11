import React from "react";
import style from "./Footer.module.css";
import google from "../../images/Google+.png";
import ins from "../../images/Instagram.png";
import fb from "../../images/Facebook.png";
import twi from "../../images/Twitter.png";
import logo from "../../images/logo.webp";


function Footer() {
    return (
        <div className={style.parent}>
            <div>
                <img src={logo} alt="" />
                <p style={{ fontSize: 14 }}>
                    Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu
                    rhoncus augue. Fusce vel metus pharetra, fermentum
                </p>
                <div>
                    <img className="cursor-pointer" src={google} alt="" />
                    <img className="cursor-pointer" src={fb} alt="" />
                    <img className="cursor-pointer" src={twi} alt="" />
                    <img className="cursor-pointer" src={ins} alt="" />
                </div>
            </div>

            <div>
                <p>Islamia Links</p>
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">About Us</p>
                <p className="cursor-pointer">Blog</p>
                <p className="cursor-pointer">Courses</p>
                <p className="cursor-pointer">Contact Us</p>
            </div>
            <div>
                <p>Contact Us</p>
                <p className="cursor-pointer">+923091755617</p>
                <p className="cursor-pointer">ameen55668@gmail.com</p>
                <p className="cursor-pointer">Address goes here</p>
                <p className="cursor-pointer">Download Our App</p>
            </div>
            <div>
                <p>Islamia Instagram</p>
                <div>
                    <div></div>
                    <div className="flex justify-center align-middle text-white text-[40px]">+</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={style.FooterDivs}>
                <div>
                    <p>Islamia Links</p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Courses</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <p>Contact Us</p>
                    <p>+923091755617</p>
                    <p>ameen55668@gmail.com</p>
                    <p>Address goes here</p>
                    <p>Download Our App</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;