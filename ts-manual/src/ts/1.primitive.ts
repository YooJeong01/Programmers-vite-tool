/* number type */
let num1:number = 10;
let num2:number = NaN;
let num3:number = -123;
let num4:number = 0.123123;
let num5:number = Infinity;


/* string type */
let str1:string = 'hi';
let str2:string = 'hello';
let str3:string = `hola ${num1}`;


/* boolean type */
let bool1:boolean = true;
let bool2:boolean = false;

/* null type */
let nullA:null = null; // 쓸 일이 많진 않음

/* undefined type */
let undef:undefined = undefined;

/* literal type */
// 강제할 수 있다
let numA:10 = 10;
let strA:'hello' = 'hello';
let noolA:true = true;

/* unknown type */
// 현재는 무슨 값인지 모르나, 나중에는 값을 넣을경우에
// 이걸 안하고 그냥 두면 any 타입이 됨 
// any 타입은 위험하다
let unknown:unknown;


/* never type */
// 어떠한 값도 내보내지 않겠다는 의미
// 단순히 콘솔만 찍거나 에러를 발생시키는 함수 타입으로 많이 씀
let never:never;

/* any type */
//웬만하면 쓰지 말자
let any:any;



