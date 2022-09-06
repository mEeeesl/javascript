let promise = new Promise((resolve, reject) => resolve('done'))

// 구문법

/*.then의 첫 번째 인수는 프라미스가 이행되었을 때 
실행되는 함수이고, 여기서 모든 타입을 파라미터로받아, 실행 결과를 받습니다.

.then의 두 번째 인수는 프라미스가 거부되었을 때 
실행되는 함수이고, 여기서 에러객체를 파라미터로받아, 에러를 받습니다. */

promise.then(console.log, console.log)
promise.then(console.log, null) // resolve - 함수실행, reject - null 실행

promise.then(console.log) // resolve만 작동
promise.catch(console.log) // reject만, catch - 에러가 발생한 경우만 다루고 싶을때

// executor는 파라미터 2개를 갖음
// 과제: 1초 뒤에, resolve 하도록 한다.
promise = new Promise((resolve, reject) => { // executor
    setTimeout(() => resolve('done'), 1000)
})

promise.then(console.log, console.log) // handler

//
promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('에러')), 1000)
})

promise.then(result => console.log(result), // <resolve handler
    error => console.log(error)) // <reject handler

//
new Promise((resolve, reject) => 
    setTimeout(() => resolve('완성'), 2000))
    .then(console.log) // 완성
    .catch(e => console.log(e.message))
    .finally(() => console.log('promise가 생성되었습니다.')) // promise가 생성되었습니다.

new Promise((resolve, reject) => 
    setTimeout(() => reject(new Error('미완성')), 3000))
    .then(console.log) // 여기선 then handler는 작동안함 (reject라서)
    .catch(e => console.log(e.message)) // e.message = '미완성'
    .finally(() => console.log('promise가 생성되었습니다.')) // promise가 생성되었습니다.
