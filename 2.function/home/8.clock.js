/* 과제:
일시를 1초 간격으로 반복출력하라
Date()를 이용한다.
*/

let test = setInterval(() => console.log(new Date()),1000)

setTimeout(() => {
    clearInterval(test)
    console.log('end')

}, 2000);

let today = new Date();

// 현재 날짜
let year = today.getFullYear(); 
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay(); //월 1 화 2 수 3 목 4 금 5 토 6 일 7

console.log(year + '/' + month + `/` + date)
console.log()
console.log(day)
