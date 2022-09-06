// Symbol
let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')
let id3 = id1

console.log(id, id1, id2)

console.log(id1 == id2) // false = 새로운 Symbol을 만드려면 let해서 새로 선언해주기
console.log(id1 == id3) // true

console.log(typeof id) // symbol
console.log(id.toString()) // 'Symbol()'
console.log(typeof id.toString()) // string

console.log(id1.description, id2.description, id.description, id3.description)

let user = {
    name: 'neo'
}

let userId = Symbol('userId')
user.userId = 1
user[userId] = 2 // 19번째줄 userId = Symbol타입

console.log(user)

// 과제: user 객체를 iterating 해서 value 들을 출력하라.
for(let key in user) console.log(user[key]) // neo , 1  = values
for(let key in user) console.log(key) // name, userId   = keys
console.log(Object.values(user)) // ['neo', 1]          = 

// global symbol registry
id1 = Symbol.for('id')
id2 = Symbol.for('id')
console.log(id1 == id2) // true = 새로 let 으로 선언안하면 공유

let key = Symbol.keyFor(id1)
console.log(key, typeof key)

//
id1 = Symbol.for('name') // Symbol.for = global symbol = key
id2 = Symbol('name') // Symbol = local symbol = description != key 
console.log(id1 == id2) // false

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))