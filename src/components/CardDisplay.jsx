import React from "react";

function CardDisplay(props) {
    const { unclickedCards, gameLogic } = props;
    const cardsToDisplay = [];
    for (let i = 0; i < unclickedCards.length; i++) {
        cardsToDisplay.push(<img src={require(`./../images/${unclickedCards[i]}`)} className='card' onClick={gameLogic} key={unclickedCards[i]} alt='card' />)
    }
    return cardsToDisplay;
}
export default CardDisplay;