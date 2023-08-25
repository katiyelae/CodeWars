// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.



//Parameters: take in a lowercase string 
//Return: return two arrays, one with uppercase letter on all even indexes & one with uppercase letters on all odd indexes

function capitalize(s){
  
    let evenIndex = s.split('').map((e, i) => i % 2 == 0 ? e.toUpperCase(): e).join('')
    let oddIndex = s.split('').map((e, i) => i % 2 !== 0 ? e.toUpperCase(): e).join('')
    
    return [evenIndex, oddIndex];
  };
  
  //Pseudocode: 
  //1. create new variables to store even and odd index arrays
  //2. split the string and loop through each letter 
  //3. based on variable, check if index is even or odd and proper indexes to uppercase
  //3. return new array with both even and odd variables