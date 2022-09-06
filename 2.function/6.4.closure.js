function makeCounter() {
    let count = 0

    return function() {
        return ++count
    }
}

let counter1 = makeCounter()
let counter2 = makeCounter()

for(let i = 0; i < 2; i++)
    console.log(counter1()) //1, 2

for(let i = 0; i <2; i++)
    console.log(counter2()) //1, 2

/*
공유하지 않음 (서로 다른 scope에 있음)

A. global객체
a. outer값 = null
b. recode값
    makeCounter : fn (environment - global)
    counter1 : uninitialize (fn은 B.Local의 environment 값) ( )
    counter2 : uninitialize (fn은 C.Local의 environment 값)

9번째줄 실행시
B. Local객체
makeCounter() ( outer는 global )
count : uninitialize -> 0
( A. global객체의 counter1의 fn의 environment는 B.Local )

10번째줄 실행시
C. Local객체
makeCounter() 
count : uninitialize -> 0

12번째줄 실행시
부모(outer)는 A.Global 참조
recore i = 0 > A참조해서 counter1을찾고 counter1 fn 을보니 B참조
i = > ++i > 1, 2 리턴하고 fn은 죽음

13번쨰줄 실행시 동일
i = 0 > 1, 2가 됨
 */