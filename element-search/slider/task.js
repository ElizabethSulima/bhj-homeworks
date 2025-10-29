function initSlider(sliderRoot) {
  const items = Array.from(sliderRoot.querySelectorAll(".slider__item"));
  const hasActive = items.some((item) =>
    item.classList.contains("slider__item_active")
  );
  if (!hasActive) items[0].classList.add("slider__item_active");

  const dotsContainer = document.querySelector(".slider__dots");
  const dots = Array.from(dotsContainer.querySelectorAll(".slider__dot"));

  function updateDotsActive(index) {
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("slider__dot_active");
      } else {
        dot.classList.remove("slider__dot_active");
      }
    });
  }

  const state = {
    root: sliderRoot,
    items: items,
    currentIndex: items.findIndex((itemIndex) =>
      itemIndex.classList.contains("slider__item_active")
    ),
  };

  function showIndex(index) {
    const count = state.items.length;

    let idx = index;
    if (idx < 0) idx = count + idx;
    if (idx >= count) idx = idx % count;

    state.items[state.currentIndex].classList.remove("slider__item_active");
    state.items[idx].classList.add("slider__item_active");
    state.currentIndex = idx;
    updateDotsActive(idx);
  }

  dotsContainer.addEventListener("click", function (e) {
    const dot = e.target.closest(".slider__dot");
    if (!dot) return;

    const index = dots.indexOf(dot);
    if (index >= 0) {
      showIndex(index);
    }
  });

  return {
    showIndex,
    getCurrentIndex: () => state.currentIndex,
    getCount: () => state.items.length,
  };
}

function registerAllSliders() {
  const sliders = Array.from(document.querySelectorAll(".slider"));

  sliders.forEach((sliderRoot) => {
    const sliderAPI = initSlider(sliderRoot);

    const prevBtn = sliderRoot.querySelector(".slider__arrow_prev");
    const nextBtn = sliderRoot.querySelector(".slider__arrow_next");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        sliderAPI.showIndex(sliderAPI.getCurrentIndex() - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        sliderAPI.showIndex(sliderAPI.getCurrentIndex() + 1);
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", registerAllSliders);