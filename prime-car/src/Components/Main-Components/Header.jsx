import React from "react";
import NavBar from "../Layout-Components/NavBar";
import "./Header.css";

export default function (){
    return(
      <div className="header">
            <NavBar account={false}/>
      </div>
    );
}