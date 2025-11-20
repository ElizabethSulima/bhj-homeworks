class InterestsManager {
  constructor(component) {
    this.component = component;
    this.interestsCheck = [
      ...this.component.querySelectorAll(".interest__check"),
    ];
  }
}

const manager = new InterestsManager(document.querySelector(".interests"));
