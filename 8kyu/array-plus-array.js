// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.








// MY SOLUTION

function arrayPlusArray(arr1, arr2) {
    // parameter: array of only integer numbers
    // result: return sum of all their elements in both arrays
    // examples: assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    // pseudo code: i want to add each element in each array then add the total of that to the two separate arrays to ge the sum.  I can use reduce to do so.
    return arr1.reduce((a,c)=> a + c, 0) + arr2.reduce((a,c)=> a + c, 0)
  }