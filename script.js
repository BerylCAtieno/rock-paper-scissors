
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * choices.length)
    let computerChoice = choices[randomIndex]
    return computerChoice
}
