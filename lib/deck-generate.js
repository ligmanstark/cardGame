import Deck from './deck';
console.log(Deck);
const deck = new Deck();
deck.shuffle();
console.log(deck.cards);

export default deck;
