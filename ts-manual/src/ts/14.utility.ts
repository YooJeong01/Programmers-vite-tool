/* Omit<T,K> */

type User = {
    id:number;
    name:string;
    email:string;
}

// 타입에서 특정 속성을 제거한 새로운 타입을 만들고 싶을때
type PublicUser = Omit<User, 'email'>

// const user:Omit<User, 'email'> = {
const user:PublicUser = {
    id:1,
    name:'tiger'
}





/* Pick<T,K> */
// User 타입에서 id와 name 타입 정의만 가져온다
const user2:Pick<User, 'id'|'name'> = {
    id:2,
    name:'beom'
}






/* Partial<T> */
// 타입이 가진 모든 속성을 옵셔널로 설정할 수 있음
type User3 = {
    id:number;
    name:string;
    email:string;
    address:{
        lat:number,
        long:number
    }
}

const user3:Partial<User3> = {
    name:'seon'
}





/* Required<T> */
// 타입 T의 모든 속성을 필수로 만듭니다
const user5:Required<User3> = {
    id:1,
    name:'tiger',
    email:'tiger@naver.com',
    address:{
        lat:20,
        long:33.5
    }
}




/* Readonly<T> */
// 타입 T의 모든 속성을 읽기 전용으로 만듭니다
const user6:Readonly<User3> = {
    id:10,
    name:'tiger',
    email:'tiger@gmail.com',
    address:{
        lat:30,
        long:30
    }
}


/* Record<K,V> */
// K들로 구성된 객체를 만들고, 각 값은 V타입으로 지정

// type Role = 'admin' | 'user' | 'guest';
type Role = keyof typeof access;


type RoleStatus = Record<Role, boolean>
// type RoleStatus = Record<'admin'|'user'|'guest', boolean>

const access = {
    admin:true,
    user:true,
    guest:false
}
