class Header extends HTMLElement {
    constructor() {
      super();
    }


    connectedCallback(){
        this.innerHTML = `
            <div>
                <div class="pg-bar" id="topBar">
                    <p>Newschain</p>
                </div>
                <div class="pg-bar" id="navBar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="html/submit.html">Submit an Article</a></li>
                    </ul>
                </div>
            </div>;
            `
    }
}

customElements.define('header-component', Header);