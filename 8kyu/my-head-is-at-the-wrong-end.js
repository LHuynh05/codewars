








// MY SOLUTION
function fixTheMeerkat(arr) {
    //your code here 
   //parameter: an array of strings, three elements
   //results: return array by switching the ordering of the 1st element and the 3rd element
   //Example: assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
   // Pseudo: reverse the array in place is what i'll try to do 
     return arr.reverse()
     
   }

// ALT SOLUTION
function fixTheMeerkat(arr) {
    return [arr[2], arr[1], arr[0]];
  }