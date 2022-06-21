import { ADD_TASK, DELETE_TASK } from "./actionsType";

export function addTask(newTask, id) {
  return {
    type: ADD_TASK,
    allTasks: { newTask, id },
  };
}

export function deleteTask(idTask, tasks) {
  let currentIndex = 0;
  let copyTasks = [];
  let count = 0;

  tasks.forEach((task, index) => {
    if (idTask === task.id) {
      currentIndex = index;
    }
  });
  while (count !== tasks.length) {
    copyTasks[count] = tasks[count];
    count++;
  }
  copyTasks.splice(currentIndex, 1);
  return {
    type: DELETE_TASK,
    taskRemoved: copyTasks,
  };
}
