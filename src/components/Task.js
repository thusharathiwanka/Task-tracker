import { FaTimes } from "react-icons/fa";
import Button from "./Button";

const Task = ({ text, time }) => {
  return (
    <div className="task">
      <div className="task-text">
        <h3>{text}</h3>
        <p>{time}</p>
      </div>
      <Button className="close" text={FaTimes} />
    </div>
  );
};

export default Task;
