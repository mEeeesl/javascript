function laugh(cnt) {
    if(cnt <= 0 || Math.trunc(cnt) != cnt) // 음수인경우, floot인 경우 
        throw new Error('반복 횟수는 자연수이어야 합니다. ^^*')
    
    let pharse = ''
    for(let i = 0; i < cnt; i++) pharse += 'ha '

    return pharse
}

let diff
let start = Date.now()

try {
    console.log(laugh(3))
    laugh(3.1)
} catch(e) {
    console.log(e.message)
} finally { // try + finally || catch + finally
    diff = Date.now() - start // 현재시간 - 시작시간 = 작업시간
}

console.log(`경과 시간: ${diff}ms`)