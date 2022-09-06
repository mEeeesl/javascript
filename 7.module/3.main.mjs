import {greet, add} from './1.named.mjs'
import * as named from './1.named.mjs'  //별명 ( * = all )
import div from './2.default.mjs'       //별명 (as 생략가능) ( 뭘 내보낼지는 안정해놓음, default 값만 받아온 상태)

console.log(greet, add(1, 2))
console.log(named.greet, named.add(1, 2))

console.log(div(4, 2))