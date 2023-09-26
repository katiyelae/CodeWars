// DESCRIPTION:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


//Parameter: take in three integers
//Return: total surface area and volume of the box in an array format
//Example: 
function getSize(width, height, depth){
    let SA = (2*depth*width)+(2*depth * height) +(2*height*width)
    let V = width * height * depth
    
    return [SA, V]
    }
  //pseudocode: 
  //1. find the surface area 
  //2. find the volume
  //3. return a new array with both values inside 