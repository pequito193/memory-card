import React, { useEffect, useState } from "react";
import { loadNewCards } from "./LoadNewCards";
import CardDisplay from "./CardDisplay";
import './../styles/Main.css';


function Main() {

    const [unclickedCards, setUnclickedCards] = useState([]);

    const [clickedCards, setClickedCards] = useState([]);

    const [score, setScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);

    const [cardAmount, setCardAmount] = useState(16);


    // Contains the rules and logic of the game
    function gameLogic(e) {
        let cardClicked = e.target.src;
        if (clickedCards.includes(cardClicked)) {
            restartGame(cardAmount);
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
    function restartGame(n) {
        const newCards = loadNewCards(n);
        setUnclickedCards(newCards);
        setClickedCards([]);
        setScore(0);
    }


    // Changes the amount of cards being played according to player choice
    function handleCardAmount(e) {
        e.preventDefault();
        const numberOfCards = Number(e.target[0].value);
        setCardAmount(numberOfCards);
        restartGame(numberOfCards);
        e.target[0].value = '';
    }


    // Loads a fresh set of cards when the page is first opened
    useEffect(() => {
        restartGame(cardAmount);
    }, []);


    return (
        <React.Fragment>
            <div className="scoreboard">
                <p className="best-score">Best Score: {bestScore}</p>
                <p className="current-score">Current Score: {score}</p>
            </div>
            <form onSubmit={handleCardAmount}>
                <input className="number-input" type="number" min={1} max={50} required={true}/>
                <button className="number-input-button" type="submit">Set</button>
            </form>
            <p className="card-amount-info">Currently playing with {cardAmount} cards.</p>
            <button onClick={() => restartGame(cardAmount)} className="restart">Restart Game</button>
            <div className="card-display">
                <CardDisplay gameLogic={gameLogic} unclickedCards={unclickedCards} />
            </div>
        </React.Fragment>
    );
}

export default Main;