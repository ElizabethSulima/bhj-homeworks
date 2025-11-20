class Card {
  constructor(component) {
    this.component = component.querySelector(".interests");
    this.interestsCheck = [
      ...this.component.querySelectorAll(".interest__check"),
    ];
  }
}

const card = new Card(document.querySelector(".card"));
