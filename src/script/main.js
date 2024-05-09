const choiseOptions = ['rock', 'paper', 'scissors'];
// item in 1st array in winningCombinations beats item in 2nd array on the same possition (key)
// winningCombinations[0][0] beats winningCombinations[1][0] 
const winningCombinations = [['rock', 'paper', 'scissors'], ['scissors', 'rock', 'paper']];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = choiseOptions[Math.floor(Math.random() * choiseOptions.length)];
    return computerChoice;
}

function getHumanChoice() {
    let humanInput = prompt('Enter your choise. Valid options are: Rock, Paper, Scissors');
    let humanChoice = validateHumanChoise(humanInput);
    return humanChoice;
}

function validateHumanChoise(str) {
    let result = str.trim().toLowerCase();

    if (choiseOptions.includes(result)) {
        return result;
    }
    else {
        getHumanChoice();
    }
}

function getWinner(human, computer) {
    let humanArrayIndex = winningCombinations[0].indexOf(human);
    let computerArrayIndex = winningCombinations[1].indexOf(computer);
    if (humanArrayIndex === computerArrayIndex) {
        return 'human';
    }
    else {
        return 'computer';
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`You choose ${humanChoice}, Computer coose ${computerChoice}`)


    if (humanChoice === computerChoice) {
        console.log("It's a tie!");

    } else {
        let winner = getWinner(humanChoice, computerChoice);

        if (winner = 'computer') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        }
        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 0;
        }
    }

    console.log(`Game score: Player: ${humanScore}, Computer: ${computerScore}`)
}

playRound(getHumanChoice(), getComputerChoice());