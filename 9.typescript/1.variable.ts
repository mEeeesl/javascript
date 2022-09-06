//TypeScript
let msg: string = 'hello'
// msg = 1 / error - type이 달라서, msg는 string type 이어야함

let val: number = 1
let nullableStr: string | null = null
nullableStr = 'hi'
//nullableStr = undefined / error - undefined는 string type이 아님

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = "ㄹㅁㄹ"
numberOrStringOrNull = null

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0 / error - type error

let anyValue: any = null
anyValue = undefined
anyValue = NaN
anyValue = null
anyValue = 1
anyValue = 'ㅊㅁ'

// 권장하지 않는 TypeScript 방식 ( type을 추론함 )
let a = 1
let b = 'b'
let c = true