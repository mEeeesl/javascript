/* 
    변수는 datatype이 없어서, 문자 숫자 날짜 다 담을 수 있음
    literal은 데이터 타입이 있음
*/


let foo = "I am a string."
foo = 'So am i'
foo = `back tick`

console.log(foo)

/* String type 나타내기
1. ""
2. ''
3. ``
*/

foo = 1
foo = 1.0

console.log(1 / 0) // Infinity
console.log('a' / 1) // NaN ( Not a Number ) - error x

// isFinite = 숫자이면 true , 아니면 false

foo = 1
console.log(foo) // 1
console.log(isFinite(foo)) // true

foo = 'a'
console.log(isFinite(foo)) // false

foo = "1"
console.log(parseInt(foo)) // 1

console.log(parseInt(foo) + 1) // 2

foo = 'a' // NaN
foo = `100px` // 100
foo = +1 + 1 // 2
foo = "123456-789123" // 123456
console.log(parseInt(foo))

foo = `1.6`
console.log(parseInt(foo)) // 1
console.log(parseFloat(foo)) // 1.6

let a = Infinity * 2 // Infinity
let b = NaN * 2 // NaN
console.log(a, b)

a = Infinity * NaN // NaN
console.log(a)

foo = 1n // 자리수가 16자리를 초과하고 싶을때 1n으로 표시, 잘 안씀

const okay = true
const fail = false

let val = null

let val2
console.log(val2) // undefined - error X
val2 = undefined

let id = Symbol('id')
console.log(typeof id) // symbol - id의 타입이 Symbol

val = 1 // number
val = String(val) // string
val = Number(val) // number
console.log(typeof val) 

val = '6' / '2'
console.log(val) // 3 - 자동 캐스팅,   +는 62로 나옴 문자6 문자2

val = false / true
console.log(val) // 0 -> false = 0 / true = 1 자동 캐스팅

val = '1'
val = Number(val)
console.log(typeof val) // number

console.log(Number('1'), Number(true)) // 1
console.log(Number(''), Number(' '), Number(null), Number(false)) // 0
console.log(Number('a'), Number(undefined), Number(NaN)) // NaN

//★ Boolean - 값이 있으면 True & 값이 없으면 False
console.log(Boolean(-1), Boolean('0'), Boolean('a'), Boolean(' ')) // True
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN)) // False
