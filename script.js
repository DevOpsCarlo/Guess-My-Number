'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
let score = 20;
let highScore = 0;
const body = document.querySelector('body');
const message = document.querySelector('.message');
const labelScore = document.querySelector('.score');
const guess = document.querySelector('.guess');

const setGameStatus = function (msgContent, bgColor, width, numberContent) {
  message.textContent = msgContent;
  body.style.backgroundColor = bgColor;
  number.style.width = width;
  number.textContent = numberContent;
};

const guessNumber = function () {
  const guess = document.querySelector('.guess');
  const guessedNumber = Number(guess.value);
  const labelHighScore = document.querySelector('.highscore');

  // When there is no input
  if (!guessedNumber) {
    setGameStatus('⛔ Not a number', '#222', '15rem', '?');
  } // When player wins
  else if (guessedNumber === secretNumber) {
    setGameStatus(
      '🎉 You guessed the number!',
      '#60b347',
      '30rem',
      secretNumber
    );
    if (score > highScore) {
      highScore = score;
      labelHighScore.textContent = highScore;
    }
  } else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      setGameStatus(
        guessedNumber > secretNumber ? '📈 Too high!' : '📉 Too low!',
        '#222',
        '15rem',
        '?'
      );
      score--;
      labelScore.textContent = score;
    } else {
      setGameStatus('⭕ Game over!', 'red', '15rem', '?');
      labelScore.textContent = 0;
    }
  }
};

// else if (guessedNumber > secretNumber) {
//   if (score > 1) {
//     message.textContent = '📈 Too high!';
//     score--;
//     labelScore.textContent = score;
//   } else {
//     message.textContent = '⭕ Game over!';
//     labelScore.textContent = 0;
//     body.style.backgroundColor = 'red';
//   }
// } else if (guessedNumber < secretNumber) {
//   if (score > 1) {
//     message.textContent = '📉 Too low!';
//     score--;
//     labelScore.textContent = score;
//   } else {
//     message.textContent = '⭕ Game over!';
//     labelScore.textContent = 0;
//     body.style.backgroundColor = 'red';
//   }
// }

const guessAgain = function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  labelScore.textContent = score;
  setGameStatus('Start guessing...', '#222', '15rem', '?');
  guess.value = '';
  labelScore.textContent = score;
  console.log(`again: ${secretNumber}`);
};
checkBtn.addEventListener('click', guessNumber);
againBtn.addEventListener('click', guessAgain);
