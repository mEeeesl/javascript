console.log(Date())
console.log(typeof Date()) // string

let date = new Date() // date 객체생성
console.log(date) //Tue Aug 23 2022 16:28:13 GMT+0900 (대한민국 표준시)
console.log(typeof date) // object
console.log(date.toLocaleDateString()) // 2022. 8. 23
console.log(typeof date.toLocaleDateString()) // string

date = new Date('2022-08-23T07:30:10.999Z') // UTC + 9시간 = 한국시간
console.log(date)
console.log(date.toLocaleDateString()) //2022. 8. 23.
console.log(date.toLocaleTimeString()) //오후 4:30:10

console.log(
    date.getFullYear(),     // 2022
    date.getMonth(),        // 7 ( 0 ~ 11 )
    date.getDate(),         // 23
    date.getUTCHours(),     // 7
    date.getHours(),        // 16 (kor)
    date.getMinutes(),      // 30
    date.getSeconds(),      // 10
    date.getMilliseconds(), // 999
    date.getDay(),          // 2 (0 일 ~ 6 토 )
)

console.log(date.getTime()) // 1661239810999 ms
console.log(Date.now())     // 1661240982355 ms

date = new Date(0) // 기준시간
console.log(date) // Jan 01 1970 09:00:00

date = new Date(1000 * 60 * 60 * 24) // 하루
console.log(date) // Jan 02 1970 09:00:00

date = new Date(-1000 * 60 * 60 * 24)
console.log(date) // Dec 31 1969 09:00:00