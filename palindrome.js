// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".


   //Parameter: take in a word, numer, phrase or other squence of symbols
    //Return: true or false
    //Example:

    function isPalindrome(x) { 
      
      let palindrome = x.toLowerCase() == x.toLowerCase().split('').reverse().join('') ? true : false
      return palindrome
    
    //Pseudocode: 
    //1. convert input to lowercase
    //2. check if lowercase version of input is equal to reverse of input
    //3. return true or false
  }