let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr) //[1, 'hello', true, {…}, ƒ, ƒ]
//[1, 'hello', true, {age: 3}, [Function: fn], [class A]

arr = [null, undefined, NaN]
console.log(arr) //[null, undefined, NaN]

//
arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr) // ['a', …, 'c']
console.log(arr[1]) // undefined

console.log(arr.length) // 3

// matrix = 2차원 배열 ( 행과 열 통일 )
let matrix = [  // 2열 2행 matrix
    [1, 2],
    [3, 4]
]

// 배열명.concat(배열명)
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(c) // [1, 2, 2, 3] 2개의 배열을 갖고있는 1개의 배열

// 배열명.push() - stack
arr = [] 
arr.push(1) 
arr.push(2)
arr.push(3)

// FILO - 배열명.pop() - 꼭대기에 있는 값을 얻어냄 - stack
console.log(arr) // [1, 2, 3]
console.log(arr.pop()) // 3
console.log(arr) // [1, 2]
console.log(arr.pop()) // 2
console.log(arr) // [1]

// FIFO - 배열명.shift()
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr) // [1, 2, 3]
console.log(arr.shift()) // 1
console.log(arr) // [2, 3]

// slice & splice 구분기준 - retrun 여부

// slice - index 이전값 삭제 후, 새로운 배열생성 / return함 = 기존값 안건드림
a = [0, 1, 2]
b = a.slice(1) 
console.log(b, a) // [1, 2] / [0, 1, 2]

// splice - (시작index, 지울개수, 삭제 후 거기에 넣을것들) / return안함 = 기존값까지 건드려짐
arr = [0, 7, 8, 5]
arr.splice(1, 2, 1, 2, 3, 4)
console.log(arr) // 0, 1, 2, 3, 4, 5, 

// indexOf
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))

arr.splice(arr.indexOf('b')) // 시작index ~ 끝 삭제
console.log(arr) // ['a']

arr = ['a', 'b', 'c', 'd']
arr.splice(arr.indexOf('b'), 1) // 'b' index= 1 시작, 지울개수 1
console.log(arr)

//
arr = [4, 3, 1, 2]
console.log(arr) // [4, 3, 1, 2]
let s = arr.sort() // 오름차순 정렬 + 리턴함(= 기존값 건들임)
console.log(arr, s) // [1, 2, 3, 4] / [1, 2, 3, 4] 
// 과제: sort가 리턴한 s가 arr 인지, 확인
console.log(s == arr)

arr = [8, 11, 22, 34, 9]
console.log(arr.sort()) // [11, 22, 34, 8, 9]
//sort() = 원소를 string으로 취급

console.log(arr.sort((a, b) => a - b)) // [8, 9, 11, 22, 34] a-b 오름차순
console.log(arr.sort((a, b) => b - a)) // [34, 22, 11, 9, 8] b-a 내림차순

//
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i]) // a, b, c

for(let key in arr) console.log(key) // 0, 1, 2 / key = index

// 원소를 출력하라.
console.log(Object.values(arr)) // ['a', 'b', 'c']
for(let key in arr) console.log(arr[key]) // a, b, c
for(let val of arr) console.log(val) // a, b, c

// 
console.log('----------')
function print(e) {
    console.log(e)
}

function print2(e, i) { // e - elements , i - index
    console.log(`[${i}]: ${e}`)
}

function print3(e, i) {
    console.log(`[${i}]: ${e.toUpperCase()}`)
}

function print4(e, i, arr) { // 원소들을, 대문자로 변환
    arr[i] = e.toUpperCase()
}

arr = ['a', 'b']

arr.forEach(print)

arr.forEach(print2)

arr.forEach(print3)

arr.forEach(print4)
console.log(arr)

// 배열.map
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2)
console.log(arr, arr2)

//
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName => 
            console.log(this.title, ':', studentName))
    }
}

group.list()

//배열명.join /  Array -> String
arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(greeting) // hello,world,2
console.log(typeof greeting)

console.log(arr.join('/')) // hello/world/2
//과제: join()에서 'helloworld2' 리턴
console.log(arr.join(''))

//
arr = [1, 2, 3]
str = arr.toString() // 1, 2, 3
console.log(str, '/', typeof str) // 1,2,3 / string

//
str = JSON.stringify(arr) // [1,2,3]
console.log(str, '/', typeof str) // [1,2,3] / string