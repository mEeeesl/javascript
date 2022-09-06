let timeId = setInterval(() => console.log('tick'), 1000)

setTimeout(() => {      //3초뒤 timeId값 지우기
    clearInterval(timeId) 
    console.log('stop')
}, 3000)

/*
1초뒤 나타나는건 timeout과 동일하나,
얘는 계속 반복
*/