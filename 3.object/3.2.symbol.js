let age

function src() {
    let user = {
        name: 'amanda'
    }

    a(user)
    b(user)
}

function a(user) {
    user[Symbol('age')] = 12
    console.log(user)
}

function b(user) {
    console.log(Object.keys(user)) // Symbol 안이어짐, 공유x
    console.log(user.name)
    console.log(user)
}

src()