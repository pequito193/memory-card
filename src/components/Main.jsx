import React, { useState } from "react";
import { loadNewCards } from "./LoadNewCards";
import CardDisplay from "./CardDisplay";
import './../styles/Main.css';


function Main() {

    const [unclickedCards, setUnclickedCards] = useState([]);

    const [clickedCards, setClickedCards] = useState([0]);

    const [score, setScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);

    function gameLogic(e) {
        if (clickedCards.includes(e.target.key)) {
            restartGame();
            return;
        }
        setScore(score + 1);

    }

    if (score > bestScore) {
        setBestScore(score);
    }

    function restartGame() {
        const newCards = loadNewCards();
        setUnclickedCards(newCards);
        setClickedCards([]);
        setScore(0);
    }

    return (
        <React.Fragment>
            <div className="scoreboard">
                <p className="best-score">Best Score: {bestScore}</p>
                <p className="current-score">Current Score: {score}</p>
            </div>
            <button onClick={restartGame} className="restart">Restart Game</button>
            <div className="card-display">
                <CardDisplay unclickedCards={unclickedCards} />
            </div>
        </React.Fragment>
    );
}

export default Main;