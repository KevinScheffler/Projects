import './style.css';

const sbFormContainer = document.getElementById('sidebar-form-container');

const sbAddTask = document.getElementById('add-task-sidebar');

const sbCloseForm = document.getElementById('sb-close');

sbAddTask.onclick = function() {
  if (sbFormContainer.classList.contains('sb-form-hidden')) {
    sbFormContainer.classList.remove('sb-form-hidden');
  } else {
    sbFormContainer.classList.add('sb-form-hidden');
  }
}

sbCloseForm.onclick = function() {
  sbFormContainer.classList.add('sb-form-hidden');
}

const mainFormContainer = document.getElementById('main-form-container');

const mainAddTaskBtn = document.getElementById('main-add-task');

const mainFormCloseBtn = document.getElementById('main-close');

mainAddTaskBtn.onclick = function() {
  if (mainFormContainer.classList.contains('main-form-hidden')) {
    mainFormContainer.classList.remove('main-form-hidden');
  } else {
    mainFormContainer.classList.add('main-form-hidden');
  }
}

mainFormCloseBtn.onclick = function() {
  mainFormContainer.classList.add('main-form-hidden');
}