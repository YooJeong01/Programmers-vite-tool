import type { Tables } from "./supabase/database.types";

export type MemoData = {
    id:number;
    priority:'high' | 'medium' | 'easy';
    title:string;
    description:string;
    hits:number;
}


/**
 * renderMemo()
 * createMemo 호출
 * 
 */
export function renderMemo(target:HTMLElement | null, data: Tables<'memo'>):void{
    target?.insertAdjacentHTML('beforeend',createMemo(data));
}

/**
 * 
 * createMemo()
 * 템플릿 리턴
 */
function createMemo(data: Tables<'memo'>):string{
    const {id, priority, title, description, hits} = data;
    const template = `
    <article class="memo ${priority}" data-id="${id}" draggable="true">
        <header class="memo-header">
        <span class="badge">Medium</span>
        <button class="delete" type="button">
            <img src="/trash.svg" alt="삭제 아이콘" />
        </button>
        </header>

        <div class="contents">
        <h2>${title}</h2>
        <p>${description}</p>
        </div>
        <footer class="memo-footer">
        <img src="/user.svg" alt="유저 아이콘" />
        <span class="hit">${hits}</span> watch
        <img class='drag' src="/drag.svg" alt="드래그 아이콘" />
        </footer>
    </article>
    `
    return template;
}

