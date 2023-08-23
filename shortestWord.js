// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



//Parameters: take in a string of words
//Return: return the length of the shortest word
//Example:
function findShort(s){
    let newArr = s.split(' ').sort((a,b) => a.length - b.length)
    return newArr[0].length 
  }
  
  //Pseudocode: 
  //1. split the string
  //2. sort the word.length
  //3. return smallest string length