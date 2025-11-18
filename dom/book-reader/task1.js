class BookReader {
  constructor(component) {
    this.component = component;
    this.controlSize = this.component.querySelector(".book__control_font-size");
    this.sizeButtons = [...this.controlSize.querySelectorAll(".font-size")];
    this.controlColor = this.component.querySelector(".book__control_color");
    this.colorButtons = [...this.controlColor.querySelectorAll(".color")];
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


  bindHandlers() {
    this.sizeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        this.applySize(button.dataset.size, button);
      });
    });
  }

  initColorControls() {
    // Контролы цвета текста
    const textColorControls = document.querySelectorAll(
      ".book__control_color .text_color_black, \
       .book__control_color .text_color_gray, \
       .book__control_color .text_color_whitesmoke"
    );

    textColorControls.forEach((control) => {
      control.addEventListener("click", (event) => {
        event.preventDefault();
        const color = control.getAttribute("data-text-color");
        // Удаляем старый цвет текста
        this.bookEl.classList.remove(
          "book_color-black",
          "book_color-gray",
          "book_color-whitesmoke"
        );
        // Применяем новый цвет
        this.bookEl.classList.add(`book_color-${color}`);
        // Активируем текущий элемент
        this._setActiveControl(control, ".book__control_color .color");
      });
    });

    // Контролы цвета фона
    const bgColorControls = document.querySelectorAll(
      ".book__control_background .bg_color_black, \
       .book__control_background .bg_color_gray, \
       .book__control_background .bg_color_white"
    );

    bgColorControls.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        const color = control.getAttribute("data-bg-color");
        // Удаляем старый фон
        this.bookEl.classList.remove(
          "book_bg-black",
          "book_bg-gray",
          "book_bg-white"
        );
        // Применяем новый фон
        this.bookEl.classList.add(`book_bg-${color}`);
        // Активируем текущий элемент
        this._setActiveControl(control, ".book__control_background .color");
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
