
import '../style.css';
import deck from './deck-generate.js';
import { logic } from './gameCore';
import templateEngine from './templateEngine';
import { todoRender, renderField, game } from './route';
import {
	cardFieldRender,
	boxFieldActive,
	visualCardField,
	cardsMatch,
} from './cardField';
import { tick, timer, ticker, timeInSecs } from './timer';
import { backOnChooseDiff } from './route';
import '../res/1f0cf.png';

let fieldActive;
let btnBack;
export let card;
window.card = card;
export let timeBox;

export const boxActive = document.querySelector('.box-active');
const boxBtn = boxActive.querySelector('.box-btn');
export const btnChooseDiff = document.querySelector('.btn_diff-submit');
btnChooseDiff.addEventListener('click', (event) => {
	event.preventDefault;

	boxActive.classList.add('hide');
	todoRender.appendChild(game);
	game.classList.remove('hide');

	btnBack = document.querySelector('.btn_diff-back');
	game.appendChild(boxFieldActive);
	timeBox = document.querySelector('.box-time');
	card.forEach((el) => {
		el.classList.remove('hide');
	});
	visualCardField(window.application.takeCards);
	switch (window.application.takeCards.length) {
		case 6:
			timer(65);
			break;
		case 12:
			timer(95);
			break;
		case 18:
			timer(125);
			break;

		default:
			console.warn(Error);
			break;
	}
	const rubFlip = document.querySelectorAll('.rubashka');
	const fieldFlip = document.querySelectorAll('.field-active');
	const cardFlip = document.querySelectorAll('.card');

	setTimeout(slowAlert, 5000);

	function slowAlert() {
		fieldFlip.forEach((card) => card.classList.remove('flipped'));
	}

	function flipCard() {
		this.classList.add('flipped');
		cardsMatch(this.getAttribute('data'));
	}

	fieldFlip.forEach((card) => card.addEventListener('click', flipCard));

});

const boxDiff = document.querySelectorAll('.box-diff');
export const boxNumber = document.querySelectorAll('.box-number');
let boxDataSetValue; //dataset-value
let boxDataSetStatus;
let boxDataSetGanerateDecka;

let temporaryStorage = [];

let cardbox1; //используется для изначального массива+итогового
let cardbox2; //используется для изначального массива+итогового
let subcardbox = []; //итоговый, временный для всей деки
let finalbox = []; //итоговый
let shacoBox; //Shaco the best jungler

//прописываем самозванца
export const boxHide = document.createElement('div');

boxNumber.forEach((box) => {
	box.addEventListener('click', (event) => {
		boxHide.classList.add('grey-focus');
		boxHide.textContent = 'выбрано';
		box.append(boxHide);

		boxDataSetValue = box.dataset.value;
		boxDataSetStatus = 'start';
		boxDataSetGanerateDecka = deck.cards;

		window.application.status = boxDataSetStatus;
		window.application.diff = boxDataSetValue;
		window.application.generateCards = boxDataSetGanerateDecka;
		// shacoBox = boxDataSetGanerateDecka;

		switch (window.application.diff) {
			case '6':
				creatorArrDecka(3, 3);
				break;
			case '12':
				creatorArrDecka(6, 4);
				break;
			case '18':
				creatorArrDecka(9, 3);
				break;
			default:
				console.warn(Error);
		}
	});

});

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

export function creatorArrDecka(n, row) {
	temporaryStorage.length = 0;
	finalbox.length = 0;
	for (let i = 0; i < n; i++) {
		temporaryStorage[i] = [window.application.generateCards[i]];
		[...cardbox1] = temporaryStorage || [];
		[...cardbox2] = temporaryStorage || [];
		subcardbox = [...cardbox1, ...cardbox2];
	}
	shuffle(subcardbox);
	cardbox1.length = 0;
	cardbox2.length = 0;

	for (let i = 0; i < Math.ceil(subcardbox.length / row); i++) {
		finalbox[i] = subcardbox.slice(i * row, i * row + row);
	}
	window.application.takeCards = finalbox.flat(Infinity);

	fieldActive = templateEngine(
		window.application.takeCards.map(cardFieldRender)
	);

	boxFieldActive.appendChild(fieldActive);
	card = document.querySelectorAll('.field-active');

	card.forEach((el) => {
		el.classList.add('hide');
	});
}

export function flipCard() {
	this.classList.add('flipped');
	cardsMatch(this.getAttribute('data'));
}

