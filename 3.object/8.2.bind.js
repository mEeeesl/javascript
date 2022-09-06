let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet()

//bind  - fn.bind(Object = 객체)
let fn = greet.bind(user) // 여기까지는 call과 공통점
fn() //call은 주어fn을 call하고, bind는 주어fn을 리턴

greet.call(user) // call = 주어fn을 call하니 바로실행
fn() // bind = 주어fn을 리턴해서 let fn에 넣고 fn()을 실행

setTimeout(fn, 100) // I am leo

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

// 과제: fn에 user.greet 할당, greet의 this 엔 user가 담김
fn = user.greet.bind(user)
fn() // I am john

console.log(fn == user.greet) //false
// bind는 새로운 객체를 만들어서 담음

