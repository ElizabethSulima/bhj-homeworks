let dead = 0,
  lost = 0,
  maxScore = 10,
  maxLosses = 5;

const deadEl = document.getElementById("dead");
const lostEl = document.getElementById("lost");

const resetStats = () => {
  (dead = 0), (lost = 0), (deadEl.textContent = dead);
  lostEl.textContent = lost;
};

const holes = document.querySelectorAll(".hole");
holes.forEach((hole) => {
  hole.addEventListener("click", function () {
    const hasMole = hole.classList.contains("hole_has-mole");

    if (hasMole) {
      dead++;
      deadEl.textContent = dead;

      hole.classList.remove("hole_has-mole");

      if (dead >= maxScore) {
        alert("Победа!");
        endGame();
        return;
      }
    } else {
      lost++;
      lostEl.textContent = lost;

      if (lost >= maxLosses) {
        alert("Поражение!");
        endGame();
        return;
      }
    }
  });
});

const endGame = () => {
  playing = false;

  setTimeout(() => {
    resetStats();
  }, 0);
};
