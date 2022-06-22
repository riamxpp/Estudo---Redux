import { combineReducers } from "redux";
import { tasks } from "./store/example-01/reducers/tasksReducer";
import { counter } from "./store/example-02/reducers/countReducer";

export default combineReducers({
  tasks,
  counter,
});
