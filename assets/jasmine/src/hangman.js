let secretWord = "";
let validWord;
// TEST
console.log("Outside any function:");
console.log(secretWord);
//
function StartGame() {
  setSecretWord();
  validateSecretWord();
  formatSecretWord();
}
function setSecretWord() {
  // secretWord = prompt("Choose a secret word (or don't)", "secret");
  // Cheat code
  secretWord = "secret";
  // TEST
  console.log("In setSecretWord:");
  console.log(secretWord);
  //
  return secretWord;
}
function validateSecretWord(secretWord) {
  // TEST
  console.log("In validateSecretWord:");
  console.log(secretWord);
  //
  // Test word length
  if (secretWord.length < 1 || secretWord.length > 50) {
    validWord = false;
    // Throw "word length" error and go back to "start game"
  } else {
    validWord = true;
  }
  // Test characters
  let validChars = /^[a-zA-Z.\-_]+$/; // All letters + hyphen
  if (!secretWord.match(validChars)) {
    validWord = false;
    // Throw "invalid character" error and go back to "start game"
  } else {
    validWord = true;
    // Throw "valid word, game starting now" alert
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
