//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".








// MY SOLUTION
function problem(x){
    //your code here
    return isNaN(x) || x === "" ? "Error" : (x * 50) + 6;
  } //return if x is not a number or x is a string : return "Error" otherwise return x*50 + 6


  function problem(x){
    return typeof x === "number" ? x * 50 + 6 : "Error";
  } // if x is a number return a string named number "number"