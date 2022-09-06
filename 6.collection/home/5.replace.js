let user = {
    name: 'john',
    age: 12
}

let user2 = {
    name: 'abel',
    age: 50
}

//
let {name} = user2
let {age} = user;

[user.name, user.age] = [name, age]
console.log(user) // {name: 'abel', age: 12}