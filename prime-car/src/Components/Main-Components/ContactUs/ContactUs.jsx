import React from "react";
import './ContactUs.css';

export default function ContactUs() {
    return (
        <a name="contact-us">
            <section className="contact-us">
                <div>
                    <h2>contact us</h2>
                    <h1>CONTACT US</h1>
                    <h3>To find out more information about cars and quotes, fill out the form on the side or contact us
                        by phone.</h3>
                </div>
                <div>
                    <div className="structure">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                        <input type="number" placeholder="Phone Number"/>
                        <select>
                            <option value="-1">Country</option>
                            <option value="1">Afghanistan</option>
                            <option value="2">Algeria</option>
                            <option value="3">Argentina</option>
                            <option value="4">Belgium</option>
                            <option value="5">Belarus</option>
                            <option value="6">Canada</option>
                            <option value="7">France</option>
                            <option value="8">Moldova</option>
                            <option value="9">Romania</option>
                        </select>
                        <input className="text" type="text" placeholder="Message"/>
                    </div>
                    <input type="submit" value="Submit"/>
                </div>
            </section>
        </a>
    );
}