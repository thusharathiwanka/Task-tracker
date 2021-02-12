import { useState } from "react";
import Header from "./components/Header";
import From from "./components/Form";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      time: "Feb 15 at 2:30 PM",
      isRemindered: true,
    },
    {
      id: 2,
      text: "Basketball practice",
      time: "Feb 16 at 3:30 PM",
      isRemindered: false,
    },
    {
      id: 3,
      text: "Go to supermarket",
      time: "Feb 14 at 2:30 PM",
      isRemindered: true,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <From />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
