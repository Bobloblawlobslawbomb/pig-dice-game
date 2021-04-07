### 🐖 Pig Dice Game 🎲

##### By Carlos Mendez, Cassandra Copp, Giancarlo Vigneri, Isaac Moreno

[View Here](https://github.com/isaacrmoreno/pig-dice-game)

### Description:

Pig dice is a dice game where players takes turns rolling a single die. They can roll as many times as they like, adding up their total each time unless they decide to pass or roll a one where they lose their total.

### Example:

The first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-5, after which she chooses to hold, and adds her turn total of 22 points to her score.

### Set Up Instructions:

1. Clone this [repository](https://github.com/isaacrmoreno/pig-dice-game.git) to your desktop.
2. Navigate to the top level of the directory.
3. Open Index.html in your browser.

### Bugs:

### Testing:

Describe: playerRoll()
Test: "It should return an integer between 1 and 6."
Code: playerRoll();
Expected output: 1 || 2 || 3 || 4 || 5 || 6

One die
Player may roll or hold
If player rolls 1 they score 0 for the round and end turn
If player holds their score for the round is added to total score
If player reaches 100 total score they win

Describe: GameRound()
Test: "It should console.log "player two turn" if a 1 is passed into GameRound()"
Code: GameRound(1);
Expected output:"player two turn"

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

### Contact:

Isaac's ✉️ [Email](mailto:ipdxcreative@gmail.com)

<!-- ### Licenses:

MIT &copy; 2021 Carlos Mendez, Cassandra Copp, Giancarlo Vigneri, Isaac Moreno -->
