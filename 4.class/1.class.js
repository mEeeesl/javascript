class User {  // sugar syntax
    constructor(name) {
        this.name = name
    }

    introduce() { // prototype에 함수저장
        console.log(`I am ${this.name}.`)
    }
}

let user = new User('john') // 이건 생성자, 일반 fn으로도 사용가능
console.log(user.name)
user.introduce()

//[[isClassConstructor]]: true,  Class는 new 생성자를 이용해야만한다. ( 일반fn으로 사용불가 )
//User('john') // TypeError: Class constructor User cannot be invoked without 'new'

//
User = class {
    name // class field, 굳이 안써도됨, Java Style = 변수선언 먼저해줘야 됨
    age // JavaScript Style = 변수선언 따위 안해도 쓸 수 있음

    constructor(name, age) { // 생성자
        this.name = name
        this.age = age
    }

    introduce() { //prototype에 fn이 저장됨
        console.log(`${this.name} / ${this.age}`)
    }
}

user = new User('abel', 12)
user.introduce() // abel / 12  , prototype 참조
console.log(user.name) // abel
console.log(User.prototype.name) // undefined - name은 class field이며, prototype이 아닌, User에 저장
new User('abel', 12).introduce() // abel / 12

//class field는 User에 저장되고, fn은 prototype에 저장됨

//
function makeClass(pharse) {
    return class {
        sayHi() {
            console.log(pharse)
        }
    }
}

User = makeClass(' hello') // User는 class니까 makeClass의 return type도 class

new User().sayHi()