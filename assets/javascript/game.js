window.onload = function() {


//set var for users guest
var wordList = [
    "bacon",
    "turkey",
    "ham",
    "beef",
    "chicken",
    "pastrami",
    "drumstick",
    "frankfurter",
    "ribs",
    "hamburger",
    "ribeye",
    "steak"
              ]

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;

var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


    function startGame() {
        wrongGuesses = [];
        numGuesses = 9;
        
        blanksAndSuccesses = [];


        chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
        lettersInChosenWord = chosenWord.split("");
        numBlanks = lettersInChosenWord.length;

        console.log(chosenWord);
        console.log(numBlanks);

        for (var i = 0; i < numBlanks; i++) {
            blanksAndSuccesses.push("_");        
        };


    document.getElementById("triesLeft").innerHTML = numGuesses;
    document.getElementById("word").innerHTML = blanksAndSuccesses.join(" ");
    
    

    }


    function checkLetters(letter) {

        var letterInWord = false;


        for (var i =0; i < numBlanks; i++) {
            if(chosenWord[i] === letter) {
                letterInWord = true;
            }
        }

        if (letterInWord) {
            for (i = 0; i < numBlanks; i++) {
                 if(chosenWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            }

            }
        }else {
            numGuesses--;
            wrongGuesses.push(letter);
        }


    };



    function roundComplete() {

        
        document.getElementById("triesLeft").innerHTML =  numGuesses;
        document.getElementById("lettersGuessed").innerHTML = wrongGuesses.join(" ");
        document.getElementById("word").innerHTML = blanksAndSuccesses.join(" ");

        console.log(lettersInChosenWord);
        console.log(blanksAndSuccesses);

        if (lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")) {
            winCounter++;
            alert("YOU WIN!");
            document.getElementById("wins").innerHTML ="Wins: " + winCounter;
            document.getElementById('winnersGlory').innerHTML = ""
            startGame();
        } else if (numGuesses === 0) {
            lossCounter++;
            document.getElementById("losses").innerHTML ="Losses: " + lossCounter;
            alert("No more guesses!")
            startGame();
        }

        // if (blanksAndSuccesses.indexOf(letter >= 1)) {
        //     console.log(letter);
        // }


    };


startGame(); //calls this function to start the game. 

    document.onkeyup = function(event) {
        // take in letter typed in.
        // pass it through the checkletter function.


        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("this is the letter you typed", letterGuessed);
        checkLetters(letterGuessed);
        roundComplete();
    };




  
}

