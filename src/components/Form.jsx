import { useEffect } from "react";
import {v4 as uuidv4} from "uuid"; 

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

  const updateTodo = (title, id) => {
    const newTodo = todos.map(todo => 
      todo.id === id ? {title, id} : todo
    )
    setTodos(newTodo);
    setEditTodo("")
  }

  useEffect(() => {
    if(editTodo) {
      setInput(editTodo.title);
    }else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(!editTodo){
      setTodos([...todos, {id: uuidv4(), title: input}]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id)
    }
  }

  return ( 
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="Enter a Task" value={input} required onChange={onInputChange}/>
      <button type="submit">
        {editTodo ? "Update" : "Add Task"}
      </button>
    </form>
   );
}
 
export default Form;