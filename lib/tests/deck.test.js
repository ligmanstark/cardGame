const { it, describe, expect } = require('@jest/globals');
const { VALUES, SUITS, Card, Deck } = require('../deck');

describe('--deck--', () => {
	describe('-consts-', () => {
		it('should consts exist', () => {
			const val = VALUES;
			const sui = SUITS;

			expect(val).toHaveLength(9);
			expect(sui).toHaveLength(4);
		});
	});
	describe('-Card-', () => {
		it('should Card create', () => {
			const list = new Card();

			expect(list).not.toBe(null);
		});
	});
	describe('-Deck-', () => {
		it('should Deck create', () => {
			const list = new Deck();

			expect(list).not.toBe(null);
		});
	});
});
