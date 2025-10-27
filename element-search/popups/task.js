(function () {
  const modals = Array.from(document.querySelectorAll(".modal"));

  function showModal(modal) {
    if (!modal) return;
    modal.classList.add("modal_active");
  }

  function hideModal(modal) {
    if (!modal) return;
    modal.classList.remove("modal_active");
  }

  function getActiveModal() {
    return modals.find((m) => m.classList.contains("modal_active")) || null;
  }

  const modalMain = document.getElementById("modal_main");
  if (modalMain) {
    showModal(modalMain);
  }

  document.addEventListener("click", function (e) {
    const target = e.target;

    if (target.classList && target.classList.contains("modal__close")) {
      const active = getActiveModal();
      if (active) {
        hideModal(active);
      }
    }

    if (target.classList && target.classList.contains("show-success")) {
      const modalSuccess = document.getElementById("modal_success");

      const active = getActiveModal();
      if (active) hideModal(active);

      showModal(modalSuccess);
    }
  });
})();
