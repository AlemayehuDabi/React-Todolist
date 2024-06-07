import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const upDatedTask = tasks.filter((_, ind) => ind !== index);
    setTasks(upDatedTask);
  };

  return (
    <div className="TodoList">
      <h1>TO-DO-LIST</h1>

      <div className="input-div">
        <input
          type="text"
          placeholder="Enter a Task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <p>{task}</p>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
