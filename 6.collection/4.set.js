// set은 key없이 value만 있다.

let set = new Set()

let user1 = {name:'john'}
let user2 = {name:'pete'}

set.add(user1).add(user2).add(user1) // user1을 두번해도, 자동 중복 제거됨
console.log(set) //Set(2) {size: 2, {name: 'john'}, {name: 'pete'}}

console.log(set.size) // 2
console.log(set.has(user1), set.has(user2), set.has({})) 

console.log(set.delete(user1))
console.log(set) //Set(1) {size: 1, {name: 'pete'}}

//set iterating
set.add(user1)
console.log(set) //Set(2) {size: 2, {name: 'pete'}, {name: 'john'}}

for(let user of set) console.log(user)

set.forEach(val => console.log(val)) // key없이 value만

// 파라미터로 배열넣기
set = new Set([1, 2, 3])
console.log(set)  //Set(3) {size: 3, 1, 2, 3}

// set -> 배열
let arr = Array.from(set)
console.log(arr) //(3) [1, 2, 3]

set = new Set('hello')
console.log(set) //Set(4) {size: 4, h, e, l, o}  - set은 중복자동제거 - (l - 1개)

