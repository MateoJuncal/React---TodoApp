import "../stylesheets/Input.css";
import { GoCheck } from "react-icons/go";

const Input = ({ onChange, handleButton, clearInput }) => {
  return (
    <div className="first-container">
      <input
        id="input"
        type="text"
        placeholder="Put your text here"
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key.toLowerCase() == "enter") {
            handleButton();
            clearInput(e);
          }
        }}
      />
      <GoCheck className="add-todo-button" onClick={handleButton} />
    </div>
  );
};

export default Input;
