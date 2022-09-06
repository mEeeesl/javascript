//object literal 만들기

let user = { // object 데이터 만들기 ( key, value )
    name: 'frances', // entry
    age: 70,         // like 속성, property, attributy
}
// key = string or symbol Type
// value = Anywhere

user = { // user 객체
    name: {
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face',
    age: 13,
    interests: ['music', 'movie', 'novel'],
    sing: () => console.log('lala')
}

console.log(user.name)
console.log(user['nick name'])
console.log(user['name']['first'])
console.log(user.name.first)
console.log(user.age)
console.log(user.interests)
user.sing()

user.name.first = 'john'
user['age'] = 50
console.log(user.name.first, user.age)

let key = 'nick name'
console.log(user[key])
key = 'age'
console.log(user[key])
key = 'interests'
console.log(user[key])

let man = {
    name: 'samuel',
    1: 'one',
    2: 'two'
}

//man.1 - error
console.log(man['1'])