import React, { useState } from "react";
import './../styles/Main.css';


function Main() {
    return (
        <React.Fragment>
            <div className="scoreboard">
                <p className="best-score">Best Score:</p>
                <p className="current-score">Current Score:</p>
            </div>
        </React.Fragment>
    );
}

export default Main;