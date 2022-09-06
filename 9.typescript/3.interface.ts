// interface = 나만의 type 만들기
interface Profile { // profile type
    id: number
    username: string
    nickname: string    
}

function printUsername(profile: Profile) {
    console.log(profile.username)
}

const profile: Profile = { //객체라서 ',' 찍어야함
    id: 1,
    username: 'cain',
    nickname: 'hero'
}

printUsername(profile)
console.log(typeof profile) // object

//
interface Relationship {
    from: Profile 
    to: Profile
}

const relationship: Relationship = { // Relationship type
    from: { // Profile type
        id: 1,
        username: 'cain',
        nickname: 'hero'
    },
    to: { // Profile type
        id: 2,
        username: 'abel',
        nickname: 'warrior'
    }
}

//
interface Account extends Profile { // Profile상속받은 Account type
    email: string
    password: string
}

// 과제: {} 안을 채워라.
const account: Account = {
    id: 3,
    username: 'jn',
    nickname: 'm',
    email: 'g@k.com',
    password: 'n'
}

printUsername(account)

//
interface User {
    id: number
    username: string
    photoUri?: string // optional
}

let user: User = {
    id: 1,
    username: 'abel',
    //photoUri:
} // { id: 1, username: 'abel' }

user = {
    id: 1,
    username: 'abel',
    photoUri: 'face.jpg'
} // { id: 1, username: 'abel', photoUri: 'face.jpg' }  

console.log(user)

// interface에 method 지정
interface Shape {
    getArea(): number
    getPerimete(): number
}

class Circle implements Shape {
    constructor(private radius: number) {}

    getArea() { //Override   , 리턴타입 생략해도 실행되고 있는거       
        return Math.PI * Math.pow(this.radius, 2) //PI * R제곱
    }

    getPerimete(): number { //Override
        return 2 * Math.PI * this.radius // 2*PI*r
   }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number){}

    getArea(): number {
        return this.width * this.height
    }

    getPerimete(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4, 6)

console.log(circle.getArea(), rectangle.getPerimete())