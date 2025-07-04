import { handleClosePop, handleCreate, handleDelete, handleDragEnd, handleDragOver, handleDragStart, handleOpenPop } from './handler';
import { fetchMemo } from './service/service';

import '/src/style.css'

/**
 * 글 넣어줄 영역 잡기
 * 생성용 돔 객체들 잡기
 */



export const main = document.querySelector('main') as HTMLElement;
export const create = document.querySelector('.create') as HTMLButtonElement;
export const done = document.querySelector('.done') as HTMLButtonElement;
export const close = document.querySelector('.close') as HTMLButtonElement;


window.addEventListener('DOMContentLoaded', ()=>{
    fetchMemo();
})


/**
 * 드래그 시작 이벤트
 * 드래그 끌리는 중 이벤트 
 * 드래그 끝나는 이벤트
 * 메모 클릭 이벤트
 * 
 * 생성 클릭 이벤트
 * 완료 이벤트
 * 닫기 이벤트
 */


main.addEventListener('dragstart', handleDragStart);
main.addEventListener('dragover', handleDragOver);
main.addEventListener('dragend', handleDragEnd);
main.addEventListener('click', handleDelete);

create.addEventListener('click', handleOpenPop);
done.addEventListener('click', handleCreate);
close.addEventListener('click', handleClosePop);



