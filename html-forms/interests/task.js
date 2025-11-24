function InterestBox() {
  const parentCheckbox = document.querySelector(".interest__check");

  function setChildCheckboxesState(root, checked) {
    const childCheckboxes = root.querySelectorAll(
      'ul.interests input[type="checkbox"]'
    );
    childCheckboxes.forEach((box) => {
      box.checked = checked;
    });
  }

  parentCheckbox.addEventListener("change", function () {
    const nestedList =
      this.closest("li.interest").querySelector("ul.interests");
    if (nestedList) {
      setChildCheckboxesState(nestedList, this.checked);
    }
  });
}

InterestBox();
