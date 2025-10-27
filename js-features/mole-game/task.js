let dead = 0,
  lost = 0;

const deadEl = document.getElementById("dead");
const lostEl = document.getElementById("lost");

const resetStats = () => {
  location.reload();
};

const holes = document.querySelectorAll(".hole");
holes.forEach((hole) => {
  hole.addEventListener("click", function () {
    if (this.classList.contains("hole_has-mole")) {
      dead++;
      deadEl.textContent = dead;

      hole.classList.remove("hole_has-mole");

      if (dead === 10) {
        endGame("Победа!");
        return;
      }
    } else {
      lost++;
      lostEl.textContent = lost;

      if (lost === 5) {
        endGame("Поражение!");
        return;
      }
    }
  });
});

const endGame = (message) => {
  alert(message);
};
