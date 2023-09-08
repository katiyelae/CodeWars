// DESCRIPTION:
// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"+"); // result will be 3
// calculator(1,2,"&"); // result will be "unknown value"
// calculator(1,"k","*"); // result will be "unknown value"




//parameters: integers and one sign representing the operation to perform 
//return: the result of add/sub/multip/div of two numbers 
//example:

function calculator(a,b,sign){
    if(a === a.toString() || b === b.toString()){
      return 'unknown value'
    }else{
      switch (sign) {
    case "+":
        return a + b
    case "-":
      return a-b
    case "*":
      return a*b
    case "/":
      return a/b
    default:
      return "unknown value"
  }
    }
  }
  
  //pseudocode: 
  //1. check to make sure numbers passed in are numbers or strings
  //2. use switch case to check the math operator
  //2. if not operator, return unknown value 
  //3. if math operator return the solution 