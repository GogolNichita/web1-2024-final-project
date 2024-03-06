import React from "react";
import Footer from "../Components/Layout-Components/Footer/Footer";
import Header from "../Components/Main-Components/Header/Header";
import AboutUs from "../Components/Main-Components/AboutUs/AboutUs";
import Benefits from "../Components/Main-Components/Benefits/Benefits";

export default function MainPage() {
    return (
        <>
            <Header/>
            <AboutUs/>
            <Benefits/>
            <Footer/>
        </>
    );
}