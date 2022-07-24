// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"








// MY SOLUTION

function spinWords(sentence){
    const sentenceArray = sentence.split(' ');
    let result = '';
    sentenceArray.map((str, i) => {
      if (str.length >= 5){
        sentenceArray[i] = str.split('').reverse().join('');
      } else {
        sentenceArray[i] = str;
      }
    result = sentenceArray.join(' ');
    });
  return result;
  }