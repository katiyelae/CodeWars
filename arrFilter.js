// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


//parameters: take in an array of numbers
//return: all even numbers in the array
//example: 
function getEvenNumbers(numbersArray){
    let evens = numbersArray.filter( n => n % 2 === 0)
    return evens
  }
  
  //pseudocode: 
  //1. set up a variable to store filtered numbers
  //2. use filter method to grab all even numbers in array
  //3. return array of even numbers