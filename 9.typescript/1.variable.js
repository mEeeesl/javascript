//TypeScript
var msg = 'hello';
// msg = 1 / error - type이 달라서, msg는 string type 이어야함
var val = 1;
var nullableStr = null;
nullableStr = 'hi';
//nullableStr = undefined / error - undefined는 string type이 아님
var undefinedOrNumber;
undefinedOrNumber = 10;
undefinedOrNumber = undefined;
var numberOrStringOrNull = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = "ㄹㅁㄹ";
numberOrStringOrNull = null;
var isCompleted = true;
isCompleted = false;
// isCompleted = 0 / error - type error
var anyValue = null;
anyValue = undefined;
anyValue = NaN;
anyValue = null;
anyValue = 1;
anyValue = 'ㅊㅁ';
// 권장하지 않는 TypeScript 방식
var a = 1;
var b = 'b';
var c = true;
