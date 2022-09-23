import React from "react";

function CardDisplay(props) {
    const { unclickedCards } = props;
    const cardsToDisplay = [];
    for (let i = 0; i < unclickedCards.length; i++) {
        cardsToDisplay.push(<img src={require(`./../images/${unclickedCards[i]}`)} className='card' key={unclickedCards[i]} alt='card' />)
    }
    return cardsToDisplay;
}
export default CardDisplay;