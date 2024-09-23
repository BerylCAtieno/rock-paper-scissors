/* function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    function getComputerSelection() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playRound(humanSelection, computerSelection) {
        humanSelection = humanSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        const validChoices = ["rock", "paper", "scissors"];
        if (!validChoices.includes(humanSelection)) {
            console.log("Invalid input! Please choose rock, paper, or scissors.");
            return null;  // Invalid round
        }

        if (humanSelection === computerSelection) {
            console.log(`It is a draw!! You both picked ${humanSelection}`);
            return "draw";
        }

        if ((humanSelection === "paper" && computerSelection === "rock") || 
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "scissors" && computerSelection === "paper")) {
            console.log(`You win! ${humanSelection} beats ${computerSelection}`);
            return "win";
        } else {
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
            return "lose";
        }
    }

    for (let i = 0; i < rounds; i++) {
        const humanSelection = prompt("Enter rock, paper, or scissors:");  // Get user input
        const computerSelection = getComputerSelection();

        const result = playRound(humanSelection, computerSelection);
        if (result === "win") {
            humanScore++;
        } else if (result === "lose") {
            computerScore++;
        }

        console.log(`Round ${i + 1}: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }

    
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a draw! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}

*/