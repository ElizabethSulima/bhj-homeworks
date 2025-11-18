function book() {
  const controlContainer = document.querySelector(".book__control_font-size");
  const bookElement = document.querySelector(".book");
  const sizeButtons = [...controlContainer.querySelectorAll(".font-size")];
  const sizeClasses = {
    small: "book_fs-small",
    normal: "",
    big: "book_fs-big",
  };

  function applySize(sizeKey, buttonEl) {
    sizeButtons.forEach((btn) => btn.classList.remove("font-size_active"));

    if (buttonEl) {
      buttonEl.classList.add("font-size_active");
    }
    bookElement.classList.remove("book_fs-small", "book_fs-big");
    if (sizeClasses[sizeKey]) {
      bookElement.classList.add(sizeClasses[sizeKey]);
    }
  }

  sizeButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      applySize(btn.getAttribute("data-size"), btn);
    });
  });

  function initFromCurrentState() {
    let currentKey = "normal";
    if (bookElement.classList.contains("book_fs-big")) currentKey = "big";
    else if (bookElement.classList.contains("book_fs-small"))
      currentKey = "small";
    else currentKey = "normal";

    const matchedBtn = sizeButtons.find((button) => {
      return button.getAttribute("data-size") === currentKey;
    });

    if (matchedBtn) {
      matchedBtn.classList.add("font-size_active");
    } else if (sizeButtons.length > 0) {
      sizeButtons[0].classList.add("font-size_active");
    }

    applySize(currentKey, matchedBtn);
  }

  initFromCurrentState();
}

book();
