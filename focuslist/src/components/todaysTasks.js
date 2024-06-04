import TaskManager from "./taskManager";

function todaysTasks(taskArr) {
  const taskListContainer = document.querySelector(".task-list-container");
  taskListContainer.innerHTML = "";

  const mainHeaderH2 = document.querySelector(".main-header-h2");
  mainHeaderH2.textContent = "Today";

  const spanTaskTotal = document.createElement("span");
  spanTaskTotal.classList.add("main-task-total");
  spanTaskTotal.textContent = ` (${taskArr.length})`;
  mainHeaderH2.appendChild(spanTaskTotal);

  taskArr.forEach(task => {
      const taskUL = document.createElement("ul");
      taskUL.classList.add("task-ul");
      taskUL.setAttribute("data-id", task.id);
      taskListContainer.appendChild(taskUL);

      const taskLI = document.createElement("li");
      taskLI.classList.add("task-li");
      taskUL.appendChild(taskLI);

      const priorityDiv = document.createElement("div");
      priorityDiv.classList.add("priority-btn-container");
      taskLI.appendChild(priorityDiv);

      const priorityBtn = document.createElement("button");
      priorityBtn.classList.add("priority-button");
      priorityBtn.name = "delete-item";
      priorityBtn.title = "Remove task";
      priorityDiv.appendChild(priorityBtn);

      priorityBtn.addEventListener("click", () => {
        taskUL.remove();
        TaskManager.deleteTask(task.id);
        const mainTaskTotal = document.querySelector(".main-task-total");
        mainTaskTotal.textContent = `(${TaskManager.getTodaysTasks().length})`;

        const sbTodaysTasks = document.getElementById("sb-todays-tasks");
        sbTodaysTasks.textContent = TaskManager.getTodaysTasks().length;

        const sbTotalTasks = document.getElementById("sb-total-tasks");
        sbTotalTasks.textContent = TaskManager.getTasks().length;
      });

      const taskItemData = document.createElement("div");
      taskItemData.classList.add("task-item-data");
      taskLI.appendChild(taskItemData);

      const taskName = document.createElement("h3");
      taskName.classList.add("task-name");
      taskName.textContent = task.taskName;
      taskItemData.appendChild(taskName);

      const taskNotes = document.createElement("p");
      taskNotes.classList.add("task-notes");
      taskNotes.textContent = task.notes;
      taskItemData.appendChild(taskNotes);

      const taskDate = document.createElement("p");
      taskDate.classList.add("task-date");
      taskDate.textContent = task.formatDate();
      taskItemData.appendChild(taskDate);
  });
}

export default todaysTasks;
