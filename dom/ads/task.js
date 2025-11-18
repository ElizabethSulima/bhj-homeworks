class Rotator {
  constructor(component) {
    this.component = component.querySelector(".rotator");
    this.cases = [...this.component.querySelectorAll(".rotator__case")];
    this.currentIndexEl = 0;
    this.speed = this.cases[this.currentIndexEl].dataset.speed;
    this.cases[0].style.color = this.cases[this.currentIndexEl].dataset.color;
  }

  switchTo() {
    const callback = () => {
      let activeIndex = this.currentIndexEl;

      this.speed = this.cases[activeIndex].dataset.speed;
      this.cases[activeIndex].classList.remove("rotator__case_active");

      this.currentIndexEl = (activeIndex + 1) % this.cases.length;
      this.cases[this.currentIndexEl].classList.add("rotator__case_active");

      this.cases[this.currentIndexEl].style.color =
        this.cases[this.currentIndexEl].dataset.color;

      setTimeout(callback, this.speed);
    };
    this.currentIndexEl = 0;
    setTimeout(callback, this.speed);
  }
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => new Rotator(card).switchTo());
