const interests = document.querySelectorAll(".interest");

class Interest {
  constructor(component) {
    this.component = component;
    this.input = this.component.querySelector(".interest__check");
    this.init();
  }
  init() {
    this.input.addEventListener("change", () => {
      [...this.component.querySelectorAll(".interest__check")]
        .filter((el) => el !== this.input)
        .forEach((element) => {
          element.checked = this.input.checked;
        });
    });
  }
}

interests.forEach((interest) => new Interest(interest));
