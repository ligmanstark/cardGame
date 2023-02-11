import { btnChooseDiff, boxNumber, boxHide } from './chooseDiff';
import templateEngine from './templateEngine';
import { boxActive, card } from './chooseDiff';
import { cardFieldRender, boxFieldActive, visualCardField } from './cardField';
import { tick, ticker } from './timer';

export const todoRender = document.querySelector('.content');

export const renderField = () => {
	return {
		tag: 'div',
		cls: 'game-field',
		content: [
			{
				tag: 'div',
				cls: 'box-d',
				content: [
					{
						tag: 'div',
						cls: 'box-timer',
						content: [
							{
								tag: 'div',
								cls: 'box-numbers',
								content: [
									{
										tag: 'p',
										cls: 'box-min',
										content: 'min',
									},
									{
										tag: 'p',
										cls: 'box-sec',
										content: 'sec',
									},
								],
							},
							{
								tag: 'div',
								cls: 'box-time',
								content: ['00:00'],
							},
						],
					},
					{
						tag: 'div',
						cls: 'box-box--active',
						content: [
							{
								tag: 'button',
								cls: 'btn_diff-back',
								attrs: {
									type: 'submit',
									onclick: 'backOnChooseDiff()',
								},
								content: 'Начать заново',
							},
						],
					},
				],
			},
		],
	};
};

export const game = templateEngine(renderField());
// const game = templateEngine(renderField());
export function backOnChooseDiff() {
	game.classList.add('hide');
	boxActive.classList.remove('hide');
	window.card = document.querySelectorAll('.field-active');
	card.forEach((el) => {
		boxFieldActive.removeChild(el);
	});
	boxFieldActive.classList.remove('box-field-active--small');
	boxFieldActive.classList.remove('box-field-active--medium');
	boxFieldActive.classList.remove('box-field-active--large');
	clearInterval(ticker);
	boxHide.classList.remove('grey-focus');
	boxHide.textContent = '';
}

window.backOnChooseDiff = backOnChooseDiff;


