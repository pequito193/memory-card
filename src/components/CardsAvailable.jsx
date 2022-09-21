function importAllCards(r) {
    let allCards = {};
    r.keys().forEach((item, index) => { allCards[item.replace('./', '')] = r(item); });
    return allCards;
}
  
const cardsAvailableObject = importAllCards(require.context('./../images', false, /\.png$/));

const cardsAvailableArray = Object.entries(cardsAvailableObject)

  
export { cardsAvailableArray };

