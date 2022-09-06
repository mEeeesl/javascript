/* 과제
산술 연산 함수 만들기

1. (값1, 값2, 연산자)가 parameter
2. parameter value 들은 string
3. 연산자는 -, *, /
4. client가 연산자를 안정하면, * 을 연산자로 쓴다.
5. 연산 결과값을 return
*/

let calculate = function(a, b, op = '*') {
    let result

    switch(op) {
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b;
    }

    return result
}
console.log(calculate('1', '2', '-'))
calculate('2', '2')