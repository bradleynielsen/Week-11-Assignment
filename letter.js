// // this is a contructor file
// /** `letter.js` should control whether or not a letter appears as
// a "_" or as itself on-screen.*/

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

