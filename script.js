document.getElementById("rock").addEventListener("click", playerChoosesRock);

function playerChoosesRock() {
  // display the rock
  let playerRock = document.createElement("img");
  playerRock.setAttribute("src", "media/rock.jpg");
  playerRock.setAttribute("id", "user-choice");

  // Need to insert the rock image into the HTML

  // for debugging
  console.log("player chose rock");
}
