const h1 = document.querySelector("h1");
const player1 = document.querySelector(".playerOne");
const output1 = document.querySelector(".output1");
const player2 = document.querySelector(".playerTwo");
const output2 = document.querySelector(".output2");
const btn = document.querySelector("button");
let randomDice = [];

btn.addEventListener("click", game);

function game() {
  for (let i = 0; i < 2; i++) {
    randomDice[i] = Math.floor(Math.random() * (7 - 1) + 1);
  }

  dice(randomDice[0], output1);
  dice(randomDice[1], output2);

  if (randomDice[0] > randomDice[1]) {
    h1.innerHTML = "Player 1 wins!";
  } else if (randomDice[0] < randomDice[1]) {
    h1.innerHTML = "Player 2 wins!";
  } else {
    h1.innerHTML = "Draw result in a tie match";
  }
}

function dice(diceNumber, output) {
  switch (diceNumber) {
    case 1:
      output.innerHTML = "&#9856;";
      break;
    case 2:
      output.innerHTML = "&#9857;";
      break;
    case 3:
      output.innerHTML = "&#9858;";
      break;
    case 4:
      output.innerHTML = "&#9859;";
      break;
    case 5:
      output.innerHTML = "&#9860;";
      break;
    case 6:
      output.innerHTML = "&#9861;";
      break;
  }

}
