function tabNavigations() {
  const tabs = document.querySelectorAll(".tab__navigation .tab");
  const contents = document.querySelectorAll(".tab__contents .tab__content");

  const tabIndices = [...tabs];
  const contentIndices = [...contents];

  function activateTabByIndex(index) {
    tabs.forEach((t) => t.classList.remove("tab_active"));
    contents.forEach((c) => c.classList.remove("tab__content_active"));

    if (typeof index === "number") {
      if (tabs[index]) tabs[index].classList.add("tab_active");
      if (contents[index]) contents[index].classList.add("tab__content_active");
    }
  }

  activateTabByIndex(0);

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      const idx = tabIndices[i];
      const contIdx = contentIndices[i];

      if (idx === contIdx) {
        activateTabByIndex(idx);
      } else {
        activateTabByIndex(i);
      }
    });
  });
}

tabNavigations();
