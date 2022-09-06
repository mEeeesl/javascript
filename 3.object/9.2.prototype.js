//// 9.3 부터는 prototype 중 잘 쓸내용이래
let obj = {} // => let obj = new Object()

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype) // true
console.log('----------------------')

obj = new Object()
console.log(Object.prototype)
console.log(obj.__proto__)
console.log(Object.prototype.__proto__) // null , 생성자의 prototype의 prototype = null

console.log(obj.toString()) // [object Object]

/* Array.prototype.__proto__ == Object.prototype
  모든 생성자의 prototype의 prototype들은, Object.prototype을 상속받음
  Object.prototype에는 toString이라는 함수가 있음
  이걸 상속받음 모든 생성자의 ptoyotype은 */

let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == Array.prototype) // true
console.log(arr1.__proto__ == arr2.__proto__) // true
console.log(arr1 != arr2) // true

console.log(Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype) //true

console.log(arr2.toString()) // 1, 2

//
let one = new Number(1)
console.log(one.toString()) // 1

// Object.prototype의 toString을 상속받아서 쓸수있음,
function User() {} //toString을 만들지않음
let user = new User()
console.log(user.toString()) //[object Object]
console.log(obj.toString())  //[object Object]
