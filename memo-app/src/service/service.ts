import { gsap } from "gsap";
import { renderMemo } from "../card"
import { main } from "../main"
import type { Tables } from "../supabase/database.types";
import { supabase } from "../supabase/supabase"


/**
 * fetchMemo 
 * supabase에서 데이터 가져오기
 * renderMemo호출
 */

export async function fetchMemo(){

    const {data, error} = await supabase.from('memo').select()
    
    // 이런식으로 테이블에서 값을 바로 뽑아올 수 있다
    // let a:Tables<'memo'>['priority']
    
    // 데이터가 쌓이지 않도록 비워주기
    main.innerHTML = '';
    data && data.forEach((d)=>{
        renderMemo(main,d)
    })
}


/**
 * deleteMemo
 * supabase의 delete 통신
 * id 기준 삭제
 * 
 */
export async function deleteMemo(id:number){
  const response = await supabase
  .from('memo')
  .delete()
  .eq('id', id)
  .select() // 삭제한 데이터를 받아올수도 있다

  fetchMemo();
}

/**
 * insertMemo
 * 제목, 내용, 중요도 데이터 받아서 insert통신
 * 
 */
export async function insertMemo({
    title, 
    description, 
    priority
}: Pick<Tables<'memo'>,'title'|'description'|'priority'>){
    const {error} = await supabase.from('memo').insert({
        title,
        description,
        priority
    })

    fetchMemo()

    const tl = gsap.timeline()
    .to('.pop', {y:'100%', ease:'power3.inOut'})
    .to('#dialog', {autoAlpha:0, duration:0.2})
}
