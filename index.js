document.getElementById("rock").addEventListener("click", playerChoice)
document.getElementById("paper").addEventListener("click", playerChoice)
document.getElementById("scissors").addEventListener("click", playerChoice)
document
  .getElementById("play-again-button")
  .addEventListener("click", playAgain)

let tieNumber = 0
let userWinTotal = 0
let computerWinTotal = 0
let tieTotal = 0

document.getElementById("user-win-total").innerHTML = userWinTotal
document.getElementById("computer-win-total").innerHTML = computerWinTotal
document.getElementById("tie-total").innerHTML = tieTotal

function playerChoice(e) {
  playAgain()
  const DISPLAY_USER_CHOICE = document.getElementById("player-results")
  let playerImage = document.createElement("img")
  playerImage.setAttribute("src", e.target.src)
  playerImage.setAttribute("alt", e.target.alt)
  playerImage.setAttribute("id", "user-choice")

  DISPLAY_USER_CHOICE.appendChild(playerImage)

  const COMPUTER_CHOICE = getComputerChoice()
  displayComputerChoice(COMPUTER_CHOICE)
  whoWon(e.target.alt, COMPUTER_CHOICE.alt)
}

function displayComputerChoice(image) {
  const DISPLAY_COMPUTER_CHOICE = document.getElementById("player-results")
  let computerRock = document.createElement("img")
  computerRock.setAttribute("src", image.imageSrc)
  computerRock.setAttribute("alt", image.alt)
  computerRock.setAttribute("id", "computer-choice")

  DISPLAY_COMPUTER_CHOICE.appendChild(computerRock)
}

function getComputerChoice() {
  computerNumber = Math.floor(Math.random() * 3 + 1)
  if (computerNumber === 1) {
    return {
      alt: "Rock",
      imageSrc: "media/rock.jpg",
    }
  } else if (computerNumber === 2) {
    return {
      alt: "Paper",
      imageSrc: "media/paper.jpg",
    }
  } else if (computerNumber === 3) {
    return {
      alt: "Scissors",
      imageSrc: "media/scissors.jpg",
    }
  }
}

function playAgain() {
  const PARENT_USER_REMOVE = document.getElementById("player-results")
  const CHILD_USER_REMOVE = document.getElementById("user-choice")
  const PARENT_COMPUTER_REMOVE = document.getElementById("player-results")
  const CHILD_COMPUTER_REMOVE = document.getElementById("computer-choice")
  const TIE_TEXT_PARENT = document.getElementById("tie-text-parent")
  const TIE_TEXT_CHILD = document.getElementById("tie-text-child")
  if (CHILD_USER_REMOVE === null) {
    alert("Please play the game first.")
  } else {
    PARENT_USER_REMOVE.removeChild(CHILD_USER_REMOVE)
    PARENT_COMPUTER_REMOVE.removeChild(CHILD_COMPUTER_REMOVE)
  }
  if (TIE_TEXT_CHILD !== null) {
    TIE_TEXT_PARENT.removeChild(TIE_TEXT_CHILD)
  }
}

function whoWon(playerAltTag, computerAltTag) {
  if (playerAltTag === computerAltTag) {
    let displayTieText = document.getElementById("tie-text-parent")
    let tieTextElement = document.createElement("p")
    tieTextElement.setAttribute("id", "tie-text-child")
    let tieText = document.createTextNode(`"Great minds think alike!"`)
    displayTieText.appendChild(tieTextElement)
    tieTextElement.appendChild(tieText)
    tieTotal++
    document.getElementById("tie-total").innerHTML = tieTotal
    return
  }

  if (
    (playerAltTag === "Rock" && computerAltTag === "Scissors") ||
    (playerAltTag === "Scissors" && computerAltTag === "Paper") ||
    (playerAltTag === "Paper" && computerAltTag === "Rock")
  ) {
    let userWins = document.getElementById("user-choice")
    userWins.style.boxShadow = "0 0 6px 6px yellow"
    userWinTotal++
    document.getElementById("user-win-total").innerHTML = userWinTotal
  } else {
    let computerWins = document.getElementById("computer-choice")
    computerWins.style.boxShadow = "0 0 6px 6px yellow"
    computerWinTotal++
    document.getElementById("computer-win-total").innerHTML = computerWinTotal
  }
}
