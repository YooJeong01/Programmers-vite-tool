/**
 * generic type
 */

type User<T, U> = {name:T; age:U};

// 타입을 함수처럼 매개변수 전달처럼 쓸수있다
const user:User<string, number> = {
    name:'tiger',
    age:30
}

function fn<T>(value:T):T{
    return value
}

// fn<number>(10)
// fn<string>('hello')
fn(10)
fn('hello')


function swapAtoB<T,U>(a:T,b:U):(T|U)[]{
    return [b,a]
}

swapAtoB(0,'a');


// generic으로 타입을 받으면 ts에서 얘가 어떤건줄 알고 length를 사용해? 하며 에러를 띄우기 때문에
// extends{@:type} 로 받는 대상이 해당 속성과 반환 타입을 가지고있다는걸 알려줌
function getLength<T extends {length:number}>(arr:T):number{
    return arr.length;
}

getLength([1,2,3]);
getLength(['a','b','c']);
getLength({length:10});

// T가 string을 받으면 앞 수행
// T가 string이 아니라면 뒤 수행
type Response<T> = T extends string ? {type:string; content:string} : {type:string; content:T};

const r1:Response<string> = {
    type:'text', 
    content:'hello'
};

const r2:Response<{name:string, age?:number}> = {
    type:'json', 
    content:{name:'tiger'}
};



// extends {}는 최소한으로 {}는 포함해야하며 그보다 많은건 상관없다
function getById<T extends {id:number}>(item:T):number{
     return item.id
}

getById({id:10, title:'아이폰'})
getById({id:20, title:'갤럭시'})
// getById({title:'맥북'})
