import { useState } from "react";
import Header from "./components/Header";
import From from "./components/Form";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
    },
    {
      id: 2,
      text: "Basketball practice",
    },
    {
      id: 3,
      text: "Go to supermarket",
    },
  ]);

  let taskInput = null;

  const taskSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { id: tasks.length + 1, text: taskInput }]);
    console.log(tasks);
  };

  const getInput = (e) => {
    taskInput = e.target.value;
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <From getInput={getInput} taskSubmit={taskSubmit} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <h3 style={{ textAlign: "center", paddingTop: "5rem" }}>
          No tasks to show
        </h3>
      )}
    </div>
  );
}

export default App;
