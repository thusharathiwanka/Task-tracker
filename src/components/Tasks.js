import { useState } from "react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      text: "Doctor's appointment",
      date: "2021 - 02 - 15",
      isRemindered: true,
    },
    {
      id: 1,
      text: "Basketball practice",
      date: "2021 - 02 - 16",
      isRemindered: false,
    },
    {
      id: 1,
      text: "Go to supermarket",
      date: "2021 - 02 - 14",
      isRemindered: true,
    },
  ];
  return (
    <main>
      <div className="task-container"></div>
    </main>
  );
};

export default Tasks;
