var wordChoices = ["red", "green", "blue", "indigo", "violet"]
var chosenWord;
var chosenWordLetters = [];
var hiddenLetters = 0;
var hiddenAndGuessed = [];
var wrongLetters = [];
var winCounter = 0;
var lossCounter = 0;
var remainingGuesses = 10;
var keyPressed;
//====================================================================================================================
function begin () {
    chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    chosenWordLetters = chosenWord.split("");
    hiddenLetters = chosenWordLetters.length;

    wrongLetters = [];
    remainingGuesses = 10;
    hiddenAndGuessed = [];

    for ( var i=0; i<hiddenLetters; i++){
        hiddenAndGuessed.push("_"); 
    }
     
    // testing
    console.log(chosenWord)
    console.log(chosenWordLetters)
    console.log(hiddenLetters)
    console.log(hiddenAndGuessed)

    document.getElementById("wins").innerHTML = "Wins: " + winCounter;
    document.getElementById("losses").innerHTML = "Losses: " + lossCounter;
    document.getElementById("currentWord").innerHTML = hiddenAndGuessed.join("  ");
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + remainingGuesses;


    }

 //====================================================================================================================== 
    // function letterChecker (){
    //     if (chosenWordLetters.includes(keyPressed) ==) {}
    //     }

    function correctGuess (){
        for (var i=0; i<hiddenLetters; i++){
            if(chosenWordLetters[i] == keyPressed){
                console.log([i]);
                
            }           
        }
    }

    function wrongGuess () {
        remainingGuesses--;
        console.log(remainingGuesses);
    }
        
     
 

  //======================================================================================================================   


    document.onkeyup = function(event){
        keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(keyPressed);
        if (chosenWordLetters.includes(keyPressed)) {
            console.log(keyPressed + " is in the word!");
            correctGuess();        
            
        } else {
            console.log(keyPressed + " is not in the word!");
            wrongGuess ();
        }


    }
    





  






begin(); 


