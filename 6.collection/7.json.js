// serializing
let user = {
    name: 'kelly',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null
}

let json = JSON.stringify(user)
console.log(json)

//
user = {
    name: 'jessie',
    room: {
        number: 23,
        participants: ['john', 'ann']
    },
    geret() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: null
}

console.log(JSON.stringify(user))
//fn, Symbol, undefined는 무시(리턴안함)

//
let room = {
    number: 23
}

let meetup = {
    title: 'conference',
    room
}

console.log(JSON.stringify(meetup)) // "room":{"number":23}

room.toJSON = function() { return this.number }
let s = JSON.stringify(meetup)
console.log(s) // "room":23

// parsing (뭉탱이로 묶음 = 여기서는 객체화)
let manJson = '{"name": "will", "age": 27, "mager": ["computer", "art"], "friend": {"name": "scott", "age": 27}}'
let man = JSON.parse(manJson)

console.log(man)
console.log(typeof man)

//serializing? 먼저해놓고 전달해서 parsing해서 업무진행하래