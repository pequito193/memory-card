import React, { useEffect, useState } from "react";
import { newCards, resetGame } from "./NewCards";
import './../styles/Main.css';


function Main() {

    const [unclickedCards, setCards] = useState([]);

    const [score, setScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);

    let cardArray = [];

    function handleScore() {
        setScore(score + 1);
    }

    function handleBestScore() {
        setBestScore(score);
    }

    function restartGame() {
        const newCards = newCards();
        setCards(newCards);
        for(let i = 0; i < unclickedCards.length; i++) {
            cardArray.concat(<img src={unclickedCards[i,1]} alt='card' />);
        }
        console.log(cardArray);
    }

    return (
        <React.Fragment>
            <div className="scoreboard">
                <p className="best-score">Best Score:{bestScore}</p>
                <p className="current-score">Current Score:{score}</p>
            </div>
            <button onClick={restartGame} className="restart">Restart Game</button>
            <div className="card-grid">
                {cardArray}
            </div>
        </React.Fragment>
    );
}

export default Main;