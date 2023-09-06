// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


//Parameter: take in an array of 4 integers, positive only
//Return: the sum of the two lowest positive numbers
//Example: 

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a -b) 
    return sorted[0] + sorted [1]
  }
  
  //Pseudocode: 
  //1. sort the numbers
  //2. add the two lowest numbers together
  //3. return the sum
  