let animal = {
    name: 'animal'
}

animal = new Object()
animal.name = 'animal'

// 과제: 토끼를 object literal 및 생성자로 만들어라.
//       퇴는 age = 3 property를 갖고 있다

let rabbit = { // object literal
    age: 3
}

rabbit = new Object() // 생성자1
rabbit.age = 3

rabbit = new Object({ // 생성자2 - 이건 안쓸듯
    age: 3
})

console.log(rabbit.age)

console.log(animal.__proto__) // = Object.prototype
console.log(rabbit.__proto__) // = Object.prototype

console.log(animal.name, rabbit.age)// 6번째줄 'animal'

rabbit.__proto__ = animal
console.log(rabbit.__proto__) // {name: 'animal'}  객체
console.log(rabbit.name, rabbit.age) // name = animal를 참조

//
animal = {
    walk() {
        console.log('animal walk.')
    }
}

rabbit = { // animal 상속
    __proto__: animal
}

rabbit.walk()

//
let user = {
    name: 'user'
}

let administrator = { // user 상속, A is a B
    __proto__: user
}

console.log(administrator.name) // user에서 name을 참조

administrator.name = 'jonadan'
console.log(administrator.name) // adminitrator에 name이 있으니, 그걸 사용

//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat() // animal eat
rabbit.eat() // rabbit eat
lion.eat()   // lion eat
console.log(animal.weight, 
    rabbit.weight, lion.weight) // 50 50 50

//
console.log(Object.keys(rabbit)) // (1) ['name']

// 과제: rabbit의 key 들을 iterating
for(let key in rabbit) console.log(key) // name weight eat

for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key) 
    if(isOwn) msg = `child's key: ${key}`
    else msg = `parent's key: ${key}`
    console.log(msg)
}