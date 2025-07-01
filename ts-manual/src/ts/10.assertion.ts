/* 주장 */

// htmlinputelement가 있다고 타입을 단언하는것
// 주로 돔 요소에 접근해야할 때 많이 씀
// 실제로 쓰는건 위험하지만 귀찮아서 많이 쓴다
// sol1. as @@
// sol2. 마지막에 ! 붙이기
const input = document.querySelector('#textField') as HTMLInputElement;
const input2 = document.querySelector<HTMLInputElement>('#textField')!;

input.value;


// 단언하지 않고 타입체크 하는법
const input3 = document.querySelector('#textField');
if(input3){
    (input3 as HTMLInputElement).value;
}


// readonly 적용하는 첫번째 방법
// 얘는 타입을 고정해버림
const personA:{
    readonly name:string;
    readonly age:number;
} = {
    name : 'tiger',
    age : 30
}

// readonly 적용하는 두번째 방법
// 얘는 리터럴로 고정해버림
const personB = {
    name : 'tiger',
    age : 30
} as const