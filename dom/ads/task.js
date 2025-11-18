class Rotator {
  constructor(component) {
    this.component = component.querySelector(".rotator");
    this.cases = [...this.component.querySelectorAll(".rotator__case")];
    this.speed = this.cases[0].dataset.speed;
    this.cases[0].style.color = this.cases[0].dataset.color;
  }

  switchTo() {
    const callback = () => {
      let activeIndex = this.cases.findIndex((caseIdx) =>
        caseIdx.classList.contains("rotator__case_active")
      );

      this.speed = this.cases[activeIndex].dataset.speed;

      this.cases[activeIndex].classList.remove("rotator__case_active");
      activeIndex = (activeIndex + 1) % this.cases.length;
      this.cases[activeIndex].classList.add("rotator__case_active");

      this.cases[activeIndex].style.color =
        this.cases[activeIndex].dataset.color;

      setTimeout(callback, this.speed);
    };

    setTimeout(callback, this.speed);
  }
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => new Rotator(card).switchTo());
