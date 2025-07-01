


const user:{
    id?:number; // Optional Property
    name:string;
    age:number;
} = {
    name : 'tiger',
    age : 30
}

user.id = 123123

// 정해져있지 않기 때문에 아래 코드는 안된다
// user.address = '부산'

// [1,2,3].forEach(() => {
    
// });

const config:{
    readonly apiKey:string // 읽기 전용 속성으로 할당
} = {
    apiKey : 'asd!0_212312'
}

// readonly라 수정할 수 없다
// config.apiKey = 'aaa' 