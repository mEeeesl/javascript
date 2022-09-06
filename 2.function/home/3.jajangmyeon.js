/* 과제
 * 2. callback.js의 짜장면을
 * => function 으로 refactoring
 */
/*
let waiter = function(food, chef) { // chef가 callback
    return chef(food)
} 
*/
let chef1 = food => `달콤한 ${food}.\n`

let chef2 = food => `매운 ${food} \n`

let waiter = (food, chef) => chef(food)

console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2),
            waiter('짬뽕', chef2))
