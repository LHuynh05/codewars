// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.












// MY SOLUTION
function lovefunc(flower1, flower2){
    // moment of truth
    let tim = flower1
    let sarah = flower2
    for(i = 0; i <= tim.length; i++)
     return tim[i]
    for(i = 0; i <= sarah.length; i++)
     return sarah[i]
     
     if(tim % 2 === 0 && sarah % 2 !== 0){
        return true
     }else if(tim % 2 !== 0 && sarah % 2 === 0){
        return true
     }else{
        return false
     }
}
console.log(lovefunc(5, 5))
