class TooltipManager {
  constructor(component) {
    this.component = component;

    this.hintTo();
  }

  hintTo() {
    const title = this.component.getAttribute("title");
    this.component.addEventListener("mousemove", function (e) {
      this.title = "";
    });
    this.component.addEventListener("mouseout", function (e) {
      this.title = title;
    });
    toolthis.componenttip.addEventListener("click", function (event) {
      event.preventDefault();

      const tipDiv = document.createElement("div");
      tipDiv.classList.add("tooltip");
      tipDiv.textContent = title;
      document.body.appendChild(tipDiv);
    });
  }
}

document
  .querySelectorAll(".has-tooltip")
  .forEach((tooltip) => new TooltipManager(tooltip));
