### 🐖 Pig Dice Game 🎲

##### By Cassandra Copp, Giancarlo Vigneri, Isaac Moreno, Carlos Mendez

[View Here](https://github.com/isaacrmoreno/pig-dice-game)

### Description:

Pig dice is a dice game where players takes turns rolling a single die. They can roll as many times as they like. If player rolls 1 they score 0 for the round and end turn. If player holds their score for the round their round score is added to total score. If player reaches 100 total score they win!

### Example:

The first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-5, after which she chooses to hold, and adds her turn total of 22 points to her score.

### Set Up Instructions:

1. Clone this [repository](https://github.com/isaacrmoreno/pig-dice-game.git) to your desktop.
2. Navigate to the top level of the directory.
3. Open Index.html in your browser.

### Bugs:

### Testing:

Describe: currentRollFunction()
Test: "It should return an integer between 1 and 6."
Code: currentRollFunction();
Expected output: 1 || 2 || 3 || 4 || 5 || 6

Describe: Player.prototype.GameRound()
Test: "It should console.log "next player turn" if a 1 is rolled. If 2-5 is rolled, it should change player roundScore and gameScore accordingly."
Code: Player.prototype.GameRound()
Expected output: Player.roundScore = roundScore + currentScore Player.gameScore = gameScore + roundScore
OR (one is rolled) Player.roundScore = 0;

Describe: GameRound()
Test: "It should console.log "next player turn" if a 1 is passed into GameRound()"
Code: GameRound(1);
Expected output:"next player turn"

Test: "It should console.log playerScore if any other number is passed into it
Code: GameRound(2);
Expected output: 2

### Technologies Used:

1. HTML
2. CSS
3. JavaScript
4. VSCode
5. GitHub
6. Bootstrap
7. Jquery
8. OOP (Object Oriented Programming)

### Contact:

Isaac [GitHub](https://github.com/isaacrmoreno)

Giancarlo [GitHub](https://github.com/Bobloblawlobslawbomb)

Cass [GitHub](https://github.com/cass1618)

Carlos [GitHub](https://github.com/yesthecarlos)

<!-- ### Licenses:

MIT &copy; 2021 Cassandra Copp, Giancarlo Vigneri, Isaac Moreno, Carlos Mendez -->
