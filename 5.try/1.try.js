// json = 객체 -> 문자
let json ='{"name": "john", "age": 30}' // json - string = "" 
let user = JSON.parse(json)
console.log(typeof json, typeof user) // string, object 

// try
json = '{age: 30}' // "age"가 아닌 age로 했을 경우
//JSON.parse(json) - SyntaxError

try {   // Error여도 죽지 않게하기
    JSON.parse(json) 
} catch {
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) {
    console.log(e.name, '\n', e.message, '\n', e.stack)
}