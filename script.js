document.getElementById("rock").addEventListener("click", playerChoosesRock);
document.getElementById("paper").addEventListener("click", playerChoosesPaper);
document
  .getElementById("scissors")
  .addEventListener("click", playerChoosesScissors);
document
  .getElementById("play-again-button")
  .addEventListener("click", playAgain);

// Global variables
let userNumber = 0;
let computerNumber = 0;

function playerChoosesRock() {
  let displayUserChoice = document.getElementById("player-results");
  let playerRock = document.createElement("img");
  playerRock.setAttribute("src", "media/rock.jpg");
  playerRock.setAttribute("alt", "Rock");
  playerRock.setAttribute("id", "user-choice");

  displayUserChoice.appendChild(playerRock);

  userNumber = 1;

  computerChoice();
  whoWon();

  // For debugging purposes : delete before submitting
  console.log("player chose rock");
  console.log(`the user number is ${userNumber}`);
}

function playerChoosesPaper() {
  let displayUserChoice = document.getElementById("player-results");
  let playerPaper = document.createElement("img");
  playerPaper.setAttribute("src", "media/paper.jpg");
  playerPaper.setAttribute("alt", "Paper");
  playerPaper.setAttribute("id", "user-choice");

  displayUserChoice.appendChild(playerPaper);

  userNumber = 2;

  computerChoice();

  // For debugging purposes : delete before submitting
  console.log("player chose paper");
  console.log(`the user number is ${userNumber}`);
}

function playerChoosesScissors() {
  let displayUserChoice = document.getElementById("player-results");
  let playerScissors = document.createElement("img");
  playerScissors.setAttribute("src", "media/scissors.jpg");
  playerScissors.setAttribute("alt", "Scissors");
  playerScissors.setAttribute("id", "user-choice");

  displayUserChoice.appendChild(playerScissors);

  userNumber = 3;

  computerChoice();

  // For debugging purposes : delete before submitting
  console.log("player chose scissors");
  console.log(`the user number is ${userNumber}`);
}

function computerChoosesRock() {
  let displayComputerChoice = document.getElementById("player-results");
  let computerRock = document.createElement("img");
  computerRock.setAttribute("src", "media/rock.jpg");
  computerRock.setAttribute("alt", "Rock");
  computerRock.setAttribute("id", "computer-choice");

  displayComputerChoice.appendChild(computerRock);

  // For debugging purposes : delete before submitting
  console.log("computer chose rock");
}

function computerChoosesPaper() {
  let displayComputerChoice = document.getElementById("player-results");
  let computerPaper = document.createElement("img");
  computerPaper.setAttribute("src", "media/paper.jpg");
  computerPaper.setAttribute("alt", "Paper");
  computerPaper.setAttribute("id", "computer-choice");

  displayComputerChoice.appendChild(computerPaper);

  // For debugging purposes : delete before submitting
  console.log("computer chose paper");
}

function computerChoosesScissors() {
  let displayUserChoice = document.getElementById("player-results");
  let computerScissors = document.createElement("img");
  computerScissors.setAttribute("src", "media/scissors.jpg");
  computerScissors.setAttribute("alt", "Scissors");
  computerScissors.setAttribute("id", "computer-choice");

  displayUserChoice.appendChild(computerScissors);

  // For debugging purposes : delete before submitting
  console.log("computer chose scissors");
}

function computerChoice() {
  computerNumber = Math.floor(Math.random() * 3 + 1);
  if (computerNumber === 1) {
    computerChoosesRock();
  } else if (computerNumber === 2) {
    computerChoosesPaper();
  } else if (computerNumber === 3) {
    computerChoosesScissors();
  }
  // For debugging purposes : delete before submitting
  console.log(`the computer number is ${computerNumber}`);
}

function playAgain() {
  let parentUserRemove = document.getElementById("player-results");
  let childUserRemove = document.getElementById("user-choice");
  let parentComputerRemove = document.getElementById("player-results");
  let childComputerRemove = document.getElementById("computer-choice");
  if (childUserRemove === null) {
    alert("Please play the game first.");
  } else {
    parentUserRemove.removeChild(childUserRemove);
    parentComputerRemove.removeChild(childComputerRemove);
  }
  console.clear();
}

function whoWon() {
  // create a function to compare the numbers for the user and computer to indicate who won
  let userWins = document.getElementById("user-choice");
  let computerWins = document.getElementById("computer-choice");
  if (
    (userNumber == 1 && computerNumber == 3) ||
    (userNumber == 2 && computerNumber == 1) ||
    (userNumber == 3 && computerNumber == 2)
  ) {
    userWins.style.border = "9px dashed yellow";
  }
}

// create a function for who won
// take the number of the user chosen play and the random number from the computer play and compare them.

/*
let userWins = "The User wins!";
let computerWins = "The Computer wins!";
let itsATie = "It's a tie!";
*/
