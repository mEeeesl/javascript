//fn = 객체              // ▼ rest 파라미터 = 객체
function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name) 
//fn에는 기본으로 length, name이라는 속성이있고 
//name의 값은 fn명이다.
console.log(sayHi.length) // 파라미터 수 ?

//
let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

//
sayHi = function() {
    let count = 100 // 지역변수일뿐 fn의 속성은아님
    console.log(`hi`)
    sayHi.count++   // NaN
}

sayHi()
console.log(`call count: ${sayHi.count}`) //NaN

sayHi.count = 0 // count = 0 (count 속성이 이제 생김)
sayHi() // count = 1
sayHi() // count = 2
console.log(`call count: ${sayHi.count}`)