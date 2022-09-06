//destruct - 구조분해할당

let arr = ['ilya', 'kantor']
let [name, surname] = arr
console.log(name, surname) // ilya kantor

let [one, two] = [1, 2, 3]
console.log(one, two) // 1 2

let [three, four] = [3]
console.log(three, four); // 3 undefined

//쉼표를 사용하면 필요하지 않은 배열 요소를 버릴 수 있다.
[one, , three] = [1, 2, 3, 4]
console.log(one, three) // 1 3

// 문자는 배열
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c) // a = i , b = space, c = a

// split - 문자를 배열로 바꾸는데, token으로 쪼갤때 
i = s.split(' ')
console.log(i); // ['i', 'am']

[a, b, c] = i
console.log(a, b, c) // a = i, b = am, c = undefined

//
/*
할당 연산자 좌측엔 뭐든지 올 수 있다.
할당 연산자 좌측엔 ‘할당할 수 있는(assignables)’ 것이라면 
어떤 것이든 올 수 있습니다.
아래와 같이 객체 프로퍼티도 가능.
*/

let user = {};                        // ▼token ▼구분자
[user.name, user.surname] = 'john smith'.split(' ')
console.log(user) // {name: 'john', surname: 'smith'}

// 
user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user)
console.log(entries) // 배열로 이터레이팅

console.log('----------------')

for(let entry of entries) console.log(entry)
for(let [key, value] of entries) console.log(key, value)

// map iterating
let map = new Map([ // key, val
    ['name', 'deith'],
    ['age', 30]
])
//배열을 맵으로 iterating
for(let [key, val] of map) console.log(key, val)

// 두 변수에 저장된 값을 교환할 때 구조 분해 할당을 사용할 수 있다.
let guest = 'jane'
let admin = 'dannyh';

[guest, admin] = [admin, guest]
console.log(guest, admin); // dannyh jane

//
[one, two, ...rest] = [1, 2, 3, 4]
console.log(one, two, rest); // 1 2 (2) [3, 4]

// 일치하지 않을때 기본값 지정
[name, surname='annonymous'] = ['john']
console.log(name, surname) // john annonymous

// 객체 분해하기
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options
console.log(title, height, width); // menu 200 100

({title, height, width} = options)

let {width: w, height: h} = options
console.log(w, h) // 100 200

let {title: t, ...others} = options
console.log(t, others) // menu {width: 100, height: 200}

// wide라는 key 생성(및 수정)
let {title: subject, wide = 1000} = options
console.log(subject, wide, height)

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extar: true
}

// 과제: bread에서 size와 items를 뽑아내라
let {size, items} = bread
console.log(size, items)

//
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2)

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title:name, items: [item1, item2]}) {
    console.log(name, item1, item2)
}
