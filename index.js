import "header.component";
import "home.page";
import "about.page";
import "router";

class AppRoot extends HTMLElement {
  connectedCallback() {
    const appHeader = document.createElement("app-header");
    appHeader["data"] = [1, 2, 3];
    const appRouter = document.createElement("app-router");
    this.append(appHeader, appRouter);
  }
}

customElements.define("app-root", AppRoot);
