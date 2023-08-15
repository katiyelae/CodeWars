
// Your task is to write function factorial.

//Parameters: take in one whole number
//Return: return a single value sum of the factorial
//Example: 

function factorial(n){
    let sum = 1
    
    for(let i = 1; i <= n; i++){
      sum = sum *= i
    }
    return sum
  }

  //Pseudocode:

// Start with a sum of 1 stored in a variable
// Loop from 1 to n 
// Multiply the current sum by i and update sum
// Return the final sum 
