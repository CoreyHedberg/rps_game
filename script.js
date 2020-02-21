document.getElementById("rock").addEventListener("click", playerChoosesRock);
document.getElementById("paper").addEventListener("click", playerChoosesPaper);
document
  .getElementById("scissors")
  .addEventListener("click", playerChoosesScissors);

function playerChoosesRock() {
  let displayUserChoice = document.getElementById("player-results");
  let playerRock = document.createElement("img");
  playerRock.setAttribute("src", "media/rock.jpg");
  playerRock.setAttribute("alt", "Rock");
  playerRock.setAttribute("id", "user-choice");

  // Need to insert the rock image into the HTML
  displayUserChoice.appendChild(playerRock);

  // Fire the computer choice function
  computerChoice();

  // for debugging purposes
  console.log("player chose rock");
}

function playerChoosesPaper() {
  let displayUserChoice = document.getElementById("player-results");
  let playerPaper = document.createElement("img");
  playerPaper.setAttribute("src", "media/paper.jpg");
  playerPaper.setAttribute("alt", "Paper");
  playerPaper.setAttribute("id", "user-choice");

  // Need to insert the rock image into the HTML
  displayUserChoice.appendChild(playerPaper);

  // Fire the computer choice function
  computerChoice();

  // for debugging purposes
  console.log("player chose paper");
}

function playerChoosesScissors() {
  let displayUserChoice = document.getElementById("player-results");
  let playerScissors = document.createElement("img");
  playerScissors.setAttribute("src", "media/scissors.jpg");
  playerScissors.setAttribute("alt", "Scissors");
  playerScissors.setAttribute("id", "user-choice");

  // Need to insert the scissors image into the HTML
  displayUserChoice.appendChild(playerScissors);

  // Fire the computer choice function
  computerChoice();

  // For debugging purposes
  console.log("player chose scissors");
}

function computerChoosesRock() {
  let displayComputerChoice = document.getElementById("player-results");
  let computerRock = document.createElement("img");
  computerRock.setAttribute("src", "media/rock.jpg");
  computerRock.setAttribute("alt", "Rock");
  computerRock.setAttribute("id", "user-choice");

  // Need to insert the rock image into the HTML
  displayComputerChoice.appendChild(computerRock);

  // for debugging purposes
  console.log("computer chose rock");
}

function computerChoosesPaper() {
  let displayComputerChoice = document.getElementById("player-results");
  let computerPaper = document.createElement("img");
  computerPaper.setAttribute("src", "media/paper.jpg");
  computerPaper.setAttribute("alt", "Paper");
  computerPaper.setAttribute("id", "user-choice");

  // Need to insert the rock image into the HTML
  displayComputerChoice.appendChild(computerPaper);

  // for debugging purposes
  console.log("computer chose paper");
}

function computerChoosesScissors() {
  // select the parent element "User" to display the user choice
  let displayUserChoice = document.getElementById("player-results");
  // display the rock
  let computerScissors = document.createElement("img");
  computerScissors.setAttribute("src", "media/scissors.jpg");
  computerScissors.setAttribute("alt", "Scissors");
  computerScissors.setAttribute("id", "user-choice");

  // Need to insert the scissors image into the HTML
  displayUserChoice.appendChild(computerScissors);

  // For debugging purposes
  console.log("computer chose scissors");
}

function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    computerChoosesRock();
  } else if (randomNumber === 2) {
    computerChoosesPaper();
  } else if (randomNumber === 3) {
    computerChoosesScissors();
  }
  // For debugging purposes
  console.log(randomNumber);
}

// create a function for who won
// take the number of the user chosen play and the random number from the computer play and compare them.

/*
let userWins = "The User wins!";
let computerWins = "The Computer wins!";
let itsATie = "It's a tie!";
*/
