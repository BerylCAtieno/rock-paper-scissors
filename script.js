const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length)
    let computerChoice = choices[randomIndex]
    return computerChoice
}

function getHumanChoice() {

    // TO-DO: write script to handle invalid input
    let humanChoice = prompt("Please enter your choice: ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice
}
