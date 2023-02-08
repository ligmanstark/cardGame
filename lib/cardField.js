import { card, creatorArrDecka, btnChooseDiff, flipCard } from './chooseDiff';
import templateEngine from './templateEngine';
import { logic } from './gameCore';
import Swal from 'sweetalert2';

export const cardFieldRender = (i) => {
	return {
		tag: 'div',
		cls: ['field-active', 'flipped'],
		attrs: {
			data: `${i.value + ' ' + i.suit}.svg`,
		},
		content: [
			{
				tag: 'div',
				cls: ['suit', 'hide'],
				content: i.suit,
			},
			{
				tag: 'div',
				cls: ['value', 'hide'],
				content: i.value,
			},
			{
				tag: 'img',
				cls: ['card'],
				attrs: {
					src: `./static/img/cards/${i.value + ' ' + i.suit}.svg`,
					alt: `${i.value + ' ' + i.suit}.svg`,
				},
			},
			{
				tag: 'img',
				cls: ['rubashka'],
				attrs: {
					src: './static/img/rubashka.png',
					alt: `${i.value + ' ' + i.suit}.svg`,
					data: `${i.value + ' ' + i.suit}`,
				},
			},
		],
	};
};

export const boxFieldActive = document.createElement('div');
window.boxFieldActive = boxFieldActive;
boxFieldActive.classList.add('box-field-active');

export const visualCardField = (decka) => {
	switch (decka.length) {
		case 6:
			boxFieldActive.classList.add('box-field-active--small');
			break;
		case 12:
			boxFieldActive.classList.add('box-field-active--medium');
			break;
		case 18:
			boxFieldActive.classList.add('box-field-active--large');
			break;
		default:
			console.warn(Error);
			break;
	}
};

document.addEventListener('click', (event) => {
	const target = event.target;
	console.log(target);
});

let hasFlippedCard = false;

export function cardsMatch(data) {
	const fieldFlip = document.querySelectorAll('.field-active');
	console.log(data);
	if (!hasFlippedCard) {
		hasFlippedCard = true;
		console.log('true');
		window.application.firstCard = data;
	} else {
		hasFlippedCard = false;
		console.log('false');
		window.application.secondCard = data;
		if (window.application.firstCard === window.application.secondCard) {
			fieldFlip.forEach((card) => card.removeEventListener('click', flipCard));
			console.log(fieldFlip);
			window.application.fieldFlipConvert = Array.from(fieldFlip);
			console.log(window.application.fieldFlipConvert);
			window.application.diff = window.application.diff - 2;
			if (window.application.diff === 0) {
				Swal.fire({
					title: 'Вы выиграли!',
					text: `Затраченное время ${window.application.time}`,
					iconHtml: '<img src="./static/img/win.svg">',
					confirmButtonText: 'Начать сначала',
				});
				const endTime = document.querySelector('.swal2-confirm');
				endTime.addEventListener('click', backOnChooseDiff());
			}
		} else {
			setTimeout(() => {
				Swal.fire({
					title: 'Вы проиграли!',
					text: `Затраченное время 
					 ${window.application.time}`,
					iconHtml: '<img src="./static/img/lose.svg">',
					confirmButtonText: 'Начать сначала',
				});
				const endTime = document.querySelector('.swal2-confirm');
				endTime.addEventListener('click', backOnChooseDiff());
			}, 1500);
		}
	}
}
