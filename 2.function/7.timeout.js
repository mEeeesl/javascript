function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) // 1초 뒤 결과값, 값은 갖고있다가 1초 뒤 나타내줌?

//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

//
let timeId = setTimeout(() => console.log('hoo'), 3000)

clearTimeout(timeId) // 제거시키기, hoo는 결과값 안나옴
