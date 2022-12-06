const TodoList = ({ todos, setTodos, setEditTodo }) => {

  const handleDelete = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = ({ id }) => {
    const findTodo = todos.find(todo => todo.id === id);
    setEditTodo(findTodo)
  }

  return ( 
    <div>
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="text" value={todo.title} onChange={e => e.preventDefault()}/>

          <button onClick={() => handleEdit(todo)}>Edit</button>
          <button onClick={() => handleDelete(todo)}>X</button>
        </li>
      )
      
      )}
    </div>
   );
}
 
export default TodoList;