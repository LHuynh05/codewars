// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


// MY SOLUTION

//PARAMETER: an array of numbers, can be in consecutive pairs
//RESULT: Sum the differences between consecutive pairs of numbers in the array in descending order.
//EXAMPLE: Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2)
//Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
//PSEUDO CODE: take the consecutive numbers of the array and find the difference, then sum the total.

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
    }

