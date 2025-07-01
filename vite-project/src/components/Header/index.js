// 상대경로
// import { navigate } from "../../router/index";

// 절대경로
import { Link } from "/src/components/Header/Link";
import { navigate } from "/src/router/index";

export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});

    // 생성될 네비게이션 아이템 목록들에 대한 정보 (=파라미터)
    this.linkList = [
      {to:'/',label:'HOME'},
      {to:'/about',label:'ABOUT'},
      {to:'/contact',label:'CONTACT'},
    ]

    this.render();

    // a가 이제 shadow root에 들어갔기 때문에 아래가 동작하지 않는다
    // 여기서 this는 c-header다
    // this.links = this.shadowRoot.querySelectorAll('a')
    // 노드리스트는 배열이 아니라 map을 쓸 수 없기 때문에 전개 구문 사용해서 this.links로 설정
    this.links = [...this.shadowRoot.querySelectorAll('header-link')];
    console.log(this.shadowRoot.querySelectorAll('header-link'));


    // 쉐도우 루트 안에 li를 접근해야하기때문에 다시 아래코드로 a에 접근한다
    this.aa = this.links.map((link)=> link.shadowRoot.querySelector('a'));
    
    this.attachEvent();
  }

  handleRouter(e){
    e.preventDefault();
    navigate(e.target.href)
  }

  attachEvent(){
    this.aa.forEach((a)=>{
      // bind가 전달하는 this는 c-header다
      a.addEventListener('click',this.handleRouter.bind(this))
    })
  }

  render() {

    const linkItems = this.linkList
    .map(({to,label})=> `<header-link to="${to}">${label}</header-link>`)
    .join('')

    this.shadowRoot.innerHTML = `
      <style>
        :host{
          width: 100vw;
        }
        header{
          background: orange;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:1rem;
          
          h1{
            margin:0;
          }

          ul{
            list-style:none;
            display:flex;
            gap:1rem;
          }
        }
      </style>
      <header>
        <h1 class="logo">❤️</h1>
        <nav>
          <ul>
            ${ this.linkList && linkItems}
          </ul>
        </nav>
      </header>

    `
  }
}