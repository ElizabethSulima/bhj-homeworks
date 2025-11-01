function ads() {
  const rotators = document.querySelectorAll(".rotator");

  rotators.forEach((rotator) => {
    const cases = [...rotator.querySelectorAll(".rotator__case")];

    let activeIndex = cases.findIndex((c) =>
      c.classList.contains("rotator__case_active")
    );

    const next = () => {
      cases[activeIndex].classList.remove("rotator__case_active");
      activeIndex = (activeIndex + 1) % cases.length;
      cases[activeIndex].classList.add("rotator__case_active");
    };

    setInterval(next, 1000);
  });
}

ads();
