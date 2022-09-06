function sum(a: number, b: number): number { // 리턴타입 number
    return a + b
}

console.log(sum(1, 2))

//                                     ▼ optional
function add(a: number, b: number, isDouble?: boolean): number {
    const sum = a + b
    return isDouble ? sum * 2 : sum
}

let result: number = add(1, 2) // 3
result = add(1, 2, true) // 6
console.log(result)

//
function greet(name: string, nullable?: boolean): string | null {
    if(nullable) return null
    else return `Hello, ${name}.`
}

let greeting = greet('cain') // Hello, cain
greeting = greet('cain', true) // null
console.log(greeting)