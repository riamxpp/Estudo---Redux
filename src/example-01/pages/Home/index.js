import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

import { addTask } from "../../../store/example-01/actions/action";

const Home = () => {
  const [newTask, setNewTask] = useState("");
  const [id, setId] = useState(1);
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.tasks);

  const handleAddTask = (e) => {
    if (newTask !== "") {
      setId((prev) => (prev += 1));
      dispatch(addTask(newTask, id));
    }

    setNewTask("");
    e.preventDefault();
  };

  return (
    <main className="containerHome">
      <form>
        <input
          type="text"
          name="task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={(e) => handleAddTask(e)}>Adicionar</button>
      </form>
      {/* quantas tarefas temos adicionadas até o momento */}
      {taskList.length > 0 && <span>Minhas tarefas - {taskList.length}</span>}
    </main>
  );
};

export default Home;
