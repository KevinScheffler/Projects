import './style.css';

const dialog = document.getElementById('sidebar-dialog');

const addTask = document.getElementById('add-task-sidebar');

const closeDialog = document.getElementById('sb-close');

addTask.onclick = function() {
  dialog.showModal();
}

closeDialog.onclick = function() {
  dialog.close();
}