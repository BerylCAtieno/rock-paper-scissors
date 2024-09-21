const choices = ["rock", "paper", "scissors"]
let humanScore = 0;
let computerScore = 0;

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

function playRound(humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        console.log(`it is a draw! You picked ${humanSelection} and computer picked ${computerSelection}`)
        return "draw"
    }
    else if  ((humanSelection == "paper" && computerSelection == "rock") || 
    (humanSelection == "rock" && computerSelection == "scissors") ||
    (humanSelection == "scissors" && computerSelection == "paper")) {
        humanScore++
        console.log(`You win! ${humanSelection} beats ${computerSelection}`)
        return "win"
    } else {
        computerScore++
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`)
        return "loss"
        }

}
