let json = '{"age": 30}'

try {
    let user = JSON.parse(json) // Error X

    // 과제: user 객체가 있으면, user.age 를 출력하라.
    //user && console.log(user.age)
    
    if(user.name) console.log(user.name)
    else throw new SyntaxError('user.name이 없습니다.') // throw - 에러발생시키기
} catch (e) {
    if(e instanceof SyntaxError)
        console.log('ERROR: ' + e.name + '\n' + e.message)
    else throw e
}

// ERROR: user.name이 업습니다.