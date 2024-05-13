const choiseOptions = ['rock', 'paper', 'scissors'];
// item in 1st array in winningCombinations beats item in 2nd array on the same possition (key)
// winningCombinations[0][0] beats winningCombinations[1][0] 
const winningCombinations = [['rock', 'paper', 'scissors'], ['scissors', 'rock', 'paper']];
let winner = null;
let humanScore = 0;
let computerScore = 0;

let btn = document.querySelectorAll('.button');
let humanInput = '';


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
    console.log(`You choose ${humanChoice}, Computer choose ${computerChoice}`)

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");

    } else {
        winner = getWinner(humanChoice, computerChoice);

        if (winner === 'computer') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
    }
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());

    switch(winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    }

    console.log(`Game score: Player: ${humanScore}, Computer: ${computerScore}`)

    winner = null;
}

//add listner to all buttons
btn.forEach(function(button) {
    button.addEventListener("click", function() {
      // do something when the button is clicked
      humanInput = button.innerHTML;
      playGame();
    });
  });
  