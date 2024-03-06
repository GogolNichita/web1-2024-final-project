import React from "react";
import NavBar from "../Components/Layout-Components/NavBar";
import Footer from "../Components/Layout-Components/Footer";

export default function Account() {
    return (
      <div className="background">
          <NavBar account={true}/>
          <h2>ACCOUNT</h2>
          <Footer/>
      </div>
    );
}