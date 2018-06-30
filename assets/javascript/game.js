// Used to record how many times a letter can be pressed WITH a space!
let alphabetWithSpace = [
    'a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z', ' '
];
//Holds the all the words
let words = [
    'hulk',
    'thor',
    'iron man',
    'captain america',
    'nick fury',
    'jarvis',
    'black widow',
    'loki',
    'spider man',
    'ant man',
    'wasp',
    'hawkeye',
    'quicksilver',
    'blackpanther'
];
//Holds randomWord
let randomWord = "";
//Holds letters in the word
let letters = [];
//Holds number of blanks in the word
let numberOfBlanks = 0;
//Holds Blanks and correct letter guesses
let blanks = [];
//Holds incorrect letter guesses
let incorrect = [];
//Counters
let win = 0;
let guesses = 5;
let correct = 0;

function resetGame() { // we will reset when the game is over
    //Chooses word randombly from the words
    randomWord = words[Math.floor(Math.random() * words.length)];
    //Splits the randomWord into individual letters
    letters = randomWord.split('');
    //Get the number of blanks
    numberOfBlanks = letters.length;

    // set variables back to default
    letterGuessed = 0;
    correct = 0;
    guesses = 5;
    incorrect = [];
    blanks = [];
    alphabetWithSpace = [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z', ' '
    ];
    startGame(); // start new game
}

function startGame() {
    //Chooses word randombly from the words
    randomWord = words[Math.floor(Math.random() * words.length)];
    //Splits the randomWord into individual letters
    letters = randomWord.split('');
    //Get the number of blanks
    numberOfBlanks = letters.length;

    // set variables back to default
    correct = 0;
    guesses = 5;
    incorrect = [];
    blanks = [];
    alphabetWithSpace = [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z', ' '
    ];

    //Populate the blanks
    for (let i = 0; i < numberOfBlanks; i++) {
        blanks.push('_');
        document.getElementById('underscores').innerHTML = blanks;
    }
    // dom manipulation 
    document.getElementById('underscores').innerHTML = blanks.join(' ');
    document.getElementById('guesses').innerHTML = guesses;
    document.getElementById('wins').innerHTML = win;
    document.getElementById('incorrect').innerHTML = incorrect;
}

function compareLetters(event) {
    //If guess was correct 
    if (randomWord.indexOf(event) > -1) {
        //Loops depending on the amount of blanks 
        for (let i = 0; i < numberOfBlanks; i++) {
            //Fills in right index with user key
            if (letters[i] === event) {
                correct++;
                blanks[i] = event;
                document.getElementById('underscores').innerHTML = blanks.join(' ');
            }
        }
    }
    // if the guess was incorrect
    else {
        incorrect.push(event);
        guesses--;
        // dom manipulation
        document.getElementById('guesses').innerHTML = guesses;
        document.getElementById('incorrect').innerHTML = incorrect;
    }
}

function counter() {
    // When number blanks if filled with right letters then you win
    if (correct === numberOfBlanks) {
        // counts the number of wins 
        win++;
        // dom manipulation
        document.getElementById('wins').innerHTML = win;
        document.getElementById('result').innerHTML = "Congratulations You WIN!";
        resetGame();
    } 
    // when the guesses reach zero, remind the player that they lost and could not save the planet T___T
    if (guesses === 0) {
    	// dom manipulation
    	document.getElementById('result').innerHTML = "Wow, you lost ¯\\_(ツ)_/¯";
    	resetGame();
    }
}
window.onkeyup = function(event) {
    let letterGuessed = event.key;
    for (let i = 0; i < alphabetWithSpace.length; i++) {
        if (letterGuessed === alphabetWithSpace[i]) {
            let spliced = alphabetWithSpace.splice(i, 1);
            compareLetters(letterGuessed);
            counter();
        }
    }
}

window.onload = startGame(); //start the game on when the windowloads