const links = document.querySelectorAll(".menu__link");
const menuSubs = [...document.querySelectorAll(".menu_sub")];

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    const item = link.closest(".menu__item");
    const nestedMenu = item.querySelector(".menu_sub");

    menuSubs
      .filter((sub) => sub !== nestedMenu)
      .forEach((sub) => {
        if (sub.classList.contains("menu_active")) {
          sub.classList.remove("menu_active");
        }
      });

    if (nestedMenu) {
      event.preventDefault();
      nestedMenu.classList.toggle("menu_active");
    }
  });
});
