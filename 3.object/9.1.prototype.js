//객체들은 prototype이라는 속성을 base로 갖고있음.
//Object prototype을 base로 상속받고있음 

let animal = {
    isAlive: true // prototype이라는 property(속성)이 자동생성되고 숨겨짐
}

function Rabbit(name) { //fn도 객체. 
    this.name = name // prototype이라는 property(속성)이 자동생성되고 숨겨짐
}
//prototype은 숨겨져있는데 사용할 수 있게 별명이 있음. 별명 = prototype
console.log(Rabbit.prototype) // {} - function의 부모는 Object임을 확인
// {contructor: f}

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive) // undefined, labbit에는 지금 isAlive가 없음

//
Rabbit.prototype = animal
console.log(Rabbit.prototype) // {isAlive: true} 
console.log(typeof Rabbit.prototype) // object

rabbit = new Rabbit('white')
console.log(rabbit.isAlive) // true ,
// labbit에는 isAlive가 없는데,
// 부모를 찾아가니 있음. 17번째 줄

//
function Duck(name) { //prototype 객체 자동생성된상태
    this.name = name
}

console.log(Duck.prototype) // {constructor: f}
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck) // true

let duck = new Duck('duck')
console.log(duck.__proto__) // = getter, {constructor: f} ,  prototype에 접근하는 메소드?
console.log(duck.__proto__.constructor)
console.log(duck.__proto__.constructor == Duck) // true

let duck2 = new Duck(`duck2`)
console.log(duck2.__proto__ == duck.__proto__) // true

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck') //부모한테 없으니 prototype객체의 constructor를 참조




 /* 6번째 줄 실행시

 function Rabbit() 실행하면

 fn객체가 생김. ( 모든 객체, 생성자는 다 prototype이 생김 )
모든 객체에는 prototype이라는 속성이 생기고 ( 부모 )
prototype이라는 새로운 주소가 생김. ( 자식 )

자식(prototype)에는 constructor라는 속성이 있음,
constructor의 속성값은 부모의 주소값을 참조함.

그래서, 6번째 줄 실행하면 나오는 값은
{constructor: f} 

{} = 객체를 나타내는것
constructor = 자식(prototype에 있는 기본 속성)
f = function( 부모의 Rabbit 이라는 function)
 
 */

/* 13번째 줄 실행시



*/

/* 20번째 줄 실행시
생성자 new Rabbit은 부모꺼 prototype 가져옴
근데 부모가 Rabbit.prototype = animal상태임 (17번째줄)
그러니 console.log(rabbit.isAlive) 하면 true가 나옴 
 */