// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).




//Parameter: take in an array of integers
//Return: the one integer that appear an odd number of times
//Example:

function findOdd(A) {
    for (let i = 0; i < A.length; i++){
      let count = A.filter(n => n === A[i]).length
      if(count % 2 === 1){
        return A[i]
      }
    }
    return 0;
  }
  
  //Pseudocode: 
  //1. loop through the array
  //2. create a new array containing all the values that match the current iterated value (filter)
  //3. check if the count is an odd number
  //4. return the number