class Animal { // new 없이 생성 불가
    constructor(name) { // 객체를 만들어주는 생성자 메소드
        this.name = name // 초기화
    }

    run(speed) { // prototype에 함수 저장
        this.speed = speed // name, speed는 this.객체(new Class)에 존재한다.
        console.log(this.name, this.speed, ' run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, ' stop')
    }
}

let animal = new Animal('Dog')
console.log(animal) // Animal 객체 {name: 'Dog'}

animal.run(10)
console.log(animal) // Animal 객체 {name, speed : 10}
animal.stop()
console.log(animal) // Animal {name, speed:0}

//
class Duck extends Animal {
    /*
    constructor(..args) { 이게 자동 생성되는 상태
        super(...args) 
    }
    */

    run(speed) {
        this.speed = speed / 10
        console.log(this.name, this.speed, 'run.')
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

let duck = new Duck('duck') //파라미터 넣어도 정상. Animal 참조
console.log(duck)

duck.run(10)
duck.stop()
duck.hide()

//
class Rabbit extends Animal {
    /*
    constructor(...args) { // 부모 생성문이 자동 생성되는 상태
        super(...args)
    }
    */
   
    stop() {
        super.stop() // 부모의 stop()함수
        this.hide() // 내 hide()함수
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

let rabbit = new Rabbit()
console.log(rabbit) // Rabbit {name: undefined}

rabbit = new Rabbit('rabbit')
console.log(rabbit) // Rabbit {name: 'rabbit'}

console.log(rabbit.name) // rabbit
rabbit.run(100) // Animal prototype - run() 상속
rabbit.hide() // rabbit hide.

new Rabbit('rabbit').stop() 

//
Rabbit = class extends Animal {
    constructor(name, color) {
        super(name) // Animal에서 초기화
        this.color = color // 이 Rabbit class에서 초기화
    }

    stop() {
        super.stop() // Animal의 stop() 실행
        this.hide()  // Rabbit의 hide() 실행
    }

    hide() {
        console.log(this.name, this.color, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()
console.log(new Rabbit('rabbit', 'black'))
