


const user = {
    name:'tiger',
    age:30,
    gender:'male',
    address:'남양주시'
}

// 이렇게 타입을 전달할 수 있다
type User = typeof user;

if(typeof user === 'string'){

}

// 해당 타입의 key들만 모아서 유니온 타입으로 만들어준다
type UserKey = keyof User


const settings = {
    theme:'dark',
    fontSize:16,
    language:'ko'
}

// typeof 뒤에는 js 객체만 올 수 있다
// typeof User 불가능 (User는 ts 타입이다)
// keyof 뒤에는 ts 타입만 와야 한다
// keyof settings 불가능 (settings는 js 객체다)
type SettingsKey = keyof typeof settings

