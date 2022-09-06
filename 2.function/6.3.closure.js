function makeFn() {
    let name = 'parker'

    function displayName() {
        console.log(name)
    }

    return displayName
}

let myFn = makeFn()
myFn()

/*
A.global 객체
makeFn = fn (environment - global)
myFn = uninitialize

(11번째줄 makeFn() 실행시)
B.local 객체
Fn을 실행시켜서 생겼기에 outer는 global 객체
name = uninitialize -> parker
displayName = fn (environment - local)
11번째줄 myFn에 리턴값 저장 ( myFn - global인데 outer는 local)

12번째 실행시
C.myFn() 객체
outer값은 B.local 객체(참조)
B.local에 name = parker -> return displayName
=>리턴값 : parker

*/