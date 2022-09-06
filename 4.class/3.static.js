class Article { // static: 정적메서드 + 객체 생성없이 바로 사용가능 ( "prototype"이 아닌 클래스 함수 자체에 메서드를 설정)
    static publiser = 'ddanzi' // class에서 속성을 추가할때, static

    constructor(title, viewCnt) { // 새로 생길 new 객체에 이 속성들이 들어감
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) { //static method 선언 (= prototype에 생기는게 아님, class에 생김)
        return article1 - article2 // minus 하려면 number type으로 변환해야함
    }

    // 구닥다리라 toString(), valueOf()는 잘 안쓴다고함
    toString() { // article을 문자로 바꿀때 // prototype에 생김
        return this.title
    }

    valueOf() { // 숫자로 바꿀때 // prototype에 생김
        return this.viewCnt
    }

    // 과제 console.log(article1 + '') // Java 출력
    [Symbol.toPrimitive](hint) { // prototype에 생김
        return hint == 'number' ? this.viewCnt : this.title
    }
    //
}

console.log(Article.publiser)

//
Article.address = 'seoul' // Article Class field에 속성 추가
console.log(Article.address)

Article.getPrice = () => 2000 // static method를 추가할때, Article Class에 fn 추가 (prototype에 추가 x)
console.log(Article.getPrice())

//
let article1 = new Article('Java', 100)
let article2 = new Article('JavaScript', 10)

console.log(Article.compare(article1, article2)) // 90

console.log(article1 + '') // 100

//과제 [Symbol.toPrimitive](){} 를 추가하라.
console.log(article1 + '') // Java
console.log(`${article1}`) // Java


// static 변수는 class에 있는 것 ( 객체에 있지 않다 )
console.log(article1.publiser,  // undefined
            article1.addrees, article1.compare) // undefined - 이건 class에 있다
console.log(Article.title, Article.viewCnt) // undefined - title, viewCnt는 객체에 있다
console.log(Object.keys(article1)) // 객체 - ['title', 'viewCnt']
console.log(Object.keys(Article)) //  Class - ['publiser', 'address', 'getPrice]'  -- compare는 확인불가한 상태
console.log(Article.prototype)
//{constructor: ƒ, toString: ƒ, valueOf: ƒ, Symbol(Symbol.toPrimitive): ƒ}
for(let key in Article) console.log(key) // publiser, address, getPrice -- compare는 확인불가한 상태

// 원소정렬, (프로젝트시, 노동자ID순으로 정렬할때 사용하기.)
let articles = [article1, article2]
console.log(articles)

//         ▼ 원소 정렬(a - b 상황에서는 오름차순정렬. a.viewCnt = 100, b.viewCnt = 10)
articles.sort(Article.compare)
console.log(articles)
Article.compare = (a, b) => b - a
//          ▼ 원소 정렬(b - a 상황에서는 내림차순
articles.sort(Article.compare)
console.log(articles)