// Computer looks for when something with an id of button is clicked which causes the type function to activate.
document.getElementById('button').addEventListener('click', type)
let playerChoice = 0

// This function will look for the player to input a value inside something with an id of num-input which will store the value, parse Int converts it to a int.
function type () {
  playerChoice = document.getElementById('num-input').value
  playerChoice = parseInt(playerChoice)

  if (playerChoice < 0) {
    playerChoice = document.getElementById('result').innerHTML = "Negative"
  }
  else {
    playerChoice = document.getElementById('result').innerHTML = "Positive"
  }
}
