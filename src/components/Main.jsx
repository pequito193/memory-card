import React, { useState } from "react";
import { cardsAvailableArray } from "./CardsAvailable";
import './../styles/Main.css';


function Main() {

    const shuffledCards = cardsAvailableArray.sort(() => 0.5 - Math.random());

    const cardsToUse = shuffledCards.slice(0,16);

    const [unclickedCards, setCards] = useState(cardsToUse);

    

    console.log();

    return (
        <React.Fragment>
            <div className="scoreboard">
                <p className="best-score">Best Score:</p>
                <p className="current-score">Current Score:</p>
                <div className="card-grid"></div>
            </div>
        </React.Fragment>
    );
}

export default Main;