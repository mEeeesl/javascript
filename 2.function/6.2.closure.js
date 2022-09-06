const age = 16

//sayAge() // ReferenceError: sayAge is not defined
           // function block에 있으면 찾을 수 없음

//tellAge() //ReferenceError: tellAge is not defined

function init() { // function block - init = 바로 function
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge() // 10
    tellAge() // 10
}

//sayAge()  // ReferenceError: sayAge is not defined
            //function block에 있으면 찾을 수 없음 
//tellAge() // ReferenceError: tellAge is not defined
init()
//sayAge() // function init()이 실행되도 ReferenceError - not defined
//tellAge()// function init()이 실행되도 ReferenceError - not defined

/*
global
age = 16
init = function() 바로됨

local
init() - local, 블록이 있으니 ele객체생김
age = 10
sayAge = fn
tellAge = fn

sayAge = local블록 참조
tellAge = local블록 참조

26번째 줄 init() - 블록있으니 ele객체
init() local 찾아감
19번쨰줄 sayAge = age = 10 출력
20번째줄 tellAge = age = 10 출력

init() 사라짐? 

 */