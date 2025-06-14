'use strict';

let score = 20;
const scoreBox = document.querySelector('.score');
scoreBox.textContent = score;

let secretNumber = Math.trunc((Math.random()*20)+1);
console.log(secretNumber)

const userInput = document.querySelector('.guess');
//console.log(userInput)
const button = document.querySelector('.check');
//console.log(button)
const message = document.querySelector('.message');
const again = document.querySelector('.btn');


button.addEventListener('click',function(){
    const userGuess = Number(userInput.value);
    //console.log(userGuess)
    if (score === 0){
        return;
    }

    else {
        if(userGuess === secretNumber){
        document.querySelector('body').style.backgroundColor = '#60b347'
        message.textContent = '🎉Correct Number!'
    }
    else if(userGuess > secretNumber){
        message.textContent = '📈Too High!'
        score = score-1;
        scoreBox.textContent = score;
    }
    else{
        message.textContent = '📉Too Low!'
        score = score-1;
        scoreBox.textContent = score;
    }
    }
})


again.addEventListener('click', function(){
    userInput.value = "";
    score = 20;
    scoreBox.textContent = score;
    message.textContent = 'Start guessing...';
    secretNumber = Math.trunc((Math.random()*4)+1);
    document.querySelector('body').style.backgroundColor = '#222';
})



//Math.trunc()
//console.log(Math.trunc((Math.random()*20)+1));