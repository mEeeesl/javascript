let val = 1 + 2 * 3 / 2
console.log(val, 5 % 2, 4**2, 4**(1/2)) 
// ** = 제곱 - 4**2 4의 2제곱
// **(1/2) = 루트

let i = 1
console.log(i++, ++i)
let l = 1
console.log(++l, l++)
console.log(l++, ++l)


let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)
console.log(1 + '2', '1' + '2', 'hello ' + 'world')

// unary plus operator = 문자를 숫자로 변환 = " +'문자' "
console.log(1 + +'2') // 3
console.log(1 + +'true') // NaN

// 논리연산자 and && , or ||        ( Boolean )
console.log(1 || 0, 0 || 1) // 1, 1 
/* 숫자 -> Boolean 
   true || ,  0 || true 
   마지막으로 읽어낸 연산자를 리턴하고 종료 */

console.log(1 && 0, 0 && 1) // 0, 0
console.log(1 && 2) // 2 ture && true
console.log(1 && 2, 2 && 1) // 2, 1

/* 변수 && 펑션 - 변수의 값이 있으면(true), 펑션 실행
    foo && do(foo)  = like if문 */

/* baz가 false이더라도 createBar()가 true면 bar에 값넣음
    bar = baz || createBar()  = like if문 */

let c = 3 - (a = 1 + 2) // 이렇게는 잘 안씀
console.log(c)

let d = 2
d *= 2
console.log(d)

console.log()
console.log('2' > 1)  // true - 자동 캐스팅
console.log('2' > 1, '01' == 1, false == 0, true == 1, ''== false) // true
console.log(true > 1) // false
/*  ▲  '=='  equivalent operator 타입이 달라도, content를 자동 캐스팅해서 비교가능 
    ▼  '===' identical operator  타입이 같아야, 비교 가능 ( 타입 다르면 걍 false ) */
console.log(1 == '1', 1 != '1')   // true, false
console.log(1 === '1', 1 !== '1') // false, true

console.log('z' > 'a', 'aa' > 'a', 'ab' > 'aa', 'bee' > 'be', 'a' > 'A') // true 

console.log(null < 0, null > 0, null == 0) // false
console.log(null <= 0, null >= 0) // true

console.log(undefined < 0, undefined > 0, undefined == 0, undefined <= 0, undefined >= 0) // false
console.log(NaN > 0, NaN >= 0, NaN == 0) //false

console.log(undefined == undefined, null == null) //true
console.log(NaN == NaN) // false