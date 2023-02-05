import { card, creatorArrDecka, btnChooseDiff } from './chooseDiff';
import templateEngine from './templateEngine';
import { logic } from './gameCore';

export const cardFieldRender = (i) => {
	return {
		tag: 'div',
		cls: ['field-active', 'flipped'],
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
				},
			},
			{
				tag: 'img',
				cls: ['rubashka'],
				attrs: {
					src: './static/img/rubashka.png',
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

