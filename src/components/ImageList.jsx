function importAllCards(r) {
    let allCards = {};
    r.keys().forEach((item, index) => { allCards[item.replace('./', '')] = r(item); });
    return allCards;
}
  
const cardsAvailable = importAll(require.context('./../images', false, /\.(png|jpe?g|svg)$/));
  
export { cardsAvailable };

