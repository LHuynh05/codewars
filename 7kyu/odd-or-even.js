Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!



// MY SOLUTION

//PARAMETERS: an array of integers, or an empty array
//RESULTS: whether the sum of the array element is even or odd, displayed as the word "even" or "odd"
//EXAMPLES: it('Edge tests', () => {
//     assert.strictEqual(oddOrEven([0]), 'even')
//     assert.strictEqual(oddOrEven([1]), 'odd')
//     assert.strictEqual(oddOrEven([]), 'even')
//   });
  
//   it('Even tests', () => {
//     assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
//     assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
//     assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
//   });
  
//   it('Negative Even tests', () => {
//     assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
//     assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
//     assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
//   });

//PSEUDO CODE: use reduce method to sum the array elements and then check whether it is odd or even using modulus, then return the appropriate string value. 

function oddOrEven(array) {
    return array.reduce((a,c) => a + c, 0) % 2 ? 'odd' : 'even'
}
  