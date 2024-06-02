import { format, isToday, isYesterday, isTomorrow, parseISO } from "date-fns";

const TaskManager = (() => {
  let myTasks = [];
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

  function getTasks() {
    return myTasks;
  }

  function getTodaysTasks() {
    const todaysTasks = myTasks.filter(task => isToday(task.date));
    return todaysTasks;
  }

  function getTaskIdCounter() {
    return taskIdCounter;
  }

  return {
    Task,
    addTask,
    getTasks,
    getTodaysTasks,
    getTaskIdCounter,
  };
})();

export default TaskManager;
