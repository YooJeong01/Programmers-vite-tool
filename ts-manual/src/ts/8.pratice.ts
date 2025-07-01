// 문제: Product 타입을 정의 후 union타입을 사용해 에러를 해결해주세요.

// 1. 타입도 import/export가 된다
// import { Product } from "./type";

// 2. 아래처럼 타입이라고 명시할 수 있다
// import { type Product } from "./type";
import type { Product } from "./type";



const product1:Product = {
  id: 'abc123',
  name: 'Laptop',
  price: 1000
};

const product2:Product = {
  id: 123456,
  name: 'Smartphone',
  price: 500
};




// 문제: Contact타입을 정의 후 intersection을 사용하여 Employee를 만들어보세요.

interface Contact {
    phone:string;
    email:string;
    age: number;
}

type Employee = Product | Contact;

const employee1:Employee= {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
  phone: '123-456-7890'
};




