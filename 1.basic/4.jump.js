if(true){} // true이면 {}실행, false면 {}건너뛰기
if(false){} else {} // true이면 else{} 실행

if(undefined) {console.log('!')} // undefined = false이면 {}실행 (Auto Casting) < ★얘 자주씀
if(null) {console.log('1')} // null = false 
if(0) {console.log('1')}
if('') {console.log('1')}

console.log()

if('a') {console.log('1')}
if(-1) {console.log('1')}
if('0') {console.log('1')}
if(' ') {console.log('1')}

console.log()

console.log(true ? 1 : 0)

let val

switch('boo') {  // 한 줄에 명령문이 2개 이상이면 세미콜론(;) 쓰기
    case 'bar' : val = 'bar'; break
    case 'baz' : val = 'baz'
    default: val = 'all right.'
}

console.log(val)


/*
JAVA
if(a == 0) {}

JAVASCRIPT
if(a) {}  
a = true면 {} 실행

★ Boolean - 값이 있으면 True & 값이 없으면 False
console.log(Boolean(-1), Boolean('0'), Boolean('a'), Boolean(' ')) // True
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN)) // False
*/