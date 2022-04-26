function ToDoListComponent(props) {
  const { task } = props;
  return (
    <ul>
      <li> To do: {task}</li>
    </ul>
  );
}
export default ToDoListComponent;
