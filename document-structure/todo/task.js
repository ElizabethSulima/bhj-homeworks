class PlainManager {
  constructor(component) {
    this.component = component;
    this.input = this.component.querySelector(".tasks__input");
    this.buttonAdd = this.component.querySelector(".tasks__add");
    this.container = this.component.querySelector(".tasks__list");
    this.form = this.component.querySelector(".tasks__control");
    this.storageKey = "tasks__list";

    this.addTask();

    if (localStorage.getItem(this.storageKey)) {
      this.loadFromStorage();
    }
  }

  taskListInsert(inputValue) {
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<div class="task__title">${inputValue}</div>
    <a href="#" class="task__remove">&times;</a>`;

    task.querySelector(".task__remove").addEventListener("click", (event) => {
      event.preventDefault();
      task.remove();
    });

    this.container.appendChild(task);
  }

  updateStorage() {
    const tasks = [];
    const taskElements = this.container.querySelectorAll(".task__title");
    taskElements.forEach((el) => {
      tasks.push(el.textContent);
    });
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  loadFromStorage() {
    const raw = localStorage.getItem(this.storageKey);
    const tasks = JSON.parse(raw);

    tasks.forEach((tsk) => this.taskListInsert(tsk));
  }

  addTask() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.taskListInsert(this.input.value.trim());
      this.updateStorage();
      this.form.reset();
    });
  }
}

new PlainManager(document.querySelector(".tasks"));
