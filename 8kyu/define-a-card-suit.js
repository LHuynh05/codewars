// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'








// MY SOLUTION
function defineSuit(card) {
    // good luck
    //Parameter. given a string with 2 characters, the second char is a symbol which is a card suit (four suits)
    //Result. return a string of the name of the suit in lowercase letter only
    //Examples: ('Q♠'), 'spades')); ('9♦'), 'diamonds')); ('J♥'), 'hearts'));
    //Pseudocode: can use conditional statement, or object with key valued and pop the last value out or use includes method
    
    if(card.includes("♠")) return 'spades';
    if(card.includes("♣")) return 'clubs';
    if(card.includes("♥")) return 'hearts';
    if(card.includes("♦")) return 'diamonds';
  }