// import { btnChooseDiff, boxNumber } from './chooseDiff';
// import {
// 	cardFieldRender,
// 	boxFieldActive,
// 	fieldActive,
// 	visualCardField,
// } from './cardField';
// import { timer, tick } from './timer';

export const logic = (window.application = {
	time: {},
	diff: {},
	status: [],
	generateCards: [],
	takeCards: [],
	flippedCards: 0,
	flipTotal: 0,
	hasFlippedCard: false,
	firstCard: [],
	secondCard: [],
	fieldFlipConvert: [],
	counter: 0,
});

// - Время, затраченное на игру.
// - Выбранный уровень сложности.
// - Статус игры (выбор сложности, игра, результат).
// - Сгенерированные карточки (опционально).
// - Выбранные карточки
