import Swal from 'sweetalert2';
import { timeBox } from './chooseDiff';
import backOnChooseDiff from './route';
export let timeInSecs;
export let ticker;
export const timer = (secs) => {
	timeInSecs = parseInt(secs);
	ticker = setInterval('tick()', 1000);
};

export const tick = () => {
	let secs = timeInSecs;
	if (secs > 0) {
		timeInSecs--;
	} else {
		clearInterval(ticker);
		Swal.fire({
			title: ':(',
			text: 'Вы проиграли!',
			iconHtml: '<img src="./static/img/lose.svg">',
			confirmButtonText: 'Начать сначала',
		});
		const endTime = document.querySelector('.swal2-confirm');
		endTime.addEventListener('click', backOnChooseDiff());
	}

	let mins = Math.floor(secs / 60);
	secs = secs % 60;

	let resultTime =
		(mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
	window.application.time = resultTime;
	timeBox.textContent = resultTime;
};

window.tick = tick;
