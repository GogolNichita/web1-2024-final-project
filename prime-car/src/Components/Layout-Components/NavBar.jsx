import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

export default function NavBar({account}) {
    return (
        <>
            <nav>
                <ul className="logo">
                    <li>
                        <Link to="/">PRIME CAR</Link>
                    </li>
                </ul>
                {
                   !account && <ul className="navbutton">
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
                }
                {
                    !account && <ul className="button">
                    <li>
                        <a href="#contact-us">Contact Us</a>
                    </li>
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                </ul>
                }
            </nav>
        </>
    );
}