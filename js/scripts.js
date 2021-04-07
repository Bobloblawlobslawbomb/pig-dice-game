// BUSINESS LOGIC
function Player(label, previousScore, currentScore, totalScore){
  this.label = label;
  this.previousScore = previousScore;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

// This function returns a random # between 1-6
function playerRoll() {
  return getRandomInt(1,7); 
} 
// ^^^^ This works great

// > Roll > Roll again || pass > switch players. Display Roll Total: 100. Times Rolls: X

// when we roll we get a value. we store value (total/current score) in variable. Decide to roll again and add that new value (current score) to original value to have (total Score) OR pass.





// (Easy) computer rolls > rolls again > passes
// (hard) Computer rolls based on if then statement
// if <=3 computer passes || >=4 && <=6



Player.prototype.outcome() {
    let  playerRoll = playerRoll();
      if (playerRoll != 1) {
        this.totalScore += playerRoll();
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

// UI Logic 
const player1 = new Player("Donald", 0,0)
//by this point the constructor has made the player1 'Object'

$(document).ready(function(event) {
  event.preventDefault()
  
  $("#roll").click(function() {
    let PlayerRoll1 = rollDIe()
    playerRoll1

    console.log(`${outcome}`) 
  });
});





