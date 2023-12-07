import "./Form.css";
import { useRef } from "react";
const Form = ({ handleAdd }) => {
  const handleAddBtn = (e) => {
    e.preventDefault();
    inputRef.current.value !== "" && handleAdd(inputRef.current.value);
    inputRef.current.value = "";
  };
  const inputRef = useRef();
  return (
    <>
      <form className="formContainer">
        <input ref={inputRef} type="text" />
        <button onClick={handleAddBtn}>Add</button>
      </form>
    </>
  );
};

export default Form;
