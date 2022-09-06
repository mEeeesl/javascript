function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3)) // 3


//              ▼ 배열 = rest parameter / 파라미터를 여러개 받겠다
add = function(...args) {
    let tot = 0
    for(let arg of args) tot += arg    // forEach 해주는 느낌
    return tot
}

console.log(add(1), add(1,2,3,4,5,6))

// rest parameter rest = 흩어져있는 값을 모으는거
console.log()

function printName(firstName, lastName, ...titles) { //rest parameter는 마지막에 위치해줘야함
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2], titles[100]) // 배열객체명[index]
    console.log(titles.length)
}

printName('Hang', 'Man', 'pilot', 'actor')


// 파라미터가 arguments에 들어감
console.log()

function showName() {
    console.log(arguments.length) 
    console.log(arguments[0], arguments[1], arguments[2])
}

showName()
showName('탑건','메버릭')

console.log(Math.max(1, 2, 3))

//spread: 모아져 있는걸 spread 해버림

let arr = [1, 2, 3]
console.log(Math.max(arr)) // NaN - ...안붙이면 배열이 아니라서, 처리를 못하는거
console.log(Math.min(...arr)) // 1, spread
console.log(Math.max(...arr)) // 3, spread

let arr2 = [4, 5, 6]
console.log(...arr, ...arr2) // 1,2,3, 4,5,6 
console.log(Math.max(...arr, ...arr2)) // 6
console.log(Math.max(0, ...arr, 7, ...arr2, 8)) // 8

// spread 배열객체를 만들때 사용가능
arr = [0, ...arr2, 9]
console.log(arr) // [ 0, 4, 5, 6, 9 ]