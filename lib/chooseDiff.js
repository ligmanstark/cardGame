let btnBack;
let card;
const boxActive = document.querySelector('.box-active');
const boxBtn = boxActive.querySelector('.box-btn');
const btnChooseDiff = document.querySelector('.btn_diff-submit');
btnChooseDiff.addEventListener('click', (event) => {
    event.preventDefault;
    const target = event.target;
    console.log(target);
    console.log('тык');
    console.log(event);
    boxActive.classList.add('hide');
    todoRender.appendChild(game);
    game.classList.remove('hide')

    btnBack = document.querySelector('.btn_diff-back');
    console.log(btnBack);
    game.appendChild(boxFieldActive);
    card.forEach(el => {
        el.classList.remove('hide');
    })


});

const boxDiff = document.querySelectorAll(".box-diff");
const boxNumber = document.querySelectorAll('.box-number');
let boxDataSetValue;//dataset-value
let boxDataSetStatus;
let boxDataSetGanerateDecka;

let temporaryStorage = [];
let cardbox1;//используется для изначального массива+итогового
let cardbox2;//используется для изначального массива+итогового
let subcardbox = []//итоговый, временный для всей деки
let finalbox = []//итоговый
let shacoBox;//Shaco the best jungler

//прописываем самозванца
const boxHide = document.createElement('div');
boxHide.classList.add('grey-focus');
boxHide.textContent = "выбрано";

boxNumber.forEach(box => {

    box.addEventListener('click', (event) => {
        box.append(boxHide);

        boxDataSetValue = box.dataset.value;
        boxDataSetStatus = 'start';
        boxDataSetGanerateDecka = deck.cards;
        console.log(event);
        console.log(boxDataSetValue);
        console.log(window.application);
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

function creatorArrDecka(n, row) {
    temporaryStorage.length = 0;
    finalbox.length = 0;
    for (let i = 0; i < n; i++) {
        temporaryStorage[i] = [window.application.generateCards[i]];
        [...cardbox1] = temporaryStorage || [];
        [...cardbox2] = temporaryStorage || [];
        subcardbox = [...cardbox1, ...cardbox2]
    }
    console.log(cardbox1, cardbox2);
    shuffle(subcardbox);
    console.log('изначальный Субкардбокс', subcardbox);
    cardbox1.length = 0;
    cardbox2.length = 0;

    for (let i = 0; i < Math.ceil(subcardbox.length / row); i++) {
        finalbox[i] = subcardbox.slice((i * row), (i * row) + row);
    }
    console.log('итоговый бокс', finalbox);
    window.application.takeCards = toOneLevelArray(finalbox);

    fieldActive = templateEngine(window.application.takeCards.map(cardFieldRender));
    console.log(fieldActive);

    boxFieldActive.appendChild(fieldActive);
     card = document.querySelectorAll('.field-active');

    card.forEach(el => {
        el.classList.add('hide');
    });


}

const toOneLevelArray = (arr) => arr.reduce((accum, currentVal) => accum.concat(Array.isArray(currentVal) ? toOneLevelArray(currentVal) : currentVal), []);
















