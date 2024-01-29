"use strict";
const btnRollDice = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const btnNewGame = document.querySelector(`.btn--new`);
const score0 = document.getElementById(`score--0`);
const score1 = document.getElementById(`score--1`);
const dice = document.querySelector(`.dice`);
const current0 = document.getElementById(`current--0`);
const current1 = document.getElementById(`current--1`);
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add(`hidden`);
let scores = [0, 0];
let activePlayer = 0;

let currentScore = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle(`player--active`);
  player1.classList.toggle(`player--active`);
};

btnRollDice.addEventListener(`click`, function () {
  //zari rastgele at
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNum);

  //zari goster
  dice.classList.remove(`hidden`);
  dice.src = `images/dice-${randomNum}.png`;

  //zari kontol et 1 mi 1 ise oyuncu degistir

  if (randomNum !== 1) {
    currentScore = currentScore + randomNum;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener(`click`, function () {
  scores[activePlayer] = scores[activePlayer] + currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add(`player--winner`);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--active`);

    dice.classList.add(`hidden`);

    document.querySelector(`.btn--roll`).disabled = "disabled";
    document.querySelector(`.btn--hold`).disabled = "disabled";
  } else {
    switchPlayer();
  }
});

btnNewGame.addEventListener(`click`, function () {
  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  document.querySelector(`.btn--roll`).disabled = false;
  document.querySelector(`.btn--hold`).disabled = false;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);

  activePlayer = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--active`);
});
