window.onload = function() {
    var wordSelect = ["bacon", "turkey", "ham", "beef", "chicken", "pastrami", "filet mignon", "drumstick", "frankfurter", "ribs", "hamburger", "rump roast", "ribeye", "steack"];
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //set var for users guest
    var userGuess = event.key;
    var computerGuess = wordSelect[Math.floor(Math.random() * wordSelect.length)];
    var guesses = 15;
    var counter ;
    var space ;
    var wins ;
    var word ;

    //get elements
    var showGuessesLeft = document.getElementById("showGuessesLeft");
    var lettersGuessed = document.getElementById("lettersGuessed");

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

  play = function() {

    word = computerGuess[Math.floor(Math.random() * computerGuess.length)];
    word =  word.replace(/\s/g, "-");

    guesses = 15;


  }

play(); 

  document.onkeydown = function(event) {

        // computer selects a word
        var userGuess = event.key;


        if (userGuess === "f") {
            console.log("it's working!");
        } else {console.log("IT BROKEN!") };

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

