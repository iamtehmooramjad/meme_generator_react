import React from "react";
import logo from "../images/logo.png"

export default function Header(){
    return(
        <header className="header--container">
            <img src={logo} alt="Troll Face" className="header--logo"/>
            <h3 className="header--title">Meme Generator</h3>
            <h4 className="header--text">React Course - Project 3</h4>
        </header>
    )
}