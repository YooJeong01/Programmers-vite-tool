// 이전에 작성한 함수의 타입을 지정해주세요

function getRandom(n:number):number{
  return Math.floor(Math.random() * n)
}



function getDay(num:number):string{
    switch (num) {
    case 0: return "월";
    case 1: return "화";
    case 2: return "수";
    case 3: return "목";
    case 4: return "금";
    case 5: return "토";
    case 6: return "일";
  }
  return ''
}



function weekend():string {
  const today = getDay(getRandom(7));

  let day = today.includes("토") ? "토요일" : today.includes("일") ? "일요일" : "평일";

  return day;

}


function rem(pxValue:(string|number) ,base:number = 0):string {
  if(typeof pxValue === 'string') pxValue = parseInt(pxValue,10);
  return pxValue / base + 'rem'
}



let pow = (numeric:number,powerCount:number):number => {
  let result = 1;
  for(let i = 0; i < powerCount; i++){
    result *= numeric;
  }
  return result;
}; 




let repeat = (text:string,repeatCount:number):string =>{
  let result = '';
  for(let i = 0; i < repeatCount; i++){
    result += text;
  }
  return result;
}; 



let calculateTotal = function(...args:number[]):number{
  
  let total = 0;
  args.forEach((a)=>{
    total += a;
  })
  return total
}

calculateTotal(10,20,30)





// 재사용이 필요한 타입이 있다면 아래처럼 뜯어서 합쳐야겠지만 아니라면 굳이
type Error = {message:string};
type Success = (url:string) => void;
// interface Success { (url:string): void};

type Fail = (err:Error) =>void;
// interface Fail { (err:Error) : void };


type MovePage = (url:string,success:Success,fail:Fail) => void;


const movePage:MovePage = (url, success, fail) =>{

  if(url.match(/http.+www/) && typeof url === 'string'){
    success(url);

  }else{
    fail({message:'error!'});
  }
}



movePage(
  'https://www.naver.com',
  ()=>{},
  ()=>{}
)









// Date 타입을 제네릭으로 정의해주세요

interface Data<T>{
    success:boolean;
    data:T
}

const userData:Data<{name:string, age:number}> = {
  success:true,
  data:{name:'tiger',age:25}
}



const listData:Data<string[]> = {
  success:true,
  data:['apple','banana','cherry']
}





// 제네릭과 확장(extends)을 사용하여 name속성이 없을 경우 에러를 발생시켜주세요.

function getName<T extends {name:string}> (value:T) : string {
  return value.name
}




getName({name:'tiger',age:30})
// getName({nickName:'beom',age:30}) 





// infer는 많이 안 써서 ㄱㅊ


// infer : 배열 내의 '아이템'을 타입으로 전달하고싶을때 추론해서 전달함
// 제네릭으로 받아온 T가 배열이라면 앞 수행(배열 아이템 하나하나를 타입 추론 전달). 아니라면 아무것도 안 함
type ElementType<T> = T extends (infer U)[] ? U : never;


// infer가 전달한 타입을 사용할때는 ElementType<> 으로 사용
// ElementType<T[]> 들어오는게 배열이 맞다면 infer U 동작
function logFirst<T>(arr:T[]):void{
    const first:ElementType<T[]> = arr[0];
    console.log(first)
}

logFirst(['apple', 'banana'])
logFirst([1,2,3])



function includesValue<T>(arr:T[],value:ElementType<T[]>):boolean{
    return arr.includes(value);
}

includesValue(['a','b','c'],'b') // true
// includesValue(['a','b','c'],3) // error
