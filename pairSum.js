// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

//Parameters: integer, positive or negative
//Return: return the largest pair sum 
//Example:

function largestPairSum (numbers) {
return numbers.sort((a,b) => a-b).slice(-2).reduce((a,c) => a + c)
}

//Pseudocode: 
//1. sort the array
//2. slice the last two numbers in array
//3. reduce the two largest numbers 
//4. return the sum
