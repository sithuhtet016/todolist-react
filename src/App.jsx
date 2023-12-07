import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [initialState, setInitialState] = useState([]);

  const handleAdd = (text) => {
    const data = {};
    data.text = text;
    data.isDone = false;
    data.id = Math.random() * 10000000;
    setInitialState([...initialState, data]);
  };

  const handleCheck = (x) => {
    initialState.map((data) => {
      if (data.id === x) {
        data.id === x && (data.isDone = !data.isDone);
        if (data.isDone === true) {
          document.getElementById(x).classList.add("done");
        } else {
          document.getElementById(x).classList.remove("done");
        }
        setInitialState([...initialState]);
      }
    });
  };

  const handleDelete = (x) => {
    initialState.map((data) => {
      data.id === x &&
        setInitialState(initialState.filter((data) => data.id !== x));
    });
  };

  const handleEdit = (x) => {
    console.log(`#${x}`);
    initialState.map((data) => {
      if (data.id === x) {
        console.log(data.text);
        const newValue = window.prompt("Enter a new text", data.text);
        if (newValue) {
          data.text = newValue;
          data.isDone = false;
          if (document.getElementById(x).classList[1] === "done") {
            document.getElementById(x).classList.remove("done");
          }
          setInitialState([...initialState]);
        }
      }
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Todo List</h1>
        <Form handleAdd={handleAdd} />
        <List
          lists={initialState}
          checked={handleCheck}
          deleted={handleDelete}
          edited={handleEdit}
        />
      </div>
    </>
  );
}

export default App;
