class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.timerLeftElement = container.querySelector(".timeLeft");

    this.reset();
    this.registerEvents();

    const N = this.wordElement.length || 1;
    let timeLimit = N;
    let timerInterval = null;
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener("keyup", (event) => {
      const charEl = event.key.length === 1 ? event.key : "";

      if (event.key.length !== 1) {
        return;
      }

      if (
        event.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()
      ) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current"))
      this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add("symbol_current");
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }

  updateTimeDisplay() {
    this.timerLeftElement.textContent = timeLimit;

    if (timeLimit <= 0) {
    }
  }

  startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
      timeLimit = Math.max(0, timeLimit - 1);
      updateTimeDisplay();
    }, 1000);
  }

  stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }
}

new Game(document.getElementById("game"));
