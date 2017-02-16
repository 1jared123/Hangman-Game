window.onload = function() {


//set var for users guest
var wordList = [
    {meat: "bacon",
    image: "notenoughbacon.jpg"},

    {meat: "turkey",
    image: "turkeyjerky.jpg"},

    {meat: "ham",
    image: "sirhamy.jpg"},

    {meat: "beef",
    image: "itswhatsfordinner.jpg"},

    {meat: "chicken",
    image: "chickfila.jpg"},

    {meat: "pastrami",
    image: "foood.jpg"},

    {meat: "drumstick",
    image: "popeyes"},

    {meat: "frankfurter",
    image: "hotdog.jpg"},

    {meat: "ribs", 
    image: "dontlose.jpg"},

    {meat: "hamburger",
    image: "foodofthegods.jpg"},

    {meat: "ribeye",
    image: "snackmeat.jpg"},

    {meat: "steak",
    image: "dreambreakfast.jpg"}
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
        blanksAndSuccesses = [];
        numGuesses = 9;


        chosenWord = (Math.floor(Math.random() * wordList.length));
        lettersInChosenWord = wordList[chosenWord].meat.split("");
        theWord = wordList[chosenWord].meat;
        numBlanks = lettersInChosenWord.length;

        console.log(chosenWord);
        console.log(numBlanks);

        for (var i = 0; i < numBlanks; i++) {
            blanksAndSuccesses.push("_");        
        };


    document.getElementById("triesLeft").innerHTML = numGuesses;
    document.getElementById("word").innerHTML = blanksAndSuccesses.join(" ");
    
    

    }

    function displayImage() {
        document.getElementById("winnersGlory").innerHTML = "<img src='assets/images/" + wordList[chosenWord].image + "'/>";
    }


    function checkLetters(letter) {

        var letterInWord = false;


        for (var i =0; i < numBlanks; i++) {
            if(theWord[i] === letter) {
                letterInWord = true;
            }
        }

        if (letterInWord) {
            for (i = 0; i < numBlanks; i++) {
                 if(theWord[i] === letter) {
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
            
            document.getElementById("wins").innerHTML ="Wins: " + winCounter;
            displayImage();
            document.getElementById('Winner!').innerHTML = "YOU WIN! Press any key to play again!";
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

