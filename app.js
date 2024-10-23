// Get computer choice
function getComputerChoice() {
  // generate random number
  const randomNum = Math.trunc(Math.random() * 3);

  //   computer choice
  const options = ["rock", "paper", "scissors"];

  return options[randomNum];
}

// Get human choice
function getHumanChoice() {
  const userChoice = prompt(
    "Choose rock, paper or scissors!"
  ).toLocaleLowerCase();

  if (!["rock", "paper", "scissors"].includes(userChoice)) {
    prompt("Invalid choice! Please choose rock, paper, or scissors.");
    return getHumanChoice();
  }

  return userChoice;
}

function askToPlayAgain() {
  const playAgain = prompt(
    "Would you like to play again? (yes/no)"
  ).toLowerCase();

  if (playAgain === "yes") {
    playGame();
  } else if (playAgain === "no") {
    prompt("Thank you for playing!");
  } else {
    prompt("Please answer with 'yes' or 'no'");
    askToPlayAgain();
  }
}

function playGame() {
  // Scores & Selections
  let userScore = 0;
  let computerScore = 0;

  // Game logic
  function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
      prompt("It's a tie!");
      return;
    }

    const winningMoves = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winningMoves[computerChoice] === humanChoice) {
      prompt(`You lose! ${computerChoice} beats ${humanChoice}!`);
      computerScore++;
    } else {
      prompt(`You win! ${humanChoice} beats ${computerChoice}!`);
      userScore++;
    }

    prompt(`Computer score: ${computerScore}. Player Score: ${userScore}.`);
  }

  while (userScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  prompt(
    `Game is over. Computer score: ${computerScore}. Player score: ${userScore}.`
  );

  // Ask to play again
  askToPlayAgain();
}

playGame();
