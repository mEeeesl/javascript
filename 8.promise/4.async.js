async function f() { // Promise 실행 및 Promise 값 리턴
    return 1 // result 값 리턴
}
f().then(console.log) // 1

f = async function() {
    return Promise.resolve(2)
}
f().then(console.log) // 2

f = async function() {
    return Promise.reject(new Error(3))
}
f().catch(e => console.log(e.message)) // 3

// await - async function 에서만 정상작동
f = async function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 1000)
    })
    let result = await promise // promise가 끝날때까지 기다리겠다
    console.log(result)
}
f() // 4 - 1초 뒤

//
class Waiter {
    async wait() { // 요리가 끝날때까지 기다렸다가 리턴
        return await Promise.resolve('cooked bread.')
    }
}

new Waiter().wait().then(console.log)

/** fn의 종류
 * 일반 fn,
 * 생성자 fn,
 * generator fn,
 * async fn
 */