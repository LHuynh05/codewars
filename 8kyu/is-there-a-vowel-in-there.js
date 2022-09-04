// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.








// MY SOLUTION
function isVow(a){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return a.map(code => vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code )
    }