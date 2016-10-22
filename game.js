//Your game.js file will randomly select a word for the player.
//these are node packages that will need to be installed with npm
var fs = require('fs');
var wordListPath = require('word-list');





function GameWord() {

    var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
    // select a random word from a list
    var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    this.gameWord = randomWord
}

module.exports();

