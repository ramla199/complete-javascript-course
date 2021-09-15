'use strict';

const input = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const pGuessing = document.querySelector('.message');
const pScore = document.querySelector('.label-score');
const sScore = document.querySelectorAll('.score');
const pHighScore = document.querySelector('.label-highscore');
const btnAgain = document.querySelector('.again');

let secretNumber = 10;//Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function eventCollection() {
    btnCheck.addEventListener("click", numGuess);
    btnAgain.addEventListener('click', returnAll);
}


function messageChanger(message) {
    pGuessing.textContent = message;
}


function numGuess() {
    const inputValue = Number(input.value);

    if (!inputValue) {
        messageChanger('no number')
    }
    else if (inputValue === secretNumber) {
        messageChanger('you win');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '2.5em';

        if (score > highscore) document.querySelectorAll('.highscore').textContent = score;

    }
    else if (inputValue !== secretNumber) {
        if (score > 1) {
            inputValue > secretNumber ? messageChanger('too high') : messageChanger('too low');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            messageChanger('you lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
}

function returnAll() {
    messageChanger('guess my number');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


}

eventCollection();