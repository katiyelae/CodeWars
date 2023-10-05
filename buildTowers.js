// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

//Parameters: a positive integer
//Return: a pyramid shaped tower as an array represented with astericks and spaces 
//Example:

function towerBuilder(nFloors) {
    let tower = []
    
    for (let i = 1; i <= nFloors; i++){
      let spaces = " ".repeat(nFloors - i)
      let asterisk = "*".repeat(i * 2 - 1)
      
      tower.push(`${spaces}${asterisk}${spaces}`)
    }
    return tower
  }
  
  //Pseudocode: 
  //1. create an empty array to store tower
  //2. loop through the integer given 
  //3. calculate the number of spaces needed on each side of the asterisk
  //4. calculate the number of astericks needed to go into the array
  //5. push the calculations into the empty array
  //6. return the new array