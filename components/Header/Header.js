import headerCSS from "header.css" assert { type: "css" };

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const header = document.createElement("header");
    header.setAttribute("class", "header");

    const homeLink = document.createElement("a");
    homeLink.href = "/";
    homeLink.textContent = "Go Home";

    const aboutLink = document.createElement("a");
    aboutLink.href = "/about";
    aboutLink.textContent = "Go About";

    header.append(homeLink, aboutLink);

    this.shadowRoot.adoptedStyleSheets = [headerCSS];

    shadow.appendChild(header);
  }
}

customElements.define("app-header", Header);
