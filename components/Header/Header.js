import headerCSS from "header.css" assert { type: "css" };

class Header extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  _data = [];

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
    this.render();
  }

  constructor() {
    super();
  }

  render() {
    this.shadow.innerHTML = "";
    const header = document.createElement("header");
    header.setAttribute("class", "header");

    const homeLink = document.createElement("a");
    homeLink.href = "/";
    homeLink.textContent = "Go Home";

    const aboutLink = document.createElement("a");
    aboutLink.href = "/about";
    aboutLink.textContent = "Go About";

    const els = this.data.map((item) => {
      const el = document.createElement("p");
      el.textContent = item;
      return el;
    });

    header.append(homeLink, aboutLink, ...els);

    this.shadowRoot.adoptedStyleSheets = [headerCSS];

    this.shadow.appendChild(header);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("app-header", Header);
