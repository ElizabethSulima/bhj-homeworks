class TooltipManager {
  constructor(component) {
    this.component = component;
  }

  hintTo() {
    this.component.forEach((tooltip) => {
      const title = tooltip.getAttribute("title");
      tooltip.addEventListener("mousemove", function (e) {
        this.title = "";
      });
      tooltip.addEventListener("mouseout", function (e) {
        this.title = title;
      });
      tooltip.addEventListener("click", function (event) {
        event.preventDefault();

        const tipDiv = document.createElement("div");
        tipDiv.className = "tooltip";
        tipDiv.textContent = title;
        document.body.appendChild(tipDiv);
      });
    });
  }
}

new TooltipManager(document.querySelectorAll(".has-tooltip"));


