const { it, describe, expect } = require('@jest/globals');
const { logic } = require('../gameCore');

describe('--logic--', () => {
	describe('counter', () => {
		it('should be counter exist', () => {
			const list = logic.counter;

			expect(list).toBe(0);
		});
	});
	describe('flippedCards', () => {
		it('should be flippedCards exist', () => {
			const list = logic.flippedCards;

			expect(list).toBe(0);
		});
	});
	describe('flipTotal', () => {
		it('should be flipTotal exist', () => {
			const list = logic.flipTotal;

			expect(list).toBe(0);
		});
	});
	describe('time', () => {
		it('should be time exist', () => {
			const list = logic.time;

			expect(list).toEqual({});
		});
	});
	describe('status', () => {
		it('should be status exist', () => {
			const list = logic.status;

			expect(list).toEqual([]);
		});
	});
	describe('generateCards', () => {
		it('should be generateCards exist', () => {
			const list = logic.generateCards;

			expect(list).toEqual([]);
		});
	});
	describe('takeCards', () => {
		it('should be takeCards exist', () => {
			const list = logic.takeCards;

			expect(list).toEqual([]);
		});
	});
	describe('hasFlippedCard', () => {
		it('should be hasFlippedCard exist', () => {
			const list = logic.hasFlippedCard;

			expect(list).toBe(false);
		});
	});
	describe('hasFlippedCard', () => {
		it('should be hasFlippedCard exist', () => {
			const list = logic.hasFlippedCard;

			expect(list).toBe(false);
		});
	});

	describe('firstCard', () => {
		it('should be firstCard exist', () => {
			const list = logic.firstCard;

			expect(list).toEqual([]);
		});
	});
	describe('secondCard', () => {
		it('should be secondCard exist', () => {
			const list = logic.secondCard;

			expect(list).toEqual([]);
		});
	});
	describe('fieldFlipConvert', () => {
		it('should be fieldFlipConvert exist', () => {
			const list = logic.fieldFlipConvert;

			expect(list).toEqual([]);
		});
	});
});

// time: {},
// 	diff: {},
// 	status: [],
// 	generateCards: [],
// 	takeCards: [],
// 	flippedCards: 0,
// 	flipTotal: 0,
// 	hasFlippedCard: false,
// 	firstCard: [],
// 	secondCard: [],
// 	fieldFlipConvert: [],
// 	counter: 0,
