import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
    return (
        <>
            <nav>
                <span>PRIME CAR</span>
                <ul className="navbutton">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#about-us">About</a>
                    </li>
                    <li>
                        <a href="#benefits">Benefits</a>
                    </li>
                    <li>
                        <a href="#cars">Cars</a>
                    </li>
                </ul>
                <ul className="button">
                    <li>
                        <a href="#contact-us">Contact Us</a>
                    </li>
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}