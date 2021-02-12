const Button = ({ text, background }) => {
  return (
    <button type="submit" style={{ background: background }}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  background: "#2eb3ff",
};

export default Button;
