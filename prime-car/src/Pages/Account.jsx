import React from "react";
import NavBar from "../Components/Layout-Components/NavBar/NavBar";
import SignIn from "./SignIn/SignIn";

export default function Account(isLoggin) {
    return (
        <div className="background">
            {
                !isLoggin &&<NavBar account={true}/>
            }
            {
               isLoggin && <SignIn/>
            }
        </div>
    );
}