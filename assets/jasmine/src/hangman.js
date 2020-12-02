let secretWord = "";
let validLength;
let validChars;
let validWord;
// Cheat code
secretWord = "secret";
// TEST
//console.log("Value of secretWord outside any function:");
//console.log(secretWord);
//
function startGame() {
  console.log("fctn startGame");
  setSecretWord();
  validateSecretWord();
  if (validWord) {
    formatSecretWord();
    let startNow = confirm("Start game now?");
    if (startNow == true) {
      playGame();
    } else {
      startGame();
    }
  }
}
function setSecretWord() {
  console.log("fctn setSecretword");
  // secretWord = prompt("Choose a secret word (or don't)", "secret");
  // TEST
  //console.log("Value of secretWord in setSecretWord:");
  //console.log(secretWord);
  //
  return secretWord;
}
function validateSecretWord() {
  console.log("fctn validateSecretWord");
  // TEST
  console.log("Value of secretWord in validateSecretWord:");
  console.log(secretWord);
  //
  // Test word length
  if (secretWord.length < 1 || secretWord.length > 50) {
    validLength = false;
    // Throw "word length" error and go back to "start game"
    // TEST
    console.log("Test for length, secretword = " + secretWord);
    console.log("validWord (should be false) = " + validLength);
    //
  } else {
    validLength = true;
    // TEST
    console.log("Test for length, secretword =" + secretWord);
    console.log("validWord (should be true) = " + validLength);
    //
  }

  // Test characters
  let regex = /^[a-zA-Z.\-]+$/; // All letters + hyphen
  if (!secretWord.match(regex)) {
    validChars = false;
    // Throw "invalid character" error and go back to "start game"
  } else {
    validChars = true;
    // Throw "valid word, game starting now" alert
  }
  if (validLength && validChars) {
    validWord = true;
  }
  return validWord;
}
function formatSecretWord() {
  secretWord = secretWord.toLowerCase();
  return secretWord;
}

function inputCharacter() {
  validateInput(); // allows only valid characters
  formatInput(); // input.toLowerCase
  checkInput(); // checks if input is part of secretWord
  // if true => addCharacter
  // if false => addLimb()
  checkGameOver();
}

function addCharacter(input) {
  // adds one (or several) matching characters to the secret word displayed on the screen
}

function addLimb() {
  // adds one limb to the hangman displayed on the screen
}

function checkGameOver() {
  // alerts "lost game" if hangman is complete
  // alerts "won game" if secret word is complete
}
