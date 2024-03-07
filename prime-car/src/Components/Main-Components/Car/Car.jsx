import React from "react";
import "./Car.css"
import Car1 from "../../../assets/img/Car1.png";
import Car2 from "../../../assets/img/Car2.png";
import Car3 from "../../../assets/img/Car3.png";
import Car4 from "../../../assets/img/Car4.png";
import Car5 from "../../../assets/img/Car5.png";
import Car6 from "../../../assets/img/Car6.png";
import Car7 from "../../../assets/img/Car7.png";
import Car8 from "../../../assets/img/Car8.png";
import Car9 from "../../../assets/img/Car9.png";


export default function Car(){
    return(
        <section class="cars">
            <h1>The cars that are hot right now</h1>
            <p>Buy yours and be the most stylish in the neighborhood</p>
            <div class="structure2">
                <img src={Car1} alt=""/>
                    <img src={Car2} alt=""/>
                        <img src={Car3} alt=""/>
                            <img src={Car4} alt=""/>
            </div>
            <div class="structure2">
                <img src={Car5} alt=""/>
                    <img src={Car6} alt=""/>
                        <img src={Car7} alt=""/>
                            <img src={Car8} alt=""/>
                                <img src={Car9} alt=""/>

            </div>
        </section>
);
}