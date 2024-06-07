import { format, isToday, isYesterday, isTomorrow, isPast, parseISO } from "date-fns";

const TaskManager = (() => {
  let myTasks = [];
  let todaysTasks = [];
  let overdueTasks = [];
  let taskIdCounter = 0;

  function Task(taskName, date, priority, project, notes, id) {
    this.taskName = taskName;
    this.date = parseISO(date);
    this.priority = priority;
    this.project = project;
    this.notes = notes;
    this.id = id;
  }

  Task.prototype.formatDate = function () {
    if (isToday(this.date)) {
      return "Today";
    }

    if (isYesterday(this.date)) {
      return "Yesterday";
    }

    if(isTomorrow(this.date)) {
      return "Tomorrow";
    }

    return format(this.date, "EEEE, MMMM do, yyyy");
  };

  function addTask(task) {
    myTasks.push(task);
    taskIdCounter++;
  }


  function deleteTodaysTask(taskId) {
    for (let i = 0; i < myTasks.length; i++) {
      for (let j = 0; j < todaysTasks.length; j++) {
        if (myTasks[i].id === taskId && todaysTasks[j].id === taskId) {
          myTasks.splice(i, 1);
          todaysTasks.splice(j, 1);
          i--;
          j--;
        } 
      }
    }
  }

  function deleteOverdueTask(taskId) {
    for (let i = 0; i < myTasks.length; i++) {
      for (let j = 0; j < overdueTasks.length; j++) {
        if (myTasks[i].id === taskId && overdueTasks[i].id === taskId) {
          myTasks.splice(i, 1);
          overdueTasks.splice(j, 1);
          i--;
          j--;
        } 
      }
    }
  }

  function getTasks() {
    return myTasks;
  }

  function getTodaysTasks() {
    todaysTasks = myTasks.filter(task => isToday(task.date));
    return todaysTasks;
  }

  function getOverdueTasks() {
    overdueTasks = myTasks.filter(task => isPast(task.date) && !(isToday(task.date)));
    return overdueTasks;
  }

  function getTaskIdCounter() {
    return taskIdCounter;
  }

  return {
    Task,
    addTask,
    deleteTodaysTask,
    deleteOverdueTask,
    getTasks,
    getTodaysTasks,
    getOverdueTasks,
    getTaskIdCounter,
  };
})();

export default TaskManager;
