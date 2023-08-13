// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.


//PREP

// parameters: take in a list of strings inside of an array
//return: return each line prepended by the correct #
//example

var number=function(array){
  const numberedLines = array.map((a, i) => `${i+ 1}: ${a}`)
  return numberedLines
}

//pseudocode: 
//1. declare constant for numbered lines
//2. map through each element in the array
//3. concatenate the right prepended information to the element 
//4. return numbered lines