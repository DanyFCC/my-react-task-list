import image from "./components/images/ToDoList.jpg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ToDoListComponent from "./components/ToDoListComponent";
import WorkComponent from "./components/WorkComponent";

function App() {
  return (
    <main>
      <div className="App">
        <img src={image} className="ToDoList" alt="List" />
        <HeaderComponent />
        <WorkComponent /> <ToDoListComponent task="Learn HTML" />
        <WorkComponent /> <ToDoListComponent task="Learn CSS" />
        <WorkComponent /> <ToDoListComponent task="Learn Javascript" />
        <WorkComponent /> <ToDoListComponent task="Learn React" />
        <WorkComponent /> <ToDoListComponent task="Learn Firebase" />
        <WorkComponent /> <ToDoListComponent task="Learn Salesforce" />
        <WorkComponent /> <ToDoListComponent task="Get a job" />
      </div>
    </main>
  );
}

export default App;
