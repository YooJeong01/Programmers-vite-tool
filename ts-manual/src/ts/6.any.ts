
/* any type */
let obj:any;

obj = 1;
obj = 'a';
obj = {x:10}
obj = () => {}
obj.toFixed();




/* unknown */
// any랑 비슷하지민, 타입을 지정했다는 성의를 보여주는 의미
let arr:unknown;

arr = 1;
arr = 'hello';
// 이건 에러난다
// arr.toFixed();

/* 타입 좁히기 narrowing */
// 이렇게하면 unknown으로 설정했어도 에러나지 않음
// 마우스 올려보면 arr 타입이 number로 뜬다
if(typeof arr === 'number'){
    arr.toFixed();
}