class CoffeMachine {
    waterAmount // 객체속성 ( class의 속성이 아님.)

    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(CoffeMachine) // [class CoffeMachine]
console.log(Object.keys(CoffeMachine)) // [] ( 속성 X )
console.log(CoffeMachine.prototype) // {} ( {constructor: ƒ} )

let machine = new CoffeMachine(220)
console.log(machine) 
// waterAmount 확인 = class의 속성이아닌, 객체의 속성임을 확인
// CoffeMachine {waterAmount: undefined, voltage: 220}

machine.waterAmount = 1 // 객체.waterAmount(객체속성)
machine.voltage = 100
console.log(machine) // CoffeMachine { waterAmount: 1, valtage: 100 }

// protected ( _속성명 / getter & setter = <accessor>)
CoffeMachine = class {
    _waterAmount 

    get waterAmount() { // getter
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) { // setter
        this._waterAmount = 2 * waterAmount
    }
}
//  protected         protected 설정 후, prototpye에 생김 ▼ getter,setter ▼
console.log(CoffeMachine.prototype) //{constructor: ƒ, waterAmount: <accessor>}

machine = new CoffeMachine()
console.log(machine) // CoffeMachine {_waterAmount: undefined}

machine.waterAmount = 1 // = set waterAmount = 1
console.log(machine) // CoffeMachine {_waterAmount: 2} 
console.log(machine.waterAmount) // 속성 = 1 > setter 1 * 2 = 2 > getter = 2 + 100 = 102

machine._waterAmount = 11 // _waterAmount를 직접 설정
console.log(machine._waterAmount) // 11
