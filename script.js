"use strict";
const btnRollDice = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const btnNewGame = document.querySelector(`.btn--new`);
const score0 = document.getElementById(`score--0`);
const score1 = document.getElementById(`score--1`);
const dice = document.querySelector(`.dice`);
const current0 = document.getElementById(`current--0`);
const current1 = document.getElementById(`current--1`);

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add(`hidden`);
let activePlayer = 0;

let currentScore = 0;

btnRollDice.addEventListener(`click`, function () {
  //zari rastgele at
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNum);

  //zari goster
  dice.classList.remove(`hidden`);
  dice.src = `images/dice-${randomNum}.png`;

  //zari kontol et 1 mi 1 ise oyuncu degistir

  if (dice !== 1) {
    currentScore = currentScore + randomNum;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
