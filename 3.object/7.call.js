let user1 = {
    name: 'isabel',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

let user2 = {
    name: 'jade',
    age: 15,
    greet() {
        console.log(`I am ${this.age}.`)
    }
}

let user3 = {
    name: 'jhona',
    age: 22,
    greet() {
        console.log(`I am ${this.name}, ${this.age} years.`)
    }
}

user1.greet()
user2.greet()
user3.greet()

// 함수.call이용 , 함수 = 객체
let name = 'morpheus'

function greet() {
    console.log(`I am ${this.name}`)
}

greet() // I am undefined

greet.call(user1) //isabel
greet.call(user2) // jade
greet.call(user3) // jhona
greet.call(name) // I am undefined

//
user2 = {
    name: 'colin'
}

user1.greet()
//user2.greet() // TypeError: user2.greet is not a function

// 과제: user1.greet 을 이용해서, I am colin. 을 출력
user1.greet.call(user2) // colin


user1.greet.call(user3) // jhona
user3.greet.call(user3) // jhona, 22