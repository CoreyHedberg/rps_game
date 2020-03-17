document.getElementById("rock").addEventListener("click", playerChoice);
document.getElementById("paper").addEventListener("click", playerChoice);
document.getElementById("scissors").addEventListener("click", playerChoice);
document
  .getElementById("play-again-button")
  .addEventListener("click", playAgain);

let tieNumber = 0;
var userWinTotal = 0;
var computerWinTotal = 0;
var tieTotal = 0;

document.getElementById("user-win-total").innerHTML = userWinTotal;
document.getElementById("computer-win-total").innerHTML = computerWinTotal;
document.getElementById("tie-total").innerHTML = tieTotal;

function playerChoice(e) {
  let havePlayed = document.getElementById("user-choice");
  if (havePlayed !== null) {
    alert(
      "You have already played the game.\nPlease press the Play Again button."
    );
  } else {
    let displayUserChoice = document.getElementById("player-results");
    let playerImage = document.createElement("img");
    playerImage.setAttribute("src", e.target.src);
    playerImage.setAttribute("alt", e.target.alt);
    playerImage.setAttribute("id", "user-choice");

    displayUserChoice.appendChild(playerImage);

    const computerChoice = getComputerChoice();
    displayComputerChoice(computerChoice);
    whoWon(e.target.alt, computerChoice.alt);
  }
}

function displayComputerChoice(image) {
  let displayComputerChoice = document.getElementById("player-results");
  let computerRock = document.createElement("img");
  computerRock.setAttribute("src", image.imageSrc);
  computerRock.setAttribute("alt", image.alt);
  computerRock.setAttribute("id", "computer-choice");

  displayComputerChoice.appendChild(computerRock);
}

function getComputerChoice() {
  computerNumber = Math.floor(Math.random() * 3 + 1);
  if (computerNumber === 1) {
    return {
      alt: "Rock",
      imageSrc: "media/rock.jpg"
    };
  } else if (computerNumber === 2) {
    return {
      alt: "Paper",
      imageSrc: "media/paper.jpg"
    };
  } else if (computerNumber === 3) {
    return {
      alt: "Scissors",
      imageSrc: "media/scissors.jpg"
    };
  }
}

function playAgain() {
  let parentUserRemove = document.getElementById("player-results");
  let childUserRemove = document.getElementById("user-choice");
  let parentComputerRemove = document.getElementById("player-results");
  let childComputerRemove = document.getElementById("computer-choice");
  let tieTextParent = document.getElementById("tie-text-parent");
  let tieTextChild = document.getElementById("tie-text-child");
  if (childUserRemove === null) {
    alert("Please play the game first.");
  } else {
    parentUserRemove.removeChild(childUserRemove);
    parentComputerRemove.removeChild(childComputerRemove);
  }
  if (tieTextChild !== null) {
    tieTextParent.removeChild(tieTextChild);
  }
}

function whoWon(playerAltTag, computerAltTag) {
  console.log(playerAltTag);
  console.log(computerAltTag);

  if (playerAltTag === computerAltTag) {
    let displayTieText = document.getElementById("tie-text-parent");
    let tieTextElement = document.createElement("p");
    tieTextElement.setAttribute("id", "tie-text-child");
    let tieText = document.createTextNode(`"Great minds think alike!"`);
    displayTieText.appendChild(tieTextElement);
    tieTextElement.appendChild(tieText);
    tieTotal++;
    document.getElementById("tie-total").innerHTML = tieTotal;
    return;
  }

  if (
    (playerAltTag === "Rock" && computerAltTag === "Scissors") ||
    (playerAltTag === "Scissors" && computerAltTag === "Paper") ||
    (playerAltTag === "Paper" && computerAltTag === "Rock")
  ) {
    let userWins = document.getElementById("user-choice");
    userWins.style.boxShadow = "0 0 6px 6px yellow";
    userWinTotal++;
    document.getElementById("user-win-total").innerHTML = userWinTotal;
  } else {
    let computerWins = document.getElementById("computer-choice");
    computerWins.style.boxShadow = "0 0 6px 6px yellow";
    computerWinTotal++;
    document.getElementById("computer-win-total").innerHTML = computerWinTotal;
  }
}
