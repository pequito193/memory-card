import { cardsAvailableArray } from "./CardsAvailable";

function resetGame() {
    const shuffledCards = cardsAvailableArray.sort(() => 0.5 - Math.random());

    const cardsToUse = shuffledCards.slice(0,16);

    return cardsToUse;
}

export { resetGame };