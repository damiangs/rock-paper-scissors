// Get computer choice
function getComputerChoice() {
  // generate random number
  const randomNum = Math.trunc(Math.random() * 3);

  //   computer choice
  const options = ["rock", "paper", "scissors"];

  return options[randomNum];
}

// getComputerChoice();

// Get human choice
function getHumanChoice() {
  const userChoice = prompt("Choose rock, paper or scissors!");
  userChoice.toLowerCase();

  return userChoice;
}

// getHumanChoice();

// Scores & Selections
let userScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Game logic
function playRound(humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice === "scissors") {
    prompt(`You lose! ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    prompt(`You lose! ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    prompt(`You lose! ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  } else if (computerChoice === humanChoice) {
    prompt("It's a tie!");
  } else {
    prompt(`You win! ${humanChoice} beats ${computerChoice}!`);
    userScore++;
  }
}

playRound(humanSelection, computerSelection);
