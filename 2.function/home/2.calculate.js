/* 과제:
1. calculate.js를 callback으로 refactoring
- * / 연산으로 callback으로 처리
*/

function minus(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function calculator(a, b, op=multiply) {
    return op(a, b)
}

console.log(calculator(1, 2,minus),
            calculator(1, 2, multiply),
            calculator(1, 2,divide),
            calculator(1, 2));
