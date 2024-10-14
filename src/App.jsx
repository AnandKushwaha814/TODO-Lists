import { useEffect, useState } from "react"
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data.todos);  //infinite loop
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {/* <CreateTodo onTodoCreated={fetchTodos} /> */}
      <CreateTodo setTodos={setTodos} todos={todos} />
      <Todos todos={todos} setTodos={setTodos}/>
    </div>
  )
}
export default App
