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



// {
//   tag: 'div',
//   cls: 'field-active',
//   content:[ {
//     tag: 'div',
//     cls: 'suit',
//     content: i.suit
//   }, {
//     tag: 'div',
//     cls: 'value',
//     content: i.value
//   }]
// }

// const exampleArr = [1, [1, 2, [3, 4]], [5, 6]];

// const fieldActive = templateEngine(window.application.takeCards.map(cardFieldRender));

// function todoToHTML(render) {

//   todoRender.insertAdjacentHTML('beforeend', render);
//   const containerFieldActive = document.querySelector('.field-active');

//   // cardFieldRender()
// };

// const gameField = `<div class="game-field">
// <div class="box-d">
//   <div class="box-timer">
//     <div class="box-numbers">
//       <p class="box-min">min</p>
//       <p class="box-sec">sec </p>
//     </div>
//     <div class="box-time">00:00 </div>
//   </div>
//   <div class="box-box--active">

//   </div>
// </div>
// <div class="field-active">Тут будут карточки, но не сегодня</div>
// </div>
// `;

// const backBox = document.querySelector('.box-box--active');
// const btnBack = document.createElement('button');
// btnBack.textContent = 'Начать заново';
// btnBack.setAttribute('type', 'sumbit');
// btnBack.classList.add('btn_diff-back');

// btnBack.addEventListener('click', (event) => {
//   event.preventDefault;
//   const target = event.target;
//   const gameField = document.querySelector('.game-field');
//   console.log(event);
//   gameField.classList.add('hide');
//   boxActive.classList.remove('hide');

// });
