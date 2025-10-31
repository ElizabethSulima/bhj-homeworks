function reveal() {
  const reveals = [...document.querySelectorAll(".reveal")];

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function revealOnScroll() {
    reveals.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add("reveal_active");
      }
    });
  }
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
}

reveal();
