// * `main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.

//these are node packages that will need to be installed with npm
// var inquirer = require("inquirer");


// these are the files for the constructors 
// var wordFile = require('./word.js');
var gameFile = require('./game.js');
// var letterFile = require('./letter.js');

// init game
var gameWord = new gameFile.GameWord();
// var guessCount = 0;



// The app should end when a player guesses the correct word or runs out of guesses.
