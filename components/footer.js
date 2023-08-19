class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
        <footer id="main-footer">
        <a href="https://www.facebook.com/geoffrey.ameble"><i class="fab fa-facebook fa-2x"></i>
          <a href="https://github.com/Aceofthehood1"><i class="fab fa-github fa-2x"></i>
            <a href="https://twitter.com/GeoffreyAmeble1"><i class="fab fa-twitter fa-2x"></i>
              <a href="https://www.instagram.com/geoff_rey101/"><i class="fab fa-instagram fa-2x"></i>
                <a href="https://www.linkedin.com/in/geoffrey-ameble-310560171/"><i class="fab fa-linkedin fa-2x"></i>
      </footer>
        `;
      }
  }

  customElements.define('footer-component', Footer);