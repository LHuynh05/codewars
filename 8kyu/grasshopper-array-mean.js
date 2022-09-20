// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4








// MY SOLUTION
var findAverage = function (nums) {
    // Code here
    //parameters: an array of integers
    //result: find the average of all the integers in the array
    //example: Test.assertEquals(findAverage([1, 3, 5, 7]), 4)
    //pseudocode: add the sum of all integers in specified array, I can use reduce for that.  Then divide the sum with the number of elements which can be use as length
    
    return nums.reduce((a,c) => a + c, 0) / nums.length 
  }