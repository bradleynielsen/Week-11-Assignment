// * `main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
var Word = require('./word.js')
var Game = require('./game.js')
var Letter = require('./letter.js')

//these are node packages that will need to be installed with npm
var inquirer = require("inquirer");
var wordList = require('word-list-json');



var gameWord = new HangMan();
var guessCount = 0;

function letterGuess() {

inquirer.prompt([

	// the user inputs a letter.
	{
		type: "list",
		message: "Guess a letter",
		name: "letter"
	}]).then(function(letter){
		gameWord.letter.push(letter.letterGuess);
		guesssCount ++;
	});
	
}

letterGuess();

// The app should end when a player guesses the correct word or runs out of guesses.
