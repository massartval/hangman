# Hangman testing plan

## Outline of a game

- Start new game :

  - Enter a secret word
  - Confirm (secret word must contain only letters from a to z\$)

- Game turn :

  - Enter a letter
  - Confirm
  - Check if letter is part of the word
    - If yes, uncover said letter
    - If no, draw a limb to the hangman

- Win game :

  - All the letters of the secret have been uncovered

- Lose game :

  - All the limbs of the hangman are present

- Remarks :
  - Letters in caps should have the same value as nocaps

## Features to test

1. The user can enter a secret word

   - Frontend:
     - User can type an input into a dedicated field
     - User can validate his input
     - Alert if word is invalid
   - Backend:
     - Input is checked to see if it is composed solely of letters
       - Caps / nocaps are ignored
       - Word should be at least 1 letter long
     - If word is invalid, game alerts user
     - If word is valid, game stores it
     - If word is valid, game starts (can ask for confirmation)

2. The user can try and guess the secret word
   - Frontend :
     - The game displays the screen game (hangman, spots for letters)
     - The user can input a letter in a dedicated field (only one)
     - The user can validate his input
     - If the input is valid, the game reveals the corresponding letters in the secret word
     - If the input is invalid, the game draws a limb to the hangman
     - The user can enter a new input
   - Backend :
     - Input is checked for validity (one letter between a-z)
     - Input (letter) is compared with the secret word
     - If the letter is present in the word, it is valid
     - If the letter is not present in the word, it is invalid

Other :

- Display secret word from the start with CSS prop "visibility: hidden" and change prop to "visibility: visible" for each character
