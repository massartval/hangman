# hangman

## Why this project ?

This project was designed as an exercise during my training at [BeCode](https://becode.org/). I used Jasmine 3.6.0 to write and test the logic.

## Progression

This project is a work in progress.

## Remaining issues

Design missing
All the failing tests in Jasmine plus :

- Can't figure out how to make the code wait for the user input from the prompt (always return `undefined`).  
  Temporary fix : user input prompt commented out, sample word "secret" hardcoded inside function `setSecretWord` instead.  
  => Maybe use a switch like [here](https://www.w3schools.com/jsref/met_win_prompt.asp) ? With a "" (no input) case, and a default case for everything else ?

- If I try to pass `secretWord` as an argument of the function `validateSecretWord`, the function returns `undefined` no matter what. No idea why.  
  Temporary (?) fix : no argument.

- "Start game now?" confirm box opens twice, no idea why.

## Credits

- Code
  [normalize.css](https://github.com/necolas/normalize.css/blob/master/README.md)
  [jasmine 3.6.0](https://jasmine.github.io/)
- Pictures
- Fonts
- Videos

## Github Page

[Here](https://massartval.github.io/hangman)

## My dev landing page

[Here](https://massartval.github.io/)
