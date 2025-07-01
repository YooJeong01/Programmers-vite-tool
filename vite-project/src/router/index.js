import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "/src/pages/Contact";
import NotFound from "/src/pages/NotFound";
import gsap from 'gsap';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
}


export function router(){
    // 주소 긁어오기 (URL)
    const path = location.pathname;
    const app = document.querySelector('#app');

    gsap.defaults({
        ease:'power3.inOut'
    })

    gsap.to(app, {opacity:1, x:"-100%"})


    // routes 객체에 접근해서 value값 가져오고 render
    // 쌩뚱맞 정보면 not found render
    const render = routes[path] || NotFound
    // 이게 있어야 이전게 없어지겠죠? 안 비워주면 계속 내용이 쌓인다
    app.innerHTML = ''
    app.insertAdjacentHTML("beforeend",render());


    gsap.fromTo(app,{opacity:0, x:"100%"},{opacity:1, x:0})
}


export function navigate(path){
    // 새로고침이 일어나지 않게하면서 주소가 바뀌게 해 줌
    history.pushState({},'', path);
    router();
}

// 뒤로가기 앞으로가기 실행을 위해서
window.addEventListener('popstate', router);

