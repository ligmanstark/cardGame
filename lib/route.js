function todoToHTML() {
    const todoRender = document.querySelector('.content');

    todoRender.insertAdjacentHTML('beforeend', gameField);
};

const gameField = ` <div class="game-field">
<div class="box-d">
  <div class="box-timer">
    <div class="box-numbers">
      <p class="box-min">min</p>
      <p class="box-sec">sec </p>
    </div>
    <div class="box-time">00:00 </div>
  </div>
  <div class="box-box--active">
    <button class="btn_diff-submit">Начать
      заново</button>
  </div>
</div>
<div class="field-active">Тут будут карточки, но не
  сегодня</div>
</div>`;