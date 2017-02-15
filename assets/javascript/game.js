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

//set game state setup
        // var gameState = {
        //     gameWord: wordList,
        //     currentGuessedLetter: "",
        //     currentGuessedWord: chosenWord,
        //     numberOfGuesses: 15,
        //     currentWins: 0,
    // };



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

    document.getElementById("lettersGuessed").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("triesLeft").innerHTML = numGuesses;
    

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

        document.getElementById("word").innerHTML = blanksAndSuccesses.join(" ");
        document.getElementById("triesLeft").innerHTML = "Guesses Left: " +  numGuesses;
        document.getElementById("lettersGuessed").innerHTML = wrongGuesses.join(" ");


        console.log(lettersInChosenWord);
        console.log(blanksAndSuccesses);

        if (lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")) {
            winCounter++;
            alert("YOU WIN!");
            document.getElementById("wins").innerHTML = winCounter;
            startGame();
        } else if (numGuesses === 0) {
            lossCounter++;
            document.getElementById("losses").innerHTML = lossCounter;
            alert("No more guesses!")
            startGame();
        }

        // if (blanksAndSuccesses.indexOf(letter >= 1)) {
        //     console.log(letter);
        // }


    };




startGame();
    document.onkeyup = function(event) {
        // take in letter typed in.
        // pass it through the checkletter function.


        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("this is the letter you typed", letterGuessed);
        checkLetters(letterGuessed);
        roundComplete();
    };





    

    
    // console.log(gameState.currentGuessedWord);

    // function renderScoreboard() {
    //     var scoreboard = document.getElementById("triesLeft");
    //     scoreboard.innerHTML = gameState.numberOfGuesses;
    //     changeWord();
    //         var userGuess = event.key;

    // }

    // function changeWord() {
    //     for (i = 0; i < gameState.numberOfGuesses; i++) {
    //         gameState.currentGuessedWord = (gameState.currentGuessedWord + "_");
    //         console.log("Boarding");
    //     }   
    // }

    

    // Show guesses left
    // function guessesLeft() {
    // triesLeft.innerHTML = numberOfGuesses + " guesses left";
    //     if (numberOfGuesses < 1) {
    //       triesLeft.innerHTML = "Game Over";
    //     }
    //     for (var i = 0; i < word.length; i++) {
    //       if (counter + space === word.length) {
    //         triesLeft.innerHTML = "You Win!";
    //       }
    //     }
    // }

    // document.onkeyup = function(event) {
    //     var guessedLetter = event.key;
    //     gameState.currentGuessedLetter = letterGuessed;
    //     gameState.numberOfGuesses--;

    //     letterGuessed.push(guessedLetter); //push guesed letter into the array. 
        
    //     for (i=0; i < letterGuessed; i++) {
    //         $("#lettersGuessed").append("<p>" + currentGuessedLetter + "</p>");
    //     }
    // };

    

        
    // renderScoreboard();
    // $("#word").html(gameState.currentGuessedWord);
    //function for users input
    



      
   
   

  // document.onkeydown = function(event) {

  //       // computer selects a word
  //       var userGuess = event.key;


        // if (userGuess === "f") {
        //     console.log("it's working!");
        // } else {console.log("IT BROKEN!") };

    // };

  
    // console.log("I'm awesome!");

    //change that word into _ and display all the _

    //take in a letter from the player and determine if it's in the word

    //list the letters the user had used

    //list the number of guesses left

    //list the wins
    

    //show pictures and maybe music to match the words.

    //replace _ with correct letter in word. 

    

    // results after word is guessed.
        
    

}

