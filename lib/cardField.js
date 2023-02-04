import { creatorArrDecka } from './chooseDiff';
import templateEngine from './templateEngine';
import { logic } from './gameCore';

export const cardFieldRender = (i) => {
	return {
		tag: 'div',
		cls: 'field-active',
		content: [
			{
				tag: 'div',
				cls: 'suit',
				content: i.suit,
			},
			{
				tag: 'div',
				cls: 'value',
				content: i.value,
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
