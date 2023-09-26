// DESCRIPTION:
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead



//Parameter: take in a string filled with _ and n
//Return: Woohoo if n < 15 or Car Dead if n > 15
//Example:
function bump(x){
    let bumps = x.split('').filter(el => el === 'n')
    
    if(bumps.length <= 15){
      return 'Woohoo!'
    }else{
      return 'Car Dead'
    }
  }
  
  //pseudocode: 
  //1. create a new variable
  //2. split the array and filter all bumps found in the string
  //3. check if bumps are > or < 15
  //4. return woohoo or car dead