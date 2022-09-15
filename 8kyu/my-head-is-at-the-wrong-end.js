// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!








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