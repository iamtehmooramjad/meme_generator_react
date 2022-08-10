import React from "react";
import logo from "../images/logo.png"

export default function Header(){
    return(
        <header>
            <img src={logo} alt="Troll Face" className="header--logo"/>
        </header>
    )
}