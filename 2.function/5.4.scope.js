// sayHi() 이걸 여기다 두면 에러, 왜냐면 이 시점에는 name이 없음

let name = 'neo' // 이걸 실행해야 name이 생김
sayHi() // 그래서 이걸 여기다가 둬야함

function sayHi() { // ▶ function declaration 선언 ◀
    console.log('Hi, ', name) // Hi, neo
}

sayHi() // sayHi call, 이건 당연히 되는거

//
// sayHello() 여기다두면 에러, 함수 호출시 아무것도 정의된게 없어서

const sayHello = function() { // ▶ function expression 호출 ◀
    console.log()
}

sayHello() // sayHello call, 이건 당연히 되는거


/*
function declaration
선언 전에, 함수 호출 가능

function expression
호출 전에, 함수 호출 불가능
*/

/* 이거아님 6.1.closure.js 참고
 1. name, sayHi, sayHello 준비
 
 2. name = uninitialize , 
    sayHi = function() 초기화, 펑션 선언문은 펑션 자동 초기화
    sayHello = uninitialize

 3. 1번 줄부터 코드 실행
 
 4. 1번줄의 //sayHi() 실행한다면 ele객체가 생성안되는데 만약 된다면,
   a.block이 실행됐으니, ele객체가 생성됨
   b. record가 지금은 없는 상태
   c. outer는 부모(1번, 2번) 참조
   d. 근데 부모참조해보니, name = uninitialize 상태라 실행불가

 5. let name = undefined
 6. let name = neo

 7. sayHi() 실행시 ele객체가 생성
 8. 부모참조
 9. name ='neo' 가져옴
 10. 'Hi neo' 출력

 */