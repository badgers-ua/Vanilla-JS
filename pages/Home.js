class HomePage extends HTMLElement {
  connectedCallback() {
    const template = document.createElement("p");
    template.textContent = "home view";
    this.appendChild(template);
  }
}

customElements.define("app-home", HomePage);
