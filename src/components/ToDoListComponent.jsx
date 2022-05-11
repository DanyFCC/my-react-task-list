function ToDoListComponent(props) {
  const { task } = props;
  return (
    <div className="status">
      <input type="checkbox" />
      <ul>
        <li className="list"> To do: {task} </li>
      </ul>
    </div>
  );
}
export default ToDoListComponent;
