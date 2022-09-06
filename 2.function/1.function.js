function greet() { // 얘를 더 많이 씀
    console.log('hello')
}

greet()

let salute = function() { // 얘보단
    console.log('hi')
}

salute() // hi
console.log(salute) // [Function: salute] 

// 변수명을 동사를 쓴 이유는 펑션을 받을거라서임
let sayHello = function(user, greeting) {  // 변수에는 데이터 타입을 정하지 않음
    return `${greeting}, ${user}` // template literal - 일정양식을 갖춘 데이터이다
}

console.log(sayHello('rebecca', 'hello')) // hello, rebecca

//과제: HI 라고 인사하는 function을 정의하고, 실행하라
console.log()

function greeting() {
    console.log('HI')
}
greeting()

let sayGrt1 = function() {
    console.log('HI')
}
sayGrt1()

const sayHi = function() {
    console.log('HI')
}
sayHi()

const say = sayGrt1
const say1 = sayHi
say()

let sayGrt2 = function(greeting) {
    return `${greeting}`
}
console.log(sayGrt2('HI'))

// js는 이런식으로 많이 함
let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
shout() // 값이 안나옴

let speak = shout()
speak(); // yoo hoo

// 이런 것도 있음 자주는 안씀
(function() {
    console.log('earth')
})()

// 이렇게 자주씀
let myFn = function(fn) {  // 파라미터로 function쓸거라서 fn이라 썻음
    const result = fn()   // 여기서 fn()은 return이 있어야 함
    console.log(result)
}

myFn(function() {
    return 'moon'
})                  // moon


let argFn = function() {
    return 'star'
}

myFn(argFn)         // star

//
                                // ▼ msg 기본값
let showMsg = function(from, msg='no message') {
    console.log(`${from}: ${msg}`)
}
showMsg(`trinity`, 'follow rabbit') // trinity: follow rabbit
showMsg("trinity") // trinity: undefined , 기본값 설정 후 trinity: no message