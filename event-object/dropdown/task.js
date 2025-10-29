(function () {
  // Найти все контролы dropdown на странице
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropdown__trigger");
    const valueEl = dropdown.querySelector(".dropdown__value");
    const list = dropdown.querySelector(".dropdown__list");
    // В случае, если структура предполагает .dropdown__list может
    // быть внутри, используем относительный поиск
    const items = list ? list.querySelectorAll(".dropdown__item") : [];

    // Установить начальное состояние: скрыть список, если он не должен быть видим
    // list.classList.remove('dropdown__list_active');

    // Функция закрытия списка
    const closeList = () => {
      if (list) list.classList.remove("dropdown__list_active");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    };

    // Функция открытия списка
    const openList = () => {
      if (list) list.classList.add("dropdown__list_active");
      if (trigger) trigger.setAttribute("aria-expanded", "true");
    };

    // Клик по кнопке-триггеру: открыть/закрыть
    if (trigger) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = list && list.classList.contains("dropdown__list_active");
        // Закрыть все другие выпадашки, чтобы на странице было одно открытое (опционально)
        closeAllExcept(list);
        if (isOpen) {
          closeList();
        } else {
          openList();
        }
      });
    }

    // Нажатие на пункт меню
    items.forEach((item) => {
      const link = item.querySelector(".dropdown__link");
      if (!link) return;

      // Нажатие по ссылке: запрещаем переход и устанавливаем значение
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // Установить выбранное значение в элемент .dropdown__value
        if (valueEl) {
          valueEl.textContent = link.textContent.trim();
        }
        // Закрыть список после выбора
        closeList();
      });

      // Опционально: при клике по самому пункту (например, клика по li)
      // можно также закрывать и устанавливать, если нужно
    });

    // Закрывать выпадающий список при клике вне блока
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        closeList();
      }
    });
  });

  // Вспомогательная функция: закрыть все списки, кроме указанного
  function closeAllExcept(exceptList) {
    document.querySelectorAll(".dropdown__list").forEach((lst) => {
      if (lst !== exceptList) lst.classList.remove("dropdown__list_active");
    });
    // Обновить aria-expanded у всех триггеров
    document.querySelectorAll(".dropdown__trigger").forEach((t) => {
      if (t && t.closest(".dropdown")) {
        const lst = t.closest(".dropdown").querySelector(".dropdown__list");
        if (lst && lst.classList.contains("dropdown__list_active")) {
          t.setAttribute("aria-expanded", "true");
        } else {
          t.setAttribute("aria-expanded", "false");
        }
      }
    });
  }
})();
