export class Link extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.href = this.getAttribute('to') || '/'
        this.label = this.textContent || ''

        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=/*html*/`
            <li><a href="${this.href}">${this.label}</li>
        `
    }
        
}

customElements.define('header-link',Link);

