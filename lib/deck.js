
export const SUITS = ['бубны', 'крести', 'черви', 'пики'];

export const VALUES = ['6', '7', '8', '9', '10', 'валет', 'дама', 'король', 'туз'];


 export class Deck {
	constructor(cards = freshDeck()) {
		this.cards = cards;
	}
	get numberCards() {
		return this.cards.length;
	}

	shuffle() {
		for (let i = this.numberCards - 1; i > 0; i--) {
			const newIndexCard = Math.floor(Math.random() * (i + 1));
			const oldValueCard = this.cards[newIndexCard];
			this.cards[newIndexCard] = this.cards[i];
			this.cards[i] = oldValueCard;
		}
	}
}

export class Card {
	constructor(suit, value) {
		this.suit = suit;
		this.value = value;
	}
}

export function freshDeck() {
	return SUITS.flatMap((suit) => {
		return VALUES.map((value) => {
			return new Card(suit, value);
		});
	});
}



export default Deck;
