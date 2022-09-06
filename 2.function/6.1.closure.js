const age = 16

//sayAge() // TypeError: sayAge is not a function 
           //not defined가 아님, 즉 데이터까지 다 있는상태

//tellAge() // ReferenceError: tellAge is not defined
          //선언되지 않아서 못 찾음

console.log(sayAge) // undefined - 펑션type이 아닌, 데이터가 있는상태
console.log(typeof(sayAge)) // undefined

// console.log(hello) // ReferenceError: hello is not defined

{ // 일반 block
    let age = 10

    function sayAge() { // sayAge = undefined > function
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge() // 10
    tellAge() // 10
}

sayAge() // 10
// tellAge() //ReferenceError: tellAge is not defined = 위에서 쓰나 여기서 쓰나 마찬가지
console.log(typeof(sayAge)) // function


/*
펑션 선언문
function declaration

*/

/*
부모1-global scope 에 age 생김
age = uninitialize
age = undefined
age = 16
sayAge = undefined

부모2-local scope 블록 나왔으니 ele객체 생성
ele객체에
age = uninitialize -> undefined -> 10
tellAge = uninitialize -> age = 10

부모1- sayAge = undefined -> function() -> age = 10

25번째줄 sayAge() 블록나왔으니 ele객체 생성
부모1(global) sayAge를 참조하니,
부모2로 인해 sayAge가 undefined -> function이 되었으니,
부모2(locakl)를 참조해서
age = 10가져옴


26번째줄 tellAge()
부모2(local) 참조해서
age = 10 가져옴
호출하고 사라짐

부모2(local)은 지금
age 10
tellAge가 있는데 
부모1에 sayAge- Function이 있으니 
부모2(local)은 사라지지 않음

29번쨰줄 sayAge는 부모2를 찾아가서
sayAge - age = 10을 호출

30번쨰줄 tellAge는 이미 사라져버려서 에러임

closure = 외부에있는 변수를 참조할 수 있는 function(함수)이다.

*/