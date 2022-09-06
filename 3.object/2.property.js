let user = {}  // 객체 생성

//속성 추가
user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

//속성 삭제
delete user.weight
console.log(user.height, user.weight)

// 속성이 있는지 여부파악 - true & false
console.log('height' in user, 'weight' in user)

// 속성값 전부 리턴
for(let key in user) console.log(user[key])

user.name = 'parker'
console.log(Object.keys(user)) // key  - ['height', 'name']
console.log(Object.values(user)) // value - [200, 'parker']
console.log(Object.entries(user)) // entry(key + value)

// value를 fn으로
user = {
    greet: function() {console.log('hello')}
}

user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

// optional chainning   = ' ? '
// ? => 값이 없으면 error처리가 아닌, undefined가 나오게함
user = {}
let address= {}
user.address = address // user에 address 추가하고 그값을 그대로 쓴다
address.street = 'sejong'
console.log(user.address.street)
console.log(user.city) // undefined
//console.log(user.city.name) // TypeError: Cannot read properties of undefined(reading 'name')
console.log(user.city?.name) // undefined, name까지 가지 않음

//
let street
//street = user.city.street // error undefined (reading 'street')
street = user?.city?.street 
console.log(street)
street = user?.city?.street ?? 'where' 
console.log(street) //optional chaining의 기본값 지정(undefined 일때)

//user?.addrees = 'sejong' // error Invalid left-hand side in assignment
//할당연산자 오른편에 써야함

user = null
//user.greet() // Cannot read properties of null
user?.greet // where
console.log(user?.greet) // optional chainning 정상작동

user = undefined
//user.greet() // Cannot read properties of undefined

//
user = {}
//user.greet() // user.greet is not a function
user.greet?.() // undefined
console.log(user.greet?.()) // undefined
// ? => 값이 없으면 error처리가 아닌, undefined가 나오게함