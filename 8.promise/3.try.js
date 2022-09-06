
new Promise((resolve, reject) => reject(new Error(1)))
    .catch(e => console.log(e.message)) // 1 - reject된 경우

new Promise((resolve, reject) => {throw new Error(2)})
    .catch(e => console.log(e.message)) // 2 - executor에서 에러난경우

//
new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)})
    .catch(e => console.log(e.message)) // 3 - resolve에서 Err던져서 catch handler에서 잡은경우

new Promise((resolve, reject) => resolve('ok'))
    .then(result => blabla())
    .catch(e => console.log(e.message)) // blabla is not defined - 4. fn이 정의되지 않은경우?

// ▼ 하기 사유로, catch handler는 가장 마지막에 쓰는게 낫다.
new Promise((resolve, reject) => {throw new Error(4)}) // executor에서 error발생
    .catch(e => console.log(e.message)) // 4 - catch handler가 발생하겟지
    .then(result => console.log(result)) // unedefined - then은 성공을전제로하니, 여기선 파라미터값을 리턴할것임 (파라미터는 정의해주지 않은상태)

new Promise((resolve, reject) => {throw new Error(5)}) // executor에서 error발생
    .catch(e => {  // 에러발생하니, 가장 가까운 이 catch 핸들러가 작동
        if(e instanceof URIError) { 
            console.log('URIError') // 나중에 URL 에러나오면 URIError쓴대
        } else { // 지금은 이게 실행될것
            console.log(e.message) // 5
            throw e // 에러가 또 발생하니 가까운 catch 핸들러 작동
        }
    }).then(() => console.log('if문에 throw e 없거나, error발생안하면 실행됨.')) // if문에서 에러발생안하면(=throw e 없으면) 이거 실행
    .catch(e => console.log(e.message)) // 5 - 이녀석이 작동