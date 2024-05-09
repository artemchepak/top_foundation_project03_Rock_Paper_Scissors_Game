const choiseOptions = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoise = choiseOptions[Math.floor(Math.random() * choiseOptions.length)];
    return computerChoise;
}

function getHumanChoice() {
    let humanInput = prompt('Enter your choise. Valid options are: Rock, Paper, Scissors');
    let humanChoise = validateHumanChoise(humanInput);
    return humanChoise;
}

function validateHumanChoise(str) {
    let result = str.trim().toLowerCase();
    console.log(str + ' ' + result);

    if (choiseOptions.includes(result)) {
        return result;
    }
    else {
        getHumanChoice();
    }
}