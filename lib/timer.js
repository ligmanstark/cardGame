let timeInSecs;
let ticker;
const timer = (secs) => {
	timeInSecs = parseInt(secs);
	ticker = setInterval('tick()', 1000);
};

const tick = () => {
	let secs = timeInSecs;
	if (secs > 0) {
		timeInSecs--;
	} else {
		clearInterval(ticker);
		Swal.fire({
			title: 'Error!',
			text: 'Do you want to continue',
			icon: 'error',
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
