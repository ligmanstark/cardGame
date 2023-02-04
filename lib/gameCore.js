import { btnChooseDiff, boxNumber } from './chooseDiff';
import {
	cardFieldRender,
	boxFieldActive,
	fieldActive,
	visualCardField,
} from './cardField';
import { timer, tick } from './timer';

export const logic = (window.application = {
	time: {},
	diff: {},
	status: [],
	generateCards: [],
	takeCards: [],
});

// - Время, затраченное на игру.
// - Выбранный уровень сложности.
// - Статус игры (выбор сложности, игра, результат).
// - Сгенерированные карточки (опционально).
// - Выбранные карточки
