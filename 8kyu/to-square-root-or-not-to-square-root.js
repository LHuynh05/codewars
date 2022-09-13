// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.








// MY SOLUTION

function squareOrSquareRoot(array) {
    //parameter: an array of integers
    //result: process every number from the array, if number has an integer square root, return that number, otherwise if not, square the number
    //example: var input = [ 4, 3, 9, 7, 2, 1 ];
      //var expected = [ 2, 9, 3, 49, 4, 1 ];
    //pseudo: using map function to create new array, then use a conditional to see if the number integer has an integer square root or not
    
   return array.map(element => Math.sqrt(element) == Math.sqrt(element).toFixed(0) ? Math.sqrt(element) : element * element )
    
  }