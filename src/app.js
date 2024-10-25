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
  // generate random number
  const randomNum = Math.trunc(Math.random() * 3);

  //   computer choice
  const options = ["rock", "paper", "scissors"];
  const choice = options[randomNum];

  // Add scale transition
  computerHand.classList.add("scale-0", "duration-500");

  // Display image choice
  setTimeout(() => {
    computerHand.src = `../img/${choice}.png`;
    computerHand.classList.toggle("scale-0", false);
    computerHand.classList.toggle("scale-100", tru);
  }, 500);

  return choice;
}

// Get human choice
rockOption.addEventListener("click", () => playGame("rock"));
paperOption.addEventListener("click", () => playGame("paper"));
scissorsOption.addEventListener("click", () => playGame("scissors"));

// Play game
function playGame(userChoice) {
  // hide options container
  playerOptions.classList.add("scale-0", "duration-500");
  setTimeout(() => {
    playerOptions.classList.add("hidden");

    // show selected option
    const selectionElement = document.querySelector(`#${userChoice}-selection`);
    selectionElement.classList.remove("hidden");
    selectionElement.classList.add("scale-0", "duration-500");

    // add fade effect
    setTimeout(() => {
      selectionElement.classList.remove("scale-0");
      selectionElement.classList.add("scale-125");
    }, 500);

    // Computer plays
    const computerChoice = getComputerChoice();

    // Wait for computer animation to finish before showing result
    setTimeout(() => {
      playRound(userChoice, computerChoice);
    }, 1000); // Wait for computer animation
  }, 500);
}

// Play rounds
function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    gameMessage.classList.add("scale-0", "duration-500");

    setTimeout(() => {
      gameMessage.textContent = "IT'S A DRAW 😐";
      gameMessage.classList.remove("scale-0", "text-6xl");
      gameMessage.classList.add("scale-100", "text-4xl");

      playAgain.classList.remove("hidden");
    }, 500);
    return;
  }

  // winning moves
  const winningMoves = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // winning logic
  if (winningMoves[computerChoice] === humanChoice) {
    gameMessage.classList.add("scale-0", "duration-500");

    setTimeout(() => {
      gameMessage.textContent = "YOU LOSE 🤣";
      gameMessage.classList.remove("scale-0", "text-6xl");
      gameMessage.classList.add("scale-100", "text-4xl");

      playAgain.classList.remove("hidden");
    }, 500);
  } else {
    gameMessage.classList.add("scale-0", "duration-500");

    setTimeout(() => {
      gameMessage.textContent = "YOU WIN! 😁";
      gameMessage.classList.remove("scale-0", "text-6xl");
      gameMessage.classList.add("scale-100", "text-4xl");

      playAgain.classList.remove("hidden");
    }, 500);
  }
}

// Play again
playAgain.addEventListener("click", function () {
  // reset computer hand
  computerHand.classList.add("scale-0");

  setTimeout(() => {
    computerHand.src = "../img/paper.png";
    computerHand.classList.remove("scale-0");
    computerHand.classList.add("scale-100");
  }, 500);

  // reset game message
  gameMessage.classList.add("scale-0", "duration-500");
  setTimeout(() => {
    gameMessage.classList.remove("scale-0");
    gameMessage.classList.add("scale-100");
  }, 500);

  gameMessage.textContent = "let's play";
  gameMessage.classList.remove("text-4xl");
  gameMessage.classList.add("text-6xl");

  // reset play again button
  playAgain.classList.add("hidden");

  // show player options
  // playerOptions.classList.add("scale-0", "duration-500");

  setTimeout(() => {
    playerOptions.classList.remove("scale-0");
    playerOptions.classList.add("scale-100");

    playerOptions.classList.remove("hidden");
  }, 500);

  const selectionElements = document.querySelectorAll('[id$="-selection"]');
  selectionElements.forEach((element) => {
    element.classList.add("hidden");
    element.classList.remove("scale-125");
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
