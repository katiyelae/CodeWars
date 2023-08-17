// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.


//Parameter: take in a list of digits, positive integers only
//Return: the smallest number that could be formed 
//Example:

function minValue(values){ 
  const noDuplicates = new Set(values.sort((a,b) => a-b))
  let smallestNum = Array.from(noDuplicates).join('')
  return Number(smallestNum)
}
  
  //Pseudocode: 
  //1. create a set() using the value passed in
  //2. sort the set
  //3. convert the new set to an array and join the values together
  //3. return the smallest number using an explicit conversion
