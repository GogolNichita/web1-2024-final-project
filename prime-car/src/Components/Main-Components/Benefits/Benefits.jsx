import React from "react";
import "./Benefits.css";
import Map from "../../../assets/img/MAP.png";
import Calendar from "../../../assets/img/CALENDAR.png";
import Key from "../../../assets/img/KEY.png";
import CircleLine1 from "../../../assets/img/Line1.svg";
// import CircleLine2 from "../../../assets/img/Line2.svg";

export default function Benefits(){
    return(
            <a name="benefits">
            <section className="benefits">
                <img id="circle-line" src={CircleLine1} alt=""/>
                <div className="structure">
                    <h1>All the benefits you will get when you shop with us</h1>
                    <h3>Take advantage of everything you can have now by buying your new car at Prime Car</h3>
                </div>
                <div className="structure2">
                    <div className="card green">
                        <img src={Map} alt=""/>
                        <h2>Several Headquarters</h2>
                        <p>You can find several Prime Car stores around the United States!</p>
                        <a href="#map">Find the store closest to you now</a>
                    </div>
                    <div className="card red">
                        <img src={Calendar} alt=""/>
                        <h2>Schedule Your Best Day</h2>
                        <p>Choose the day and time to take a test drive for free!</p>
                    </div>
                    <div className="card blue">
                        <img src={Key} alt=""/>
                        <h2>Receive your car right away</h2>
                        <p>Close the contract and you get the keys right away</p>
                    </div>
                </div>
                {/*<img id="circle-line2" src={CircleLine2} alt=""/>*/}
            </section>
            </a>
    );
}