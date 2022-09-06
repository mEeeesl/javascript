let user ={
    name: 'madonna',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

user.greet()

//
setTimeout(user.greet, 100) // I am undefined - greet() fn을 실행할때 부모객체가 없어서

let fn = user.greet
setTimeout(fn, 200) // I am undefined

let fn2 = user.greet.bind(user)
fn2() // bind, I am madonna

//
setTimeout(() => user.greet(), 300) // I am madonna 