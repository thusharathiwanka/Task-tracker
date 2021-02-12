import PropTypes from "prop-types";

const Button = ({ text, background, className, onClick }) => {
  return (
    <button
      type="submit"
      style={{ background: background }}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  background: "#2eb3ff",
  className: "Button",
};

Button.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
