class PlainManager {
  constructor(component) {
    this.component = component;
    this.input = this.component.querySelector(".tasks__input");
    this.buttonAdd = this.component.querySelector(".tasks__add");
    this.container = this.component.querySelector(".tasks__list");
    this.remove = this.component.querySelector(".task__remove");
    this.form = this.component.querySelector(".tasks__control");

    this.addTask();
  }

  taskListInsert(inputValue) {
    this.container.innerHTML += `<div class="task">
                 <div class="task__title">${inputValue}</div>
                 <a href="#" class="task__remove">&times;</a>
              </div>`;
  }

  addTask() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.taskListInsert(this.input.value.trim());
    });
  }

  removeTask() {
    this.remove.addEventListener("click", (event) => {
      event.preventDefault();
      const task = this.remove.closest(".task");
      if (task) task.remove();
    });
  }
}

new PlainManager(document.querySelector(".tasks"));
