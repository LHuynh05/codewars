// Write a function that checks if a given string (case insensitive) is a palindrome.








// MY SOLUTION

function isPalindrome(x) {
    // your code here
    return x.toLowerCase() == x.split("").reverse().join("").toLowerCase()
  }