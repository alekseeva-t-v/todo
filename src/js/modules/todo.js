/**
 * Управляет формой для добавления новых задач, отвечает за вывод списка задач
 *
 */
function todoListShow() {
  const addTaskBtn = document.querySelector('#add-task-btn');
  const deskTaskInput = document.querySelector('#description-task');
  const todosWrapper = document.querySelector('.todos-wrapper');

  let tasks;

  !localStorage.tasks
    ? (tasks = [])
    : (tasks = JSON.parse(localStorage.getItem('tasks')));

  let todoItemElems = [];

  /**
   * Функция конструктор для формирования задач.
   *
   * @param {string} description Текстовое описание задачи.
   */
  function Task(description) {
    this.description = description;
    this.completed = false;
  }

  /**
   * Возвращает HTML шаблон вывода задачи.
   *
   * @param {object} task Объект с параметрами описывающими задачу.
   * @param {number} index Индекс задачи в массиве задач.
   * @return {string} разметку для вывода задачи.
   */
  function createTemplate(task, index) {
    return `
          <div class="todo-item ${task.completed ? 'checked' : ''}" id=${index}>
            <div class="description">${task.description}</div>
            <div class="todo-buttons">
              <input  class="btn-complete" type="checkbox" ${
                task.completed ? 'checked' : ''
              }>
              <i class="material-icons btn-delete">cancel</i>
            </div>
          </div>`;
  }

  /**
   * Фильтрует задачи в списке. Активные задачи помещаются в начало списка, выполненные в конец
   *
   */
  function filterTasks() {
    const activeTasks =
      tasks.length && tasks.filter((item) => item.completed == false);

    const completedTasks =
      tasks.length && tasks.filter((item) => item.completed == true);

    tasks = [...activeTasks, ...completedTasks];
  }

  /**
   * Формирует список задаач в HTML разметке ( (1) Очищает полностью список задач; (2) Вызывает функцию, фильтрующую массив задач; (3) Добавляет в предназначенный для этого блок  сформированный шаблон разметки для каждой задачи; (4) Вешает обработчики событий на кнопки присутствующие в блоках задач )
   *
   */
  function fillHtmlList() {
    todosWrapper.innerHTML = '';
    if (tasks.length > 0) {
      filterTasks();
      tasks.forEach((item, index) => {
        todosWrapper.innerHTML += createTemplate(item, index);
      });

      todoItemElems = document.querySelectorAll('.todo-item');

      const btnCompleteList = Array.from(
        document.querySelectorAll('.btn-complete')
      );
      btnCompleteList.forEach((btn) => {
        btn.addEventListener('click', () => {
          const index = btn.closest('.todo-item').id;
          completeTask(index);
        });
      });

      const btnDeleteList = Array.from(
        document.querySelectorAll('.btn-delete')
      );
      btnDeleteList.forEach((btn) => {
        btn.addEventListener('click', () => {
          const index = btn.closest('.todo-item').id;
          deleteTask(index);
        });
      });
    }
  }

  /**
   * Обновляет данные в хранилище Local Storage
   *
   */
  const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  /**
   * Добавляет новую задачу ( (1) Добавляет в массив объект с задачей, проверив предварительно, что инпут не пуст; (2) Вызывает функцию обновления локального хранилища (3) Вызывает функцию обновления разметкиж (4) Очищает поле для ввода новой задачи)
   *
   */
  function addTaskHandler() {
    if (deskTaskInput.value != '') {
      tasks.push(new Task(deskTaskInput.value));
    }

    updateLocal();
    fillHtmlList();

    deskTaskInput.value = '';
  }

  /**
   * Помечает выполненные задачи ( (1) Меняет свойство completed в необходимой задаче на противоположное; (2) Находит блок с выполненной задачей и присваивает ему необходимый класс; (3) Вызывает функцию обновления локального хранилища (4) Вызывает функцию обновления разметки)
   *
   * @param {number} index Индекс задачи в массиве задач.
   */
  function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
      todoItemElems[index].classList.add('checked');
    } else {
      todoItemElems[index].classList.remove('checked');
    }
    updateLocal();
    fillHtmlList();
  }

  /**
   * Удаляет задачу ( (1) Устанавливает стилизацию удаляемой задачи (необходимо, чтобы удаление произошло плавно); (2) Удаляет задачу из массива задач; (3) Вызывает функцию обновления локального хранилища (4) Вызывает функцию обновления разметки)
   *
   * @param {number} index Индекс задачи в массиве задач.
   */
  // Создаем функцию для удаления задач
  function deleteTask(index) {
    todoItemElems[index].classList.add('delition');

    setTimeout(() => {
      tasks.splice(index, 1);
      updateLocal();
      fillHtmlList();
    }, 500);
  }

  addTaskBtn.addEventListener('click', addTaskHandler);

  fillHtmlList();
}

export default todoListShow;
