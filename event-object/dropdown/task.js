function dropDown() {
  const dropdown = document.querySelector(".dropdown");
  const dropdownValue = dropdown.querySelector(".dropdown__value");
  const dropdownList = dropdown.querySelector(".dropdown__list");
  const dropdownItems = dropdown.querySelectorAll(".dropdown__item");

  function toggleList() {
    dropdownList.classList.toggle("dropdown__list_active");
  }

  function closeList() {
    dropdownList.classList.remove("dropdown__list_active");
  }

  dropdownValue.addEventListener("click", function (event) {
    event.preventDefault();
    toggleList();
  });

  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const link = item.querySelector(".dropdown__link");
      dropdownValue.textContent = link.textContent.trim();

      closeList();
    });
  });

  document.addEventListener("mousedown", function (event) {
    if (!dropdown.contains(event.target)) {
      closeList();
    }
  });
}

dropDown();
