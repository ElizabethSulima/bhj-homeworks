class BookReader {
  constructor(component) {
    this.component = component;
    this.controlSize = this.component.querySelector(".book__control_font-size");
    this.sizeButtons = [...this.controlSize.querySelectorAll(".font-size")];
  }

  applySize(size, buttonEl) {
    this.sizeButtons.forEach((button) =>
      button.classList.remove("font-size_active")
    );
    if (buttonEl) {
      buttonEl.classList.add("font-size_active");
    }
    this.component.classList.remove("font-size_small", "font-size_big");
    this.component.classList.add(size);
  }

  bindHandlers() {
    this.sizeButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        this.applySize(button.dataset.size, button);
      });
    });
  }

  initFromCurrentState() {
    let currentKey = "normal";

    if (this.component.classList.contains("font-size_big")) currentKey = "big";
    else if (this.component.classList.contains("font-size_small"))
      currentKey = "small";
    else currentKey = "normal";

    const matchedBtn = this.sizeButtons.find((button) => {
      return button.dataset.size === currentKey;
    });

    if (matchedBtn) {
      matchedBtn.classList.add("font-size_active");
    } else if (this.sizeButtons.length > 0) {
      this.sizeButtons[0].classList.add("font-size_active");
    }

    this.applySize(currentKey, matchedBtn);
  }
}

const book = new BookReader(document.querySelector(".book"));
// book.initFromCurrentState();
