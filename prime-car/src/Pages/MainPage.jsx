import React from "react";
import Footer from "../Components/Layout-Components/Footer/Footer";
import Header from "../Components/Main-Components/Header/Header";
import AboutUs from "../Components/Main-Components/AboutUs/AboutUs";
import Benefits from "../Components/Main-Components/Benefits/Benefits";
import Car from "../Components/Main-Components/Car/Car";
import Amazed from "../Components/Main-Components/Amazed/Amazed";
import ContactUs from "../Components/Main-Components/ContactUs/ContactUs";

export default function MainPage() {
    return (
        <>
            <Header/>
            <AboutUs/>
            <Benefits/>
            <Car/>
            <Amazed/>
            <ContactUs/>
            <Footer/>
        </>
    );
}