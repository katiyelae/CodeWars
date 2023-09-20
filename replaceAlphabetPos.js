// DESCRIPTION:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//Parameter: take in a string
//Return: replace every letter with its position in the alphabet
//Example: 
function alphabetPosition(text) {
  let result = ''
  
  for(let l = 0; l < text.length; l++ ){
    const code = text.toUpperCase().charCodeAt(l)
    if (code > 64 && code < 91){
      result += (code - 64) + " "
    } 
   
  }
  return result.slice(0, result.length - 1)
  
}

//Pseudocode: 
//1. init an empty result string
//2. iterate through the input string
//3. find the position of the letter in the alphabet
//4. append the position to the empty result string
//5. return the result string