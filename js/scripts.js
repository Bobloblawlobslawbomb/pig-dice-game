// BUSINESS LOGIC
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function rollDie () {
  return getRandomInt(1,7);
}


else if (playerRoll === 1) {
  score becomes 0 if a 1 is rolled
  
  add to thisRoundScore
  //then it becomes next players turn
    thisRoundScore = 0;
}



function Player(label, previousScore,currentScore){
  this.label =label,
  this.previousScore =previousScore,
  this. currentScore = currentScore,
}