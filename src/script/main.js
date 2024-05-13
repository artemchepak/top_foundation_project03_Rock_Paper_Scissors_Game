const choiseOptions = ['rock', 'paper', 'scissors'];
// item in 1st array in winningCombinations beats item in 2nd array on the same possition (key)
// winningCombinations[0][0] beats winningCombinations[1][0] 
const winningCombinations = [['rock', 'paper', 'scissors'], ['scissors', 'rock', 'paper']];
let winner = null;
let humanScore = 0;
let computerScore = 0;

let btn = document.querySelectorAll('.button');
let humanInput = '';

let humanChoiceOutput = document.querySelector('.user-choise');
let computerChoiceOutput = document.querySelector('.computer-choise');
let resultOutput = document.querySelector('.results');
let scoreOutput = document.querySelector('.score');


function getComputerChoice() {
    let computerChoice = choiseOptions[Math.floor(Math.random() * choiseOptions.length)];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = validateHumanChoise(humanInput);
    return humanChoice;
}

function validateHumanChoise(str) {
    let result = str.trim().toLowerCase();

    if (choiseOptions.includes(result)) {
        return result;
    }
    else {
        alert('Invalid input. Reset the game');
        throw new Error('Invalid input');
    }
}

function getWinner(human, computer) {
    let humanArrayIndex = winningCombinations[0].indexOf(human);
    let computerArrayIndex = winningCombinations[1].indexOf(computer);
    if (humanArrayIndex === computerArrayIndex) {
        winner = 'human';
        return winner;
    }
    else {
        winner = 'computer';
        return 'computer';
    }
}

function playRound(humanChoice, computerChoice) {

    humanChoiceOutput.innerHTML = `You picked ${humanChoice}`;
    computerChoiceOutput.innerHTML = `Computer picked  ${computerChoice}`;

    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "It's a tie!";

    } else {
        winner = getWinner(humanChoice, computerChoice);

        if (winner === 'computer') {
            resultOutput.innerHTML = 'You lose!';
        }
        else {
            resultOutput.innerHTML = 'You win!';
        }
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());

    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    }

    scoreOutput.innerHTML = `Score: You - ${humanScore}, Computer - ${computerScore}`;

    winner = null;
    setTimeout( function(){
        endGame();
    }, 1);
}

//add listner to all buttons
btn.forEach(function (button) {
    button.addEventListener("click", function () {
        // do something when the button is clicked
        humanInput = button.innerHTML;

        // if (humanScore === 5 || computerScore === 5) {
        //     endGame();
        // }
        // else {
        //     playGame();
        // }

        playGame();
    });
});

function endGame(){
    if (humanScore === 5) {
        alert('You win! Refresh page to play again.');
        window.location.reload();
    }
    else if (computerScore === 5) {
        alert('You lose! Refresh page to play again.');
        window.location.reload();
    } else {
        return;
    }
}
