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
      const tool = document.querySelector(".tooltip");
      tool.remove("tooltip_active");
    });

    this.component.addEventListener("click", (event) => {
      event.preventDefault();

      const tipDiv = document.createElement("div");
      tipDiv.classList.add("tooltip", "tooltip_active");
      tipDiv.textContent = title;
      document.body.appendChild(tipDiv);

      const rect = this.component.getBoundingClientRect();
      tipDiv.style.top = rect.bottom + "px";
      tipDiv.style.left = rect.left + "px";
    });
  }
}

document
  .querySelectorAll(".has-tooltip")
  .forEach((tooltip) => new TooltipManager(tooltip));
