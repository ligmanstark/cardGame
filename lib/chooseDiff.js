const boxActive = document.querySelector('.box-active');
const btnChooseDiff = document.querySelector('.btn_diff-submit');
btnChooseDiff.addEventListener('click', (event) => {
    event.preventDefault;
    // location.href = 'gameField.html'
    const target = event.target;
    console.log(target);
    console.log('тык');
    console.log(event);
    btnChooseDiff.classList.toggle("black-focus");
    boxActive.classList.add('hide');
    todoToHTML();
});

const boxDiff = document.querySelectorAll(".box-diff");
const boxNumber = document.querySelectorAll('.box-number');
let boxDataSetValue;//dataset-value
let boxDataSetStatus;
let boxDataSetGanerateDecka;

let temporaryStorage = [];
let cardbox1;
let cardbox2;
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

        switch (window.application.diff) {
            case '6':
                creatorArrDecka(3);
                break;
            case '12':
                creatorArrDecka(6);
                break;
            case '18':
                creatorArrDecka(9);
                break;
        }
    });
});


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function creatorArrDecka(n) {
    temporaryStorage.length = 0;
    for (let i = 0; i < n; i++) {
        temporaryStorage[i] = [window.application.generateCards[i]];
        [...cardbox1] = temporaryStorage || [];
        [...cardbox2] = temporaryStorage || [];
        shacoBox = [...cardbox1, ...cardbox2]
    }
    console.log(cardbox1, cardbox2);
    shuffle(shacoBox);
    console.log(shacoBox);
}














