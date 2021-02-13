import Button from "./Button";

const Form = ({ getInput, taskSubmit, task, btnClicked }) => {
  console.log(task);
  return (
    <form action="">
      <input
        type="text"
        name="task"
        id="task-input"
        placeholder="Enter your task here"
        onChange={getInput}
        value={btnClicked ? "" : task}
      />
      <Button text="Add" onClick={taskSubmit} />
    </form>
  );
};

export default Form;
