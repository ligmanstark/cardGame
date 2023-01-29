const SUITS = ['♠', '♣', '♦', '♥'];
const VALUES = ['6', '7', '8', '9', '10', 'B', 'Q', 'K', 'A'];

class Deck {
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

class Card {
	constructor(suit, value) {
		this.suit = suit;
		this.value = value;
	}
}

function freshDeck() {
	return SUITS.flatMap((suit) => {
		return VALUES.map((value) => {
			return new Card(suit, value);
		});
	});
}

// // const CARDS  = {
// //     card:  ["6","7","8","9","10","B","Q","K","A"], //карты
// //     suit:  ["&#9829","&#9827","&#9824","&#9830"],//масти
// //     val: [1,2,3,4,5,6,7,8,9]//ранг карты
// //  }
