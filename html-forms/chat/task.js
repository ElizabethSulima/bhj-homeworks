class ChatBot {
  constructor(component) {
    this.component = component;
    this.inputMessage = this.component.querySelector(".chat-widget__input");
    this.messages = this.component.querySelector(".chat-widget__messages");
    this.botMessage = [
      "Где Ваша совесть?",
      "Вы не купили ни одного товара, чтобы с нами так разговаривать",
      "Кто тут?",
      "Добрый день.  До свидания!",
      "К сожалению все операторы в данный момент заняты. Не пишите нам больше!",
    ];
    this.currentTime = this.getCurrentTime;
  }

  getCurrentTime() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  }

  submitMessageUser() {}

  submitMessageBot() {}

  openChat() {
    this.component.addEventListener("click", (event) => {
      if (!this.component.classList.contains("chat-widget_active")) {
        this.component.classList.add("chat-widget_active");
      }
    });
  }
}

const chat = new ChatBot(document.querySelector(".chat-widget"));
chat.openChat();
