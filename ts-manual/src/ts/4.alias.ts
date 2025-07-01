/* alias 별칭 */

// 무조건 대문자 시작. Pascal Case 사용하기
type User1 = {
    id:number;
    name:string;
    auth:string;
    isPaid:boolean;
}

// type을 확장하고싶을때 & 사용
type User2 = User1 & {address:string};


const user1:User1 = {
    id:1,
    name:'tiger',
    auth:'admin',
    isPaid:true
}

const user2:User2 = {
    id:2,
    name:'beom',
    auth:'user',
    isPaid:false,
    address:'부산시'
}

const user3:User2 & {phone:string} = {
    id:3,
    name:'beom',
    auth:'user',
    isPaid:false,
    address:'부산시',
    phone:'010-123-456'
}



/* interface는 = 을 쓰지 않고 바로 {}  */

interface User4 {
    id: number;
    name: string;
    auth: string;
    isPaid: boolean;
}

// interface는 동일한 식별자를 사용해 기존꺼랑 내용을 합칠 수 있다
// 그치만 쓰면 안될것 같죠? 이름이 같다는건..
// interface User4 {
//     address:string
// }

// 이렇게도 인터페이스를 확장할 수 있다
interface User5 extends User4{
    address:string
}


// const user4:User4 & {address:string} = {
const user4:User5 = {
    id:4,
    name:'sun',
    auth:'user',
    isPaid:true,
    address:'남양주시'
}




// 함수 타입 정의 맛보기
/* 범쌤은 함수 타입 정의시 type을 쓴다 */
type Fn = (a:string) => void;
interface _Fn {
    (a:string) : void
}





// 객체의 키가 동적으로 결정될 때 유용하게 사용할 수 있는
/* index signature */
type Person = {
    name : string;
    age : number;
    email : string;
    [key:string] : string | number | 'tiger' ; // 키는 언제든지 추가될수 있고 문자나 숫자, 리터럴 타입이다
}

const person:Person = {
    name : 'tiger',
    age : 30,
    email : 'tiger@gmail.com',
    gender : 'male',
    phone : 123123123
}


