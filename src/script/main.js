function getComputerChoice() {
    const choiseOptions = ['Rock', 'Paper', 'Scissors'];
    let computerChoise = choiseOptions[Math.floor(Math.random() * choiseOptions.length)];
    return computerChoise;
}