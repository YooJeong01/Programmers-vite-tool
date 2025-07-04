import { gsap } from "gsap";
import { main } from "./main";
import { deleteMemo, insertMemo } from "./service/service";
import type { Tables } from "./supabase/database.types";

// 드래그 될 객체 타입 선언
let draggingEl:HTMLElement | null = null;

export function handleDragStart(e:DragEvent){
    const target = e.target as HTMLElement;
    const memo = target.closest('.memo');

    if(memo && e.dataTransfer){
        draggingEl = memo as HTMLElement;
        e.dataTransfer!.effectAllowed = 'move';

        memo.classList.add('dragging');
    }


}

/* 드래그 중이지 않은 엘리먼트를 찾아서 현재 마우스의 위치에 따라 드래그 중이지 않은 엘리먼트의 크기의 절반을 마우스가 넘겼다면 그 엘리먼트를 대체함 */
function getDragAfterElement(container:HTMLElement,y:number):HTMLElement | null{
  // .memo:not(.dragging) : dragging 클래스가 들어가지 않은 memo 클래스만 찾겠다
    const draggableElements = [...container.querySelectorAll('.memo:not(.dragging)')] as HTMLElement[];


    /**
     * reduce를 통해서 현재 가장 가까운 child를 찾고 그 child의 offset값과 함께 갱신해준다
     */
    return draggableElements.reduce((closest,child)=>{
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      
      if(offset < 0 && offset > closest.offset){
        // 여기서 갱신이 일어난다
        // element를 같이 전달해주지 않으면 좌표값만 바뀌니까 나중에 자리 바꿀때 엘리먼트를 잡을수가 없다
        return {offset, element:child}
      }else{
        return closest;
      }
      // 그래서 초기값이 -무한이고, 초기 엘리먼트는 null인거다
    },{offset: -Infinity, element: null as HTMLElement | null}).element;
}


export function handleDragOver(e:DragEvent){
    // 드래그가 중간에 끝나도 end가 뜰 수 있게
    // 자기자리로 돌아가는 애니메이션 끈거임
    e.preventDefault();

    // clinetY : 마우스 Y좌표
    const afterElement = getDragAfterElement(main, e.clientY);

    if(!draggingEl) return;
    /*바꿔치기*/

    if(afterElement === null){
        // 없다면 원래 자리에 두기
        main.appendChild(draggingEl)
    } else {
        // .insertBefore(A,B) A를 B로 바꿔치기 하겠다
        main.insertBefore(draggingEl, afterElement);
    }

}


export function handleDragEnd(){
    if(draggingEl){
        draggingEl.classList.remove('dragging');
        draggingEl = null;
    }
}

export async function handleDelete(e:MouseEvent){
  // 이벤트객체 타입을 eventTarget으로했더니 계속 dataset이 없다는 오류 발생했음
  const target = e.target as Element;
  
  const deleteButton = target.closest('.delete');
  const article = target.closest('article');
  if(!(deleteButton && article)) return;
  
  // 버튼이 있어야 아이디 값을 찾아온다 (코드 흐름상)
  const id = article.dataset.id;


  if(confirm('정말 지울거야?')){
    deleteMemo(Number(id));
  }
}

export function handleOpenPop(){
  const tl = gsap.timeline()
  .to('#dialog', {autoAlpha:1, duration:0.2})
  .to('.pop', {y:0, ease:'power3.inOut'})
  
}

export function handleCreate(e:MouseEvent){
  e.preventDefault();
  console.log('clicked'); 
  const title = document.querySelector('#title') as HTMLInputElement;
  const description = document.querySelector('#description') as HTMLInputElement;
  const priority = document.querySelector('#priority') as HTMLSelectElement;
  
  insertMemo({
    title:title.value,
    description:description.value,
    priority:priority.value as Tables<'memo'>['priority']
  });

  title.value = '';
  description.value = '';
  priority.value = 'high';


}

export function handleClosePop(){
  const tl = gsap.timeline()
  .to('.pop', {y:'100%', ease:'power3.inOut'})
  .to('#dialog', {autoAlpha:0, duration:0.2})

}


/**
 * 1. 드래그 될 객체 타입 선언
 * 2. handleDragStart()
 *    2-1. 드래그 할 타겟 잡기
 *    2-2. article이 존재할때만 
 *    2-3. 드래그를 허락하기
 *    2-4. article에 dragging 클래스 넣어주기 (css용)
 * 
 * 3. getDragAfterElement()
 *    3-1. 드래그중이지 않은 엘리먼트 찾기 (드래그 중인 요소가 위치가 바껴야 하기 때문에 비교대상을 잡아줘야함)
 *    3-2. 
 * 4. handleDragOver()
 * 5. handleDragEnd()
 * 6. handleOpenPop()
 * 7. handleCreate()
 * 8. handleClose()
 */