import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";

import { deleteTask } from "../../../store/example-01/actions/action";

const Perfil = () => {
  const { taskList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const removeTask = (id) => {
    dispatch(deleteTask(id, taskList));
  };

  return (
    <section className="containerPerfil">
      <h1>Suas tarefas</h1>
      {taskList.length > 0 && (
        <ul>
          {taskList.map((task, index) => (
            <div key={index} className="containerInput">
              <li>{task.task}</li>
              <button
                onClick={() => removeTask(index + 1)}
                className="buttonRemove"
              >
                X
              </button>
            </div>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Perfil;
