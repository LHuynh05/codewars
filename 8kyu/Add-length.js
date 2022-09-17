// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.








// MY SOLUTION
function addLength(str) {
    //start-here
      // paramenter: a string of words
      //result: return an array/list with the length of each word added to the element
      //example: Test.assertSimilar(addLength('apple ban'),["apple 5", "ban 3"]);
      //Test.assertSimilar(addLength('you will win'),["you 3", "will 4", "win 3"]);
      //pseudo code: use split to  turn string into array, use map to iterate and return new array and use length method to find the length of each word,
      return str.split(" ").map(s => `${s} ${s.length}`)
      }


// ALT SOLUTION

function addLength(str) {
    var split = str.split(" ");
    var result = [];
     
    for (i = 0; i < split.length; ++i) {
      result.push(split[i] + " " + split[i].length);
    } 
    return result;  
  }