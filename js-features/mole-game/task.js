(() => {
  let playing = true,
    activeHole = 1,
    dead = 0,
    lost = 0,
    maxScore = 10,
    maxLosses = 5;

  const deadEl = document.getElementById("dead");
  const lostEl = document.getElementById("lost");

  const resetStats = () => {
    (dead = 0), (lost = 0), (deadEl.textContent = dead);
    lostEl.textContent = lost;
  };

  const getHole = (index) => document.getElementById(`hole${index}`);
  const deactivateHole = (index) => (getHole(index).className = "hole");
  const activateHole = (index) =>
    (getHole(index).className = "hole hole_has-mole");

  const stop = () => (playing = true),
    next = () =>
      setTimeout(() => {
        if (!playing) {
          return;
        }
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
      }, 800);

  const onHoleClick = (idx) => {
    const holeEl = getHole(idx);
    const hasMole = holeEl.classList.contains("hole_has-mole");

    if (hasMole) {
      dead++;
      deadEl.textContent = dead;

      holeEl.classList.remove("hole_has-mole");

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
  };

  const endGame = () => {
    playing = false;

    for (let i = 1; i <= 9; i++) {
      deactivateHole(i);
    }
    setTimeout(() => {
      resetStats();
    }, 0);
  };

  for (let i = 1; i <= 9; i++) {
    const holeEl = getHole(i);
    holeEl.addEventListener("click", () => onHoleClick(i));
  }

  next();
})();
