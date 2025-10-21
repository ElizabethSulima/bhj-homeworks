let timerElem = document.querySelector("#timer");
let seconds = parseInt(
  timerElem?.dataset?.seconds ?? timerElem?.textContent ?? "0",
  10
);

function startCountdown() {
  timerElem.textContent = seconds;

  const intervalId = setInterval(() => {
    seconds -= 1;
    timerElem.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(intervalId);
      alert("Вы победили в конкурсе!");
    }
  }, 1000);
}

startCountdown();
