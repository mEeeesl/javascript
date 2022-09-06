let map = new Map()
//      key,  value
map.set('1', 'hello')
map.set(1, {name: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true))
console.log(map.has('1'), map.has(1), map.has(true), map.has(false)) //has(key) = key가 있는지 여부
console.log(map.size) // 3 / map.size - entry 개수

console.log(map.delete(1), map.delete('1'), map.delete(2)) // delete 성공하면 true
console.log(map) // {size: 1, true => ƒ fn() {}}

map.clear() // 싹 지우기
console.log(map) // Map(0) {size: 0}

//
map = new Map()
map.set(1, 'emelia').set(2, 'avery').set(3, 'adela')
console.log(map)

// map iterating     파라미터로 배열을 넣음
let greens = new Map([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(entry)

// map.keys() - key를 , map.values() - value를 뽑아냄
let keys = greens.keys()
console.log(keys)

for(let key of keys)
    console.log(key)

let values = greens.values()
console.log(values)

for(let value of values)
    console.log(value)

greens.forEach((val, key) => console.log(key, val))

// Object -> Map = Object.entries(객체명)
let user = {
    name: 'aiden',
    age: 50
}

let entries = Object.entries(user)
console.log(entries) // [ [ 'name', 'aiden' ], [ 'age', 50 ] ]
console.log(new Map(entries)) // Map(2) { 'name' => 'aiden', 'age' => 50 }

// Map -> Object = Object.fromEntries(map명)
map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

fruits = Object.fromEntries(map)
console.log(fruits) // { apple: 1, orange: 2, pear: 3 }
