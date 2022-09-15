// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4








// MY SOLUTION
function points(games) {
    return (
      games
        // split the game score into two separate values
        .map((game) => game.split(":"))
  
        // calculate the points for this game with a ternary operator
        .map((score) => (score[0] > score[1] ? 3 : score[0] === score[1] ? 1 : 0))
  
        // calculate the sum of all games
        .reduce((acc, cur) => acc + cur, 0)
    );
  }

// ALT SOLUTION 

function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
}