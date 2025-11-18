class BookReader {
  constructor(component) {
    this.component = component;
    this.controlSize = this.component.querySelector(".book__control_font-size");
    this.sizeButtons = [...this.controlSize.querySelectorAll(".font-size")];

    this.controlColor = this.component.querySelector(".book__control_color");
    this.colorButtons = [...this.controlColor.querySelectorAll(".color")];

    this.controlBackground = this.component.querySelector(
      ".book__control_background"
    );
    this.backColorButtons = this.controlBackground.querySelectorAll(".color");
    this.bindHandlers();
  }

  applySize(size, buttonEl) {
    this.sizeButtons.forEach((button) =>
      button.classList.remove("font-size_active")
    );
    if (buttonEl) {
      buttonEl.classList.add("font-size_active");
    }
    this.component.classList.remove("font-size_small", "font-size_big");
    this.component.classList.add(`font-size_${size}`);
  }

  applyColor(color, buttonEl) {
    this.colorButtons.forEach((button) =>
      button.classList.remove("color_active")
    );
    if (buttonEl) {
      buttonEl.classList.add("color_active");
    }
    this.component.classList.remove(
      "book_color-gray",
      "book_color-whitesmoke",
      "book_color-black"
    );
    this.component.classList.add(`book_color-${color}`);
  }

  applyBackColor(color, buttonEl) {
    this.backColorButtons.forEach((button) =>
      button.classList.remove("color_active")
    );
    if (buttonEl) {
      buttonEl.classList.add("color_active");
    }
    this.component.classList.remove(
      "book_bg-gray",
      "book_bg-white",
      "book_bg-black"
    );
    this.component.classList.add(`book_bg-${color}`);
  }

  bindHandlers() {
    this.sizeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        this.applySize(button.dataset.size, button);
      });
    });

    this.colorButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        this.applyColor(button.getAttribute("data-text-color"), button);
      });
    });

    this.backColorButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        this.applyBackColor(button.getAttribute("data-bg-color"), button);
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
      return button.getAttribute("data-size") === currentKey;
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
