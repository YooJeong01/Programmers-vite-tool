import { loadStorage, saveStorage } from "./storage";
import type { TodoList } from "./type";


let todos:TodoList = loadStorage();

// todos 데이터를 로컬 스토리지에 저장해주세요.

export function addTodo(content:string):void{
  const newTodo = {
    id:Date.now(),
    content:content,
    completed:false
  }

  todos.push(newTodo);

  saveStorage(todos)
}

// 삭제 버튼을 클릭했을 때 데이터 삭제
// 1. 버튼을 선택합니다.
// 2. 버튼에 클릭 이벤트 바인딩
// 3. 선택 항목 제거 (filter)
// 4. 스토리지 저장 
// 5. 리렌더링

export function deleteTodo(id:number):void{

  todos = todos.filter(todo => todo.id !== id);
  saveStorage(todos)

}

export function toggleTodo(id:number):void{
  // forEach 아니고, map이라 값을 반환한다
  // 반환하는거에 completed: !todo.completed만 나오면 체크박스만 화면에 보이기 때문에
  // completed외의 글자나 삭제 버튼등의 내용도 ...todo로 전개구문을 사용해 객체에 감싸준다
  todos = todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed } : todo
  )
  saveStorage(todos);
}

export function updateTodo(id:number, newContent:string):void{
  // todo.content = newContent
  // js에서는 이렇게 썼지만 ts는 안된다
  // 이거 사용하고싶으면 immer 라는 라이브러리도 있다
  // ts에서는 이렇게 열거해서 다시 복사한 다음에 덮어써줘야한다 
  // {1,2} 순서에따라서 1과 2에 동일한 내용이 있다면 2로 덮어쓴다 (이전 비동기 통신때 썼던 개념)
  todos = todos.map( todo => todo.id === id ? {...todo, content: newContent} : todo)
  saveStorage(todos);
}