//Your game.js file will randomly select a word for the player.
//these are node packages that will need to be installed with npm
var wordList = require('word-list');
var fs = require('fs');

 
// returns the path to the word list which is separated by `\n` 
var wordListPath = require('word-list');
 
var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

// function GameWord() {
// 	this.word = "";
// 	// select a randome word from a list


// 	// take a string and make it an array

// }
console.log(wordArray);