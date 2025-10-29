(function () {
  const modals = [...document.querySelectorAll(".modal")];

  function showModal(modal) {
    modal.classList.add("modal_active");
  }

  function hideModal(modal) {
    modal.classList.remove("modal_active");
  }

  function getActiveModal() {
    return modals.find((m) => m.classList.contains("modal_active"));
  }

  const modalMain = document.querySelector("#modal_main");
  if (modalMain) {
    showModal(modalMain);
  }

  document.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("modal__close")) {
      const active = getActiveModal();
      if (active) {
        hideModal(active);
      }
    }
    if (target.classList.contains("show-success")) {
      const modalSuccess = document.querySelector("#modal_success");
      const active = getActiveModal();
      if (active) hideModal(active);
      showModal(modalSuccess);
    }
  });
})();
