class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header id="top">
          <div class="container">
            <nav>
              <ul>
                <li><a href="#welcome">Home</a></li>
                <li><a href="#grid-title">Portfolio</a></li>
                <li><a href="#about-title">About Me</a></li>
                <li><a href="#contacts-title">Contacts</a></li>
              </ul>
            </nav>
          </div>
      </header>
        `;
  }
}

customElements.define('header-component', Header);