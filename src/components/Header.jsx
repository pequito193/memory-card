import React from "react";
import './../styles/Header.css';


function Header() {
    return (
        <React.Fragment>
            <div className="header">
                <h1 className="header-title">Memory Card</h1>
                <p className="header-description">Try to click as many individual cards as you can without hitting repeats, but remember, each time a card is clicked, they all shuffle!</p>
            </div>
        </React.Fragment>
    );
}

export default Header;