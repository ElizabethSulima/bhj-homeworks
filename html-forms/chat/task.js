class ChatBot {
  constructor(component) {
    this.component = component;
    this.inputMessage = this.component.querySelector(".chat-widget__input");
    this.messages = [];
    this.botMessage = [
      "Где Ваша совесть?",
      "Вы не купили ни одного товара, чтобы с нами так разговаривать",
      "Кто тут?",
      "Добрый день.  До свидания!",
      "К сожалению все операторы в данный момент заняты. Не пишите нам больше!",
    ];
    this.message_container = this.component.querySelector(
      ".chat-widget__messages-container"
    );
  }

  getCurrentTime() {
    return new Date().toLocaleString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  addUserMessage(text) {
    this.message_container.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${this.getCurrentTime()}</div>
          <div class="message__text">
          ${text}
          </div>
      </div>`;
    this.message_container.scrollTop = this.message_container.scrollHeight;
  }

  addBotMessage() {
    const randomIndex = Math.floor(Math.random() * this.botMessage.length);
    this.message_container.innerHTML += `
      <div class="message">
        <div class="message__time">${this.getCurrentTime()}</div>
          <div class="message__text">
          ${this.botMessage[randomIndex]}
          </div>
      </div>`;
    this.message_container.scrollTop = this.message_container.scrollHeight;
  }

  enterMessage() {
    this.inputMessage.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.addUserMessage(this.inputMessage.value);
        this.inputMessage.value = "";
        this.addBotMessage();
      }
    });
  }

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
chat.enterMessage();
