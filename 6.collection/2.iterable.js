let range = {
    from: 1,
    to: 3,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },

    next() {
        if(this.current <= this.to)
            return {
                done: false, // done: iterating 실행여부, false면 진행
                value: this.current++
            }
        else
            return {
                done: true // true면 종료
            }
    }
}

// for( of 객체 ) => symbol.iterator 객체 호출 => next메서드 객체 리턴 => value값이 num에 담김
for(let num of range)
    console.log(num) // 1, 2, 3

// generator  = fn* 함수명() {} / 발전된 문법
function* generator() {
    let val = 1
    while(val <= 3) yield val++ // yeild 값(객체) 리턴
}

for(let num of generator())
    console.log(num)

let g = generator()
console.log(g, typeof g) // generator {[[GeneratorState]]: 'suspended'} object

//
function* gen() {
    yield* generator()
    yield* ['a', 'b']
    yield 9
}

for(let val of gen()) 
    console.log(val)