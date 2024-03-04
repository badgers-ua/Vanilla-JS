class AboutPage extends HTMLElement {
  connectedCallback() {
    const template = document.createElement("p");
    template.textContent = "about view";
    this.appendChild(template);
  }
}

customElements.define("app-about", AboutPage);
