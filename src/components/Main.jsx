import React, { useEffect, useState } from "react";
import { loadNewCards } from "./LoadNewCards";
import CardDisplay from "./CardDisplay";
import './../styles/Main.css';


function Main() {

    const [unclickedCards, setUnclickedCards] = useState([]);

    const [clickedCards, setClickedCards] = useState([]);

    const [score, setScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);


    // Contains the rules and logic of the game
    function gameLogic(e) {
        let cardClicked = e.target.src;
        if (clickedCards.includes(cardClicked)) {
            restartGame();
            return;
        }
        setScore(score + 1);
        setClickedCards(clickedCards.concat(cardClicked));
        shuffleCards(unclickedCards);
    }


    // Updates high score
    if (score > bestScore) {
        setBestScore(score);
    }


    // Shuffles the cards
    function shuffleCards(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }


    // Resets the score and loads a new set of cards to be used
    function restartGame() {
        const newCards = loadNewCards();
        setUnclickedCards(newCards);
        setClickedCards([]);
        setScore(0);
    }


    // Loads a fresh set of cards when the page is first opened
    useEffect(() => {
        restartGame();
    }, []);


    return (
        <React.Fragment>
            <div className="scoreboard">
                <p className="best-score">Best Score: {bestScore}</p>
                <p className="current-score">Current Score: {score}</p>
            </div>
            <button onClick={restartGame} className="restart">Restart Game</button>
            <div className="card-display">
                <CardDisplay gameLogic={gameLogic} unclickedCards={unclickedCards} />
            </div>
        </React.Fragment>
    );
}

export default Main;