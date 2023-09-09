// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


//Parameters: take in a string
//REturn: the string without exclamation marks
//Example:

function remove (string) {  
 return string.replace(/!+$/, '')
  }

//Pseudocode: 
//1. replace all special characters using an regex