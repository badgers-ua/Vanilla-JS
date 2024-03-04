const routes = {
  "/": "app-home",
  "/about": "app-about",
};

class AppRouter extends HTMLElement {
  routes = routes || {};

  connectedCallback() {
    const navigateToCurrentLocation = () => {
      const path = window.location.pathname;
      this.navigate(path);
    };

    window.addEventListener("DOMContentLoaded", () => {
      navigateToCurrentLocation();
    });

    window.addEventListener("popstate", () => {
      navigateToCurrentLocation();
    });

    document.addEventListener("click", (event) => {
      const path = event.composedPath();
      const anchor = path.find((element) => {
        return (
          element.tagName === "A" &&
          element.getAttribute("href").startsWith("/")
        );
      });
      if (anchor) {
        event.preventDefault();
        const path = anchor.getAttribute("href");
        history.pushState(null, "", path);
        this.navigate(path);
      }
    });
  }

  constructor() {
    super();
    // this.addRoute("/", "app-view");
    // this.addRoute("/about", "app-view");
  }

  addRoute(path, elementName) {
    this.routes[path] = elementName;
  }

  navigate(path) {
    const elementName = this.routes[path];
    if (elementName) {
      const viewElement = document.createElement(elementName);
      this.innerHTML = "";
      this.appendChild(viewElement);
    } else {
      console.error("Route not found!");
    }
  }
}

customElements.define("app-router", AppRouter);
