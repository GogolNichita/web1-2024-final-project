import React from "react";
import NavBar from "../Layout-Components/NavBar";
import "./Header.css";

export default function (){
    return(
        <div className="header">
            <NavBar account={false}/>
            <div className="headerText">
                <h1>
                    More economy, same speed
                </h1>
                <h3>The most beloved cars of the moment for those who want to ride in style without spending too
                    much</h3>
                <button><a href="#cars"> Discover <img src="img/Vector.svg" alt=""/></a></button>
            </div>
        </div>
    );
}