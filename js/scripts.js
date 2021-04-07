// BUSINESS LOGIC
function Player(label){
  this.label = label;
  this.currentRoll = 0;
  this.roundScore = 0; 
  this.gameScore = 0;
}


//ROUND 1
// Roll 6
// Player.currentRoll = 6  Player.turnScore = 6 
// ROll again (2)
// Current score = 2 Round score = 8 gameScore = 8

//Pass other player goes
// Round 2
// Current score = 3 Round score = 3 
// ROll again
// Current score = 4 Round score = 7 
// Rolls 1
// Current score = 1 Round score = 0 gameScore = 8

// Round 3
// Current score = 2 Round score = 2 
// ROll again
// Current score = 3 Round score = 5
// Rolls again
// Current score = 4 Round score = 9 
// PASS gameScore = 17



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

// This function returns a random # between 1-6
function currentRollFunction() {
  return getRandomInt(1,7); 
} 

// This function returns "player two turn" if player rolls 1
Player.prototype.GameRound = function () {
  let rollValue = currentRollFunction(); 
  //Player.currentRoll = currentRollFunction(); this.currentRoll = `{currentRollFunction()}`.val()
  
  console.log("rollValue is "+rollValue);
  if (rollValue === 1){
    this.roundScore = 0;
    //return 
    console.log("next player turn")
  } else {
    this.roundScore = this.roundScore + rollValue;
    this.gameScore = this.gameScore + this.roundScore;
    console.log("Round score is "+this.roundScore);
    console.log("Game score is "+this.gameScore);
  }
}

function canTakeAnotherTurn(previousScore) {
  if (previousScore === 1) {
    return false;
  } else {
    return true;
  }
}

// UI Logic 
let player1 = new Player("Donald");
let player2 = new Player("Sara"); 
//by this point the constructor has made the player1 and player2 'Object'

$(document).ready(function(event) {
  event.preventDefault()
  
  $("#roll").click(function() {
    let PlayerRoll1 = rollDIe()
    playerRoll1

    console.log(`${roundScore}`) 
  });
});