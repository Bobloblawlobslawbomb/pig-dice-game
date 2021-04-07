// BUSINESS LOGIC
function Player(label, previousScore, currentScore){
  this.label = label;
  this.previousScore = previousScore;
  this.currentScore = currentScore;
}
const player1 = new Player("Donald", 0,0)
//by this point the constructor has made the player1 'Object'

// This function returns our random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

function rollDie () {
  return getRandomInt(1,7);
}// rollDie() returns a random # between 1-6

function playerRoll() {
  return rollDie();  
}// playerRoll

// ^^^^ This works great

Player.prototype.outcome() {
    let  playerRoll = playerRoll();
      if (playerRoll != 1) {
      //add to thisRoundScore
      //Can roll again or pass
      playerRoll = 0;
    } else if (playerRoll === 1) {
      //score becomes 0 if a 1 is rolled
      //add to thisRoundScore
      //then it becomes next players turn
        thisRoundScore = 0;
    }
  }

function canTakeAnotherTurn(previousScore) {
  if (previousScore === 1) {
    return false;
  } else {
    return true;
  }
}

/*
if (playerRoll === 1){
  //score is 0
  //next players turn
  }else if (playerRoll === false ){
  //score would be all previous scores added together
  //
  }
}
*/

// UI Logic 

$(document).ready(function(event) {
  event.preventDefault()
  
  $("#roll").click(function() {
    console.log(`${getRandomInt}`) 
  });
  

});

//let PlayerRoll1 = rollDIe()
//playerRoll1



