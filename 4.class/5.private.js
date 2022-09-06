// #private  ( protected 발전형 )
class CoffeMachine {
    #waterAmount

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = waterAmount * 2
    }
}
// private & protected 공통점 - getter & setter
console.log(CoffeMachine)
console.log(CoffeMachine.prototype) // {constructor: ƒ, waterAmount: <accessor>} - prototype에 있음

let machine = new CoffeMachine()
console.log(machine) // CoffeMachine {#waterAmount: undefined} 객체속성

machine.waterAmount = 1
console.log(machine.waterAmount) // 102 = setter(1*2) + getter(100)

// private & protected 차이점
// machine.#waterAmount = 1 // SyntaxError 
// machine._waterAmount = 11 // protected는 _waterAmount를 직접 설정가능했었음