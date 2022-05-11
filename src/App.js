import React from "react";
import image from "./components/images/ToDoList.jpg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ToDoListComponent from "./components/ToDoListComponent";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItem] = useState([]);

  function addItem() {
    const item = {
      value: newItem,
    };

    if (newItem.length < 3) {
      return alert("Tarea necesita mas de 3 caracteres");
    }
    setItem((oldList) => [...oldList, item]);
    setNewItem("");
  }

  return (
    <>
      <main>
        <div className="App">
          <img src={image} className="ToDoList" alt="image" />
          <br></br>
          <br></br>
          <HeaderComponent />
          <br />
          <br />
          <input
            className="inputvalue"
            type="text"
            placeholder="Add a task"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <br></br>
          <br></br>
          <button className="addbutton" onClick={() => addItem()}>
            Add
          </button>
          <input
            className="deletevalue"
            type="text"
            placeholder="Ingrese ID para borrar"
            /* value={id}
            onChange={(e) => d} */
          />
          <button className="deletebutton" /* onClick={() => deleteItem()} */>
            Delete
          </button>
          <ToDoListComponent task="Learn HTML" /> <br></br>
          <ToDoListComponent task="Learn CSS" /> <br></br>
          <ToDoListComponent task="Learn Javascript" /> <br></br>
          <ToDoListComponent task="Learn React" /> <br></br>
          <ToDoListComponent task="Learn Firebase" /> <br></br>
          <ToDoListComponent task="Learn Salesforce" /> <br></br>
          <ToDoListComponent task="Get a job" /> <br></br>
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <ToDoListComponent />
                  {item.value}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
