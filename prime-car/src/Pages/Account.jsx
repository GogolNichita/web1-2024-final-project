import React from "react";
import NavBar from "../Components/Layout-Components/NavBar/NavBar";
import Footer from "../Components/Layout-Components/Footer/Footer";
import SignIn from "../Components/Accout-Components/SignIn/SignIn";

export default function Account(isLoggin) {
    return (
        <div className="background">
            {
                !isLoggin &&<NavBar account={true}/>
            }
            {
               isLoggin && <SignIn/>
            }
            <Footer/>
        </div>
    );
}