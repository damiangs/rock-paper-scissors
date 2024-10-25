"use-strict";

const computerHand = document.querySelector("#computer-hand");

const playerOptions = document.querySelector("#player-options");

const rockOption = document.querySelector("#rock");
const paperOption = document.querySelector("#paper");
const scissorsOption = document.querySelector("#scissors");

const pickOption = document.querySelector("#pick-option");

const rockSelection = document.querySelector("#rock-selection");
const paperSelection = document.querySelector("#paper-selection");
const scissorsSelection = document.querySelector("#scissors-selection");

const gameMessage = document.querySelector("#game-message");

const playAgain = document.querySelector("#play-again");

// Get computer choice
function getComputerChoice() {
  const randomNum = Math.trunc(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  const choice = options[randomNum];

  // Display image choice immediately
  computerHand.src = `./img/${choice}.png`;

  return choice;
}

// Get human choice
rockOption.addEventListener("click", () => playGame("rock"));
paperOption.addEventListener("click", () => playGame("paper"));
scissorsOption.addEventListener("click", () => playGame("scissors"));

// Play game
function playGame(userChoice) {
  // Hide player options immediately
  playerOptions.classList.add("hidden");

  // Show selected option immediately
  const selectionElement = document.querySelector(`#${userChoice}-selection`);
  selectionElement.classList.remove("hidden");

  // Computer plays
  const computerChoice = getComputerChoice();

  // Show result without delay
  playRound(userChoice, computerChoice);
}

// Play rounds
function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    gameMessage.textContent = "IT'S A DRAW 😐";
    playAgain.classList.remove("hidden");
    return;
  }

  // Winning moves
  const winningMoves = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // Check the winner
  if (winningMoves[computerChoice] === humanChoice) {
    gameMessage.textContent = "YOU LOSE 🤣";
  } else {
    gameMessage.textContent = "YOU WIN! 😁";
  }

  playAgain.classList.remove("hidden");
}

// Play again
playAgain.addEventListener("click", function () {
  // Reset computer hand
  computerHand.src = "./img/paper.png";

  // Reset game message
  gameMessage.textContent = "let's play";

  // Hide the play again button
  playAgain.classList.add("hidden");

  // Show player options again
  playerOptions.classList.remove("hidden");

  // Hide selected options
  const selectionElements = document.querySelectorAll('[id$="-selection"]');
  selectionElements.forEach((element) => {
    element.classList.add("hidden");
  });
});

// function askToPlayAgain() {
//   const playAgain = prompt(
//     "Would you like to play again? (yes/no)"
//   ).toLowerCase();

//   if (playAgain === "yes") {
//     playGame();
//   } else if (playAgain === "no") {
//     prompt("Thank you for playing!");
//   } else {
//     prompt("Please answer with 'yes' or 'no'");
//     askToPlayAgain();
//   }
// }

// function playGame() {
//   // Scores & Selections
//   let userScore = 0;
//   let computerScore = 0;

//   // Game logic
//   function playRound(humanChoice, computerChoice) {
//     if (computerChoice === humanChoice) {
//       prompt("It's a tie!");
//       return;
//     }

//     const winningMoves = {
//       rock: "scissors",
//       paper: "rock",
//       scissors: "paper",
//     };

//     if (winningMoves[computerChoice] === humanChoice) {
//       prompt(`You lose! ${computerChoice} beats ${humanChoice}!`);
//       computerScore++;
//     } else {
//       prompt(`You win! ${humanChoice} beats ${computerChoice}!`);
//       userScore++;
//     }

//     prompt(`Computer score: ${computerScore}. Player Score: ${userScore}.`);
//   }

//   while (userScore < 5 && computerScore < 5) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//   }

//   prompt(
//     `Game is over. Computer score: ${computerScore}. Player score: ${userScore}.`
//   );

//   // Ask to play again
//   askToPlayAgain();
// }

// playGame();
