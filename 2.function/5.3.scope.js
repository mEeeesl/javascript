const greeting = 'hello'

say('abel')

// function declaration
function say(name) {   // local scope
    console.log(greeting, name)
}
// hello abel 실행됨 function 이 밑에있어도 됨 

say('john')
// hello john

/* 이거아님 6.1.closure.js 확인 
 closure 
 1. greeting = uninitialize -> 
 2. say = function() 초기화 = 펑션으로 만든 객체는 바로 초기화
 
 3. greeting = 'hello'
 4. greeting = undefined
 
 5. say = block을 실행하면 ele객체가 생성
 6. 부모객체 참조 ( 부모객체는 2번 )

 7. say ele객체에 name 생김
 8. name = 'adel'

 9. outer를 통해서 부모객체 참조해서 greeting = 'hello'
 10. name = 'adel'이 ele객체에 있으니 그걸 사용

 11. ele객체는 사라짐

 12. 11번줄 실행
 13. ele객체 생성
 14. name 생기고
 15. name = 'john'
 16. outer를 통해서 부모객체 참조해서 greeting = 'hello'
 17. name = 'john'이 ele객체 있으니 그걸 사용
 18. 11번줄 결과값 내고
 19. ele객체 죽음


 */