// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)








// MY SOLUTION
const getNumberFromString = s => +s.replace(/\D/g, "")


// ALT SOLUTION

const getNumberFromString = (s) => parseInt(s.split("").filter(x => "0123456789".includes(x)).join(""))