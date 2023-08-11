// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)


// ** MY SOLUTION ** //

function isDivisible(firstNum, ...otherNums) {
    return otherNums.every(n => firstNum % n === 0)
   }