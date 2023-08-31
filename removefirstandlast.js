// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL




//Parameter: take in a string sequence of characters
//Return: a new string sequence without the first & last characters along with spaces in between
//Example: 

function array(string) {
    return string.split(',').slice(1,-1).join(' ') || null
    
  }
  
  //Pseudocode: 
  //1. split the string using a comma
  //2. slice off the first and last elements in array 
  //3. join together and return 