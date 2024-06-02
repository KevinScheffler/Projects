import "./style.css";
import TaskManager from "./components/taskManager";
import allTasks from "./components/allTasks";
import { format, isToday } from "date-fns";
import todaysTasks from "./components/todaysTasks";

document.addEventListener("DOMContentLoaded", () => {
  const mainFormContainer = document.getElementById("main-form-container");

  const mainAllTasks = document.getElementById('main-all-tasks');

  function toggleMainForm() {
    if (mainFormContainer.classList.contains("main-form-hidden")) {
      mainFormContainer.classList.remove("main-form-hidden");
    } else {
      mainFormContainer.classList.add("main-form-hidden");
    }
  }

  document.getElementById("main-add-task").addEventListener("click", () => {
    toggleMainForm();
    formatDisplayDate();
  });

  document.getElementById("main-close").addEventListener("click", () => {
    toggleMainForm();
  });

  function formatDisplayDate() {
    const dateInput = document.getElementById("main-date");

    // Get the current date
    const today = new Date();

    dateInput.valueAsDate = today;

    // Format the date to YYYY-MM-DD
    const minDate = format(today, "yyyy-MM-dd");

    // Set the minimum date attribute for the date input
    dateInput.setAttribute("min", minDate);
  }

  document.getElementById("main-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const taskName = document.getElementById("main-task-name").value;
    const date = document.getElementById("main-date").value;
    const priority = document.getElementById("main-priority").value;
    const project = document.getElementById("main-folder-group").value;
    const notes = document.getElementById("main-notes").value;
    const id = TaskManager.getTaskIdCounter();

    const task = new TaskManager.Task(
      taskName,
      date,
      priority,
      project,
      notes,
      id
    );
    TaskManager.addTask(task);
    const tasks = TaskManager.getTasks();
    mainAllTasks.textContent = TaskManager.getTaskIdCounter();
    allTasks(tasks);

    const today = TaskManager.getTodaysTasks();
    
    tasks.forEach(task => {
      if (isToday(task.date)) {
        todaysTasks(today);
      } else {
        allTasks(tasks);
      }
    })
    

    const sbAllTaskTotal = document.getElementById("sb-total-tasks");
    sbAllTaskTotal.textContent = TaskManager.getTasks().length;

    const sbTodaysTasksTotal = document.getElementById("sb-todays-tasks");

    sbTodaysTasksTotal.textContent = today.length;

    document.getElementById("main-form").reset();
    toggleMainForm();
  });

  const sbFormContainer = document.getElementById("sidebar-form-container");

  function toggleSidebarForm() {
    if (sbFormContainer.classList.contains("sb-form-hidden")) {
      sbFormContainer.classList.remove("sb-form-hidden");
    } else {
      sbFormContainer.classList.add("sb-form-hidden");
    }
  }

  function formatSidebarDate() {
    const dateInput = document.getElementById("sb-date");

    // Get the current date
    const today = new Date();

    dateInput.valueAsDate = today;

    // Format the date to YYYY-MM-DD
    const minDate = format(today, "yyyy-MM-dd");

    // Set the minimum date attribute for the date input
    dateInput.setAttribute("min", minDate);
  }

  document.getElementById("add-task-sidebar").addEventListener("click", () => {
    toggleSidebarForm();
    formatDisplayDate();
    formatSidebarDate();
  });

  document.getElementById("sb-close").addEventListener("click", () => {
    sbFormContainer.classList.add("sb-form-hidden");
  });

  document.getElementById("sb-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const taskName = document.getElementById("sb-task-name").value;
    const date = document.getElementById("sb-date").value;
    const priority = document.getElementById("sb-priority").value;
    const project = document.getElementById("sb-folder-group").value;
    const notes = document.getElementById("sb-notes").value;
    const id = TaskManager.getTaskIdCounter();

    const task = new TaskManager.Task(
      taskName,
      date,
      priority,
      project,
      notes,
      id
    );
    TaskManager.addTask(task);
    const tasks = TaskManager.getTasks();
    console.log(tasks);
    allTasks(tasks);

    mainAllTasks.textContent = '(' + tasks.length + ')';

    const sbAllTaskTotal = document.getElementById("sb-total-tasks");
    sbAllTaskTotal.textContent = TaskManager.getTaskIdCounter();

    document.getElementById("sb-form").reset();
    toggleSidebarForm();
  });

  document
    .getElementById("all-tasks-sidebar")
    .addEventListener("click", (e) => {
      e.preventDefault();
      allTasks(TaskManager.getTasks());
    });

  document
    .getElementById("todays-tasks-sidebar")
    .addEventListener("click", (e) => {
      e.preventDefault();
      todaysTasks(TaskManager.getTodaysTasks());
    });
});
