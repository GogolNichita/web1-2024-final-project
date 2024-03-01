import React from "react";
import NavBar from "../Components/Layout-Components/NavBar";
import Footer from "../Components/Layout-Components/Footer";

export default function MainPage() {
    return (
        <>
            <NavBar account={false}/>
            <h2>MAIN PAGE</h2>
            <Footer/>
        </>
    );
}