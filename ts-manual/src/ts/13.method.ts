
const arr = [1,2,3];

const newArray = arr.map((item,index)=>{
  return item * index
})

// const map = <T,U>(arr:T[], f:(n:T) => U):U[] => {

//   let result = [];
  
//   for(const a of arr){
//     result.push(f(a))
//   }

//   return result;
// }


// 타입 분리 해보기
// 제네릭 타입을 참조하고있는 타입이다
type Map = <T,U>(arr:T[], f:(n:T)=>U) => U[];

// 함수를 시작하고 변수를 받아야하기때문에 제네릭 선언이  Map<T,U>가 아니라 Map = <T,U>가 된다
const map:Map = (arr,f) => {

  let result = [];
  
  for(const a of arr){
    result.push(f(a))
  }

  return result;
}

// const forEach = <T>(arr:T[], f:(a:T, i?:number)=>void):void => {
    //     let i = 0;
    //     for(const a of arr){
        //         f(a,i++)
        //     }
        // }
// }

// 타입 분리해보기

// 얘는 제네릭 타입이다
type Callback<T> = (a:T, i:number) => void;

// ForEach는 매개변수로 제네릭 타입을 받는다
// 그래서 선언 위치가 다르다
type ForEach = <T>(arr:T[], f:Callback<T>) => void;

// 매개변수 앞은 제네릭 선언 위치
// 함수명 뒤는 그냥 명시적 타입 위치
const forEach:ForEach = (arr, f) => {
    let i = 0;
    for(const a of arr){
        f(a,i++)
    }
}

forEach(arr, (a)=>console.log(a))





interface _Callback<T> {(a:T, i:number): boolean};
type Filter = <T>(arr:T[],f:_Callback<T>) => T[];

// 표현식에서만 위 타입 사용이 가능하다 (선언문은 안 됨)
// 표현식 : const func1 = () => {}
// 선언문 : function func1(){}
const filter:Filter = (arr,f) => {
    const result = [];
    let i = 0;
    for(const a of arr){
        if(f(a, i++)) result.push(a)
    }

    return result;
}


type __Callback<T, U> = (acc:U, curr:T, i:number) => U;
type Reduce = <T, U>(arr:T[], f:__Callback<T,U>, initial:U) => U


const reduce:Reduce = (arr, f, initial) => {
    let acc = initial;
    let i = 0;
    for(const a of arr){
        acc = f(acc, a, i++);
    }
    return acc;
}


reduce(arr, (a)=>a*2, 0);