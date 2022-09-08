// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]








// MY SOLUTION

//PARAMETERS: an array of varying length containing string values
//RESULTS: an arrays of string containing the original values with the line number and a colon + space in front
//EXAMPLES: it("test", () => {
    // assert.deepEqual(number([]), [], 'Empty array should return empty array');
    // assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');
//PSEUDO CODE: iterate over each array value and prepend the line number (starting with one), and add a colon and a space between the line number and the value


var number=function(array){
    //your awesome code here
    return array.map((line, index)=>{
      return `${index + 1}: ${line}`
    })
  }