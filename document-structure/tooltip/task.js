class TooltipManager {
  constructor(component) {
    this.component = component;

    this.hintTo();
  }

  hintTo() {
    const title = this.component.getAttribute("title");

    this.component.addEventListener("mousemove", function (e) {
      this.title = "";
      this.component.classList.remove("tooltip_active");
    });

    this.component.addEventListener("mouseout", function (e) {
      this.title = title;
    });

    this.component.addEventListener("click", function (event) {
      event.preventDefault();

      const tipDiv = document.createElement("div");
      tipDiv.classList.add("tooltip");
      tipDiv.textContent = title;

      const rect = this.component.getBoundingClientRect();
      tipDiv.style.position = "fixed";
      tipDiv.style.top = rect.top + "px";
      tipDiv.style.left = rect.left + "px";
      tipDiv.textContent = title;

      document.body.appendChild(tipDiv);
    });
  }
}

document
  .querySelectorAll(".has-tooltip")
  .forEach((tooltip) => new TooltipManager(tooltip));
