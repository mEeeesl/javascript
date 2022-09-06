let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)


console.log(date1 - date2) // 86400 * 1000s (Number Type으로 자동 캐스팅)

let user = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) { // []= symbol, []안쓰면= string
        return hint == 'string' ? this.name : this.age
    }
    //hint = 변수 = data type 없음 = 아무거나 다 들어올수잇음
}

let user2 = {
    age: 38,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user}`) // amanda, `` '' "" = string type
console.log(user + 50) // 70 (20 + 50),  + 연산자가 있으면 hint값은 default로 바뀜
console.log(user < user2) // true (20 < 38)
console.log(user2 + 50) // 88,  + 연산자가 있으면 hint값은 default로 바뀜

//
user = { // 이렇게 해놔도 new Object 된데
    name: 'neo',
    age: 11,
    toString() { //[Symbol.toPrimitive](){} 가 있으면 사용안하고, 없으면 toString, valueOf 작동
        return this.name
    }
}

console.log(user + '')  // neo
console.log(user.age + 19)  // 30
console.log(user + 100) // neo100

user.valueOf = function() {
    return this.age
}
console.log(user + 100) // 111


// JSON.stringify(객체명) = HTTP 에서, 객체 -> 문자 바꿀때 주로 쓰는 메소드
userStr = JSON.stringify(user) // ★
console.log(userStr) // JSON style = {"name": "neo", "age": 11}
console.log(typeof userStr)

//serializing 객체, date를 외부 자바 시스템에서도 사용할 수 있도록 byte type으로 바꾸는작업
//deserializing serializing된건 객체로 