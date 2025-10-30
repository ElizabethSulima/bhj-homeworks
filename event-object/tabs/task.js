function tabNavigations() {
  const tabNavigations = document.querySelectorAll(".tab__navigation");

  tabNavigations.forEach((nav) => {
    const contents = nav.nextElementSibling;

    let tabContentGroup = contents;
    if (!tabContentGroup) {
      const root = nav.closest(".tab__container") || document.body;
      tabContentGroup = root.querySelector(".tab__contents");
    }

    const tabs = [...nav.querySelectorAll(".tab")];

    const contentsItems = [
      ...tabContentGroup.querySelectorAll(".tab__content"),
    ];

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        const activeTab = nav.querySelector(".tab_active");
        const activeContent = tabContentGroup.querySelector(
          ".tab__content_active"
        );

        if (activeTab) {
          activeTab.classList.remove("tab_active");
        }
        if (activeContent) {
          activeContent.classList.remove("tab__content_active");
        }

        tab.classList.add("tab_active");
        if (contentsItems[index]) {
          contentsItems[index].classList.add("tab__content_active");
        }
      });
    });
  });
}

tabNavigations();
