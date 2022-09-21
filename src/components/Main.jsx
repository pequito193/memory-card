import React, { useEffect, useState } from "react";
import { getNewCards } from "./NewCards";
import './../styles/Main.css';


function Main() {

    const [unclickedCards, setCards] = useState([]);

    const [score, setScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);

    function handleScore() {
        setScore(score + 1);
    }

    function handleBestScore() {
        setBestScore(score);
    }

    function restartGame() {
        const newCards = getNewCards();
        setCards(newCards);
        for(let i = 0; i < unclickedCards.length; i++) {
            setCards(<img src={require(`./../images/${unclickedCards[i,1]}`)} alt='card' />)
        }
        console.log(unclickedCards);
    }

    return (
        <React.Fragment>
            <div className="scoreboard">
                <p className="best-score">Best Score:{bestScore}</p>
                <p className="current-score">Current Score:{score}</p>
            </div>
            <button onClick={restartGame} className="restart">Restart Game</button>
            <div className="card-grid">
                {unclickedCards}
            </div>
        </React.Fragment>
    );
}

export default Main;