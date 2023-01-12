const btnChooseDiff = document.querySelector('.btn_diff-submit');
btnChooseDiff.addEventListener('click', (event) => {
    console.log('тык');
    console.log(event);
    btnChooseDiff.classList.toggle("black-focus")
})

const boxDiff = document.querySelectorAll(".box-diff");

boxDiff.forEach(box => {
    box.addEventListener('click', () => box.classList.toggle("black-focus"));
});