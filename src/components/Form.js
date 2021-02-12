import Button from "./Button";

const Form = () => {
  return (
    <form action="">
      <input
        type="text"
        name="task"
        id="task-input"
        placeholder="Enter your task here"
      />
      <Button text="Add" />
    </form>
  );
};

export default Form;
