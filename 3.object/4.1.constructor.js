let makeUser = function(name, age) { // 구버전
    return {
        name: name,
        age: age
    }
}

makeUser = function(name, age) { // 신버전
    return {
        name, // = this.name = name
        age
    }
}

console.log(makeUser('doris', 57))

// 생성자 (첫 철자를 대문자로 표현- 관례)
function User(name) {
    //this = {} 이게 생략된 상태 ( 직접쓰면 에러 )
    this.name = name
    this.greet = () => console.log(`i am ${this.name}.`)
    // return this 이게 마지막에 생략된 상태 ( 직접써두댐 )
}

let user1 = User('bob') // 일반 fn = undefined 
user1 = new User('bob') // 생성자 = User {name: 'bob', greet: ƒ}
console.log(user1)
// return 되는 type은 User type

user1.greet()
console.log(Object.keys(user1)) // ['name', 'greet']

const user2 = new User('sarah')
user2.greet()

//
let str = String(1)
console.log(typeof str) // 일반fn, string type

str = new String(1)
console.log(typeof str) // 생성자, object type

//
let human = new function() { // 생성자내 변수 = this.변수명
    this.name = 'meg'
    this.age = 27
}

console.log(typeof human, human.name, human.age)

//
function BigUser() { // 이렇게 쓸 일은 없음
    this.name = 'amy'
    return {name: 'beth'}
}

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser(), new SmallUser().name) //생성자
console.log(BigUser().name) //일반fn
/* console.log(SmallUser().name)
   TypeError: Cannot read properties of undefined (reading 'name')
   SmallUser().name 하면 Error
   function SmallUser() { }에는 return이 정의되어있지 않아서 Error  
   return이 자동으로 추가되는건 new를 사용했을때다. */
console.log(SmallUser()?.name) //일반fn, undefined

//
const user = new Object()
console.log(user)
user.age = 12 //추가가능
console.log(user.age)

// 복제 = .create(복제할거)
const person = Object.create(user)
console.log(person) // age 안보임
console.log(person.age) // age 12 - 본체 참조
console.log(person == user) // false

person.name = 'mandarin'
console.log(user) // age 12
console.log(person) // name 'mandarin'


/*
객체 생성방법
1. object literal 
- 만들기는 간편하나, hard coding(값이 이미정해짐)

2. constructor = 생성자 new
- 만들기는 번거로우나, 확장성이 높음
*/