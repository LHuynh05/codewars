// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.








// MY SOLUTION
function stringClean(s){
    return s.split('0').join('')
        .split('1').join('')
        .split('2').join('')
        .split('3').join('')
        .split('4').join('')
        .split('5').join('')
        .split('6').join('')
        .split('7').join('')
        .split('8').join('')
        .split('9').join('');
  }




// Alt solution
function stringClean(s){
    // Function will return the cleaned string
    return s.replace(/\d/g, "")
  }

  // ALT SOLUTION
  function stringClean(s){
    const nums = "1234567890"
    let cleanStr = ""
  
    for (let i = 0; i < s.length; i++) {
      if (nums.includes(s[i])) continue
      else cleanStr += s[i]
    }
    
    return cleanStr
  }