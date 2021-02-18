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

  const [task, setTask] = useState("");
  const [input, setInput] = useState("");

  const taskSubmit = (e) => {
    e.preventDefault();

    if (task.length > 0) {
      setTasks([...tasks, { id: tasks.length + 1, text: task }]);
      clearInput();
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const getInput = (e) => {
    setInput(e.target.value);
    setTask(e.target.value);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <From
        getInput={getInput}
        taskSubmit={taskSubmit}
        inputText={task}
        userInput={input}
      />
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
