/* untion type */


let str:'name' | 'age' | 'address' = 'name'


type CompanyA = {
    companyName : string;
    since : number;
}

// 앤퍼센트& 말고 파이프라인| 넣어도 됨
const company1:CompanyA | {ceo:string}= {
    companyName : '8b-studio',
    since : 2022,
    ceo : 'tiger'
}