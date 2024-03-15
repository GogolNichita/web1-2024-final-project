import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from "./Pages/MainPage";
import SignIn from "./Components/Accout-Components/SignIn/SignIn";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Account from "./Pages/Account";
import SignUp from "./Components/Accout-Components/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/account",
        element: <Account isLoggin={false}/>,
    },
    {
        path: "/signIn",
        element: <SignIn/>,
    },
    {
        path: "/signUp",
        element: <SignUp/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
