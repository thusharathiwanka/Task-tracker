import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <Task text={task.text} time={task.time} key={task.id} />
      ))}
    </div>
  );
};

export default Tasks;
