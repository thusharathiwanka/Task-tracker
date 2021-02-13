import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <div className="task-text">
        <h3>{task.text}</h3>
      </div>
      <FaTimes
        style={{
          cursor: "pointer",
        }}
        onClick={() => onDelete(task.id)}
      />
    </div>
  );
};

export default Task;
