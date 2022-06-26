// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false







// MY SOLUTION

function XO(str) {
    //code here
  str = str.toLowerCase() // Put str into case insensitive
  
  let strToArray = str.split('') // making the word into an array
  
  let numberOfX = strToArray.reduce((a,c) => a + (c === 'x'), 0)  // counting amount of X
  
  let numberOfO = strToArray.reduce((a,c) => a + (c === 'o'), 0) // counting  amount of O
  
  if(numberOfX == numberOfO){
    return true 
  }else{
    return false
  }  
  
}