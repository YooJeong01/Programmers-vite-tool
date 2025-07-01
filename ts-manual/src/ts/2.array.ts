let arr:number[] = [1,2,3];

let str = 'a,b,c'.split(',');




/* generic type 변수 */
let _arr:Array<number> = [1,2,3];
let _str:Array<string> = ['a','b','c'];




/* union type + array type */
let multi:(string | number | boolean)[] = ['hello',10, true];

// 자리를 바꿔써도 허용이 된다. 빼먹어도 된다
multi = [5, 100, 'a'];

// 자리를 고정하면 안되나?
// 빼먹으면 안되는거 아닌가?
// => tuple 사용하기



/* tuple type */
let tupleA:[number, number, number] = [1,2,3];
let tupleB:[string,number] = ['tiger', 30];

// 빼먹기 안됨
// tupleA = [10,100]

// 자리바꾸기도 안됨
// tupleB = [30,'age']


/* 다차원 배열 */
const user:[string,number][] = [
    ['심선범', 30],
    ['심선범', 30],
    ['심선범', 30],
]

