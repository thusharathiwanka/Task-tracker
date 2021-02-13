import Button from "./Button";

const Form = ({ getInput, taskSubmit }) => {
  return (
    <form action="">
      <input
        type="text"
        name="task"
        id="task-input"
        placeholder="Enter your task here"
        onChange={getInput}
      />
      <Button text="Add" onClick={taskSubmit} />
    </form>
  );
};

export default Form;
