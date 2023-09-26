// DESCRIPTION:
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


//Parameter: take in an array of numbers containing floats and integers and a sinlge integer number 
//Return: a new array of even numbers only that is the length of the number passed 
//Example:
function evenNumbers(array, number) {
    let evens = array.filter(el => el % 2 === 0)
    return evens.slice(-number)
  }
  
  //Pseudocode:
  //1. filter out all even numbers 
  //2. slice the array based on the number passed in
  //3. return new array