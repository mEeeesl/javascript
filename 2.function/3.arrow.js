let add = function(a, b) {
    return a + b
}

// 위 코드는, 아래 코드와 같음
add = (a, b) => a + b
console.log(add(1,2))


//
const double = n => 2 * n
console.log(double(2))

const greet = () => console.log('hello')
greet()

//
add = (a, b) => {
    const result = a + b
    return result
}

console.log(add(1, 2))