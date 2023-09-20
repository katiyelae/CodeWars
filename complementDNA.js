// DESCRIPTION:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//Parameter: take in a string
//Return: a new string with the complementary side of the DNA strand
//Example: 
function DNAStrand(dna){
    let compStrand = ''
    
    for(let i = 0; i < dna.length; i++){
      switch (dna[i]) {
    case 'A':
      compStrand += 'T'
          break;
    case 'T':
      compStrand += 'A'
          break;
    case 'G':
      compStrand += 'C'
          break;
    case 'C':
      compStrand += 'G'
          break;
    }
      }
      return compStrand
  }
  
  //Pseudocode: 
  //1.init a new variable for the complmentary strand
  //2. loop through each letter in the string
  //3. replace with proper letter change
  //4. return the new dna strand