// global scope
let a = 1

// local scope
{
   console.log(a) // 1
}

{ // 지역 변수라, a 선언 가능
    let a = 2
    console.log(a) // 2
}

console.log(a) // 1 

/*
 closure 
 a = uninitialize -> 
 a = undefined -> 
 a = 1

 a = uninitialize -> 
 a = undefined -> 
 a = 2
 */