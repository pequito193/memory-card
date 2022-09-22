import { cardsAvailableArray } from "./CardsAvailable";

function loadNewCards() {
    const shuffledCards = cardsAvailableArray.sort(() => 0.5 - Math.random());

    const cardsToUse = shuffledCards.slice(0,16);

    let holderVariable;

    let cardsToUseClean = []

    for (let i = 0; i < cardsToUse.length; i++) {
        holderVariable = cardsToUse[i].toString().split(',/')[0];
        cardsToUseClean.push(holderVariable)
    }

    return cardsToUseClean;
}

export { loadNewCards };