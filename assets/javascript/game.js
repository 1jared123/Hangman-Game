window.onload = function() {

var wordSelect = ["bacon", "turkey", "ham", "beef", "chicken", "pastrami", "filet mignon", "drumstick", "frankfurter", "ribs", "hamburger", "rump roast", "ribeye", "steack"];

//set var for users guest
    var userGuess = event.key;
    var computerGuess = wordSelect[Math.floor(Math.random() * wordSelect.length)];
    
    var counter ;
    var space ;
    var wins ;
    var word ;

    //get elements
    var showGuessesLeft = document.getElementById("showGuessesLeft");
    var lettersGuessed = document.getElementById("lettersGuessed");

    //set game state setup
    var gameState = {
        gameWord: wordSelect,
        currentGuessedLetter: "",
        currentGuessedWord: computerGuess,
        numberOfGuesses: 15,
        currentWins: 0,
    };

    document.onkeyup = function(event) {
        var guessedLetter = "a";
        gameState.currentGuessedLetter = guessedLetter;
        gameState.numberOfGuesses--;
        
    };

    function renderScoreboard() {
        var scoreboard = document.getElementById("triesLeft");
        scoreboard.innerHTML = gameState.numberOfGuesses;
    }

    function showCurrentWord() {
        for (i = 0; i <currentGuessedWord.length; i++) {
            
        }
    }

        
    renderScoreboard();
    $("#word").html(gameState.currentGuessedWord);
    //function for users input
    



      // Show guesses left
   comments = function () {
    showGuessesLeft.innerHTML = guesses + " guesses left";
    if (guesses < 1) {
      showGuessesLeft.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showGuessesLeft.innerHTML = "You Win!";
      }
    }
  }

   

  document.onkeydown = function(event) {

        // computer selects a word
        var userGuess = event.key;


        // if (userGuess === "f") {
        //     console.log("it's working!");
        // } else {console.log("IT BROKEN!") };

    };

  
    console.log("i'm awesome!");

    //change that word into _ and display all the _

    //take in a letter from the player and determine if it's in the word

    //list the letters the user had used

    //list the number of guesses left

    //list the wins
    

    //show pictures and maybe music to match the words.

    //replace _ with correct letter in word. 

    

    // results after word is guessed.
        
    

}

