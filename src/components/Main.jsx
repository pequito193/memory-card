import React, { useEffect, useState } from "react";
import { loadNewCards } from "./LoadNewCards";
import './../styles/Main.css';


function Main() {

    const [unclickedCards, setCards] = useState([]);

    const [score, setScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);

    function handleScore() {
        setScore(score + 1);
    }

    if (score > bestScore) {
        setBestScore(score);
    }

    function restartGame() {
        const newCards = loadNewCards();
        setCards(newCards);
        setScore(0);
    }

    const cardsToDisplay = [];
    for (let i = 0; i < unclickedCards.length; i++) {
        cardsToDisplay.push(<img src={require(`./../images/${unclickedCards[i]}`)} className='card' key={unclickedCards[i]} alt='card' />)
    }

    return (
        <React.Fragment>
            <div className="scoreboard">
                <p className="best-score">Best Score: {bestScore}</p>
                <p className="current-score">Current Score: {score}</p>
            </div>
            <button onClick={restartGame} className="restart">Restart Game</button>
            <div className="card-grid">
                {cardsToDisplay}
            </div>
        </React.Fragment>
    );
}

export default Main;