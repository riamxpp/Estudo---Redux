import { ADD_TASK, DELETE_TASK } from "../actions/actionsType";

const initialState = { taskList: [] };

function tasks(state = initialState, action) {
  let taskFormat = {};
  if (action.allTasks)
    taskFormat = { task: action.allTasks.newTask, id: action.allTasks.id };

  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, taskFormat],
      };
    case DELETE_TASK:
      return { ...state, taskList: [...action.taskRemoved] };
    default:
      return { ...state };
  }
}

export { tasks };
