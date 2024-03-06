import React from "react";
import "./AboutUS.css";
import AboutPhoto from "../../../assets/img/CarAB.png";

export default function AboutUs(){
    return (
        <a name="about-us">
        <section className="about-us">
            <h1>ABOUT US</h1>
            <div className="structure">
                <div>
                    <p>We pride ourselves at being able to get our customer into the car that they want, and more importantly, at they price they are looking for.</p>

                    <p>We maintain outstanding customer service by listening to our customers and making sure that we meet their needs. Even if you don't buy from us, we will offer free advice on whe to look for when buying a used car or truck.</p>

                    <p>Our philosophy is to accomodate you, the customer, with outstanding service while providing you the highest quality automobile needs at wholesale prices. We have a wide selection of vehicles and the expertise to deal with what you are looking for.</p>
                </div>
                <img src={AboutPhoto} alt="Car"/>
                <h2>about us</h2>
            </div>
        </section>
        </a>
    );
}