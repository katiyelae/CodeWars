// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


 //Parameter: whole numbers
     //Return: true or false if all elements in array are less than or equal to limit number
     //Example:
function smallEnough(a, limit){ 
     
     const smallOrNot = a.every(x => x <= limit ? true: false)
     return smallOrNot
     
     //Pseudocode: 
     //1. check to see if elements in array meet same condition using every method
     //2. return true or false based on results
   }