let playerScore = 0;
let computerScore = 0;

// function to get computer choice
function getComputerSelection() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function to play a round
function playRound(humanSelection) {
    let computerSelection = getComputerSelection();

    humanSelection = humanSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const validChoices = ["rock", "paper", "scissors"];
    if (!validChoices.includes(humanSelection)) {
        console.log("Invalid input! Please choose rock, paper, or scissors.");
        return;
    }

    if (humanSelection === computerSelection) {
        document.querySelector('.player-action').textContent = `It's a draw! Both chose ${humanSelection}`;
        return;
    }

    if ((humanSelection === "paper" && computerSelection === "rock") || 
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        document.querySelector('.player-action').textContent = `You win! ${humanSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        document.querySelector('.player-action').textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
    }

    // Update the scores on the screen
    document.getElementById("player_score").textContent = playerScore;
    document.getElementById("computer_score").textContent = computerScore;
}

// Add event listeners to the buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));