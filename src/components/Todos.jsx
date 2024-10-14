/* eslint-disable no-unused-vars */
import axios from "axios";

/* eslint-disable react/prop-types */
const Todos = ({ todos, setTodos }) => {
  console.log(todos)
  const handleCompleate = async (todo) => {
    if (todo.completed) {
      alert("Todo Already Completed")
      return
    }
    try {
      const response = await axios.put("http://localhost:3000/completed", {
        id: todo._id,
      });
      const upadateTodos = todos.map((task) => {
        if (task._id === todo._id) {
          task.completed = true;
        }
        return task;
      });

      // const response = await axios.put("http://localhost:3000/completed")
      // setTodos(response.data);
      setTodos(upadateTodos);
    } catch (error) {
      console.log(error);
    }
  }

  // delete 
  const handleDelete = async (todo) => {
    try {
      await axios.delete(`http://localhost:3000/delete/${todo._id}`);
      const newTodos = todos.filter((task) => {
        return task._id !== todo._id
      })
      setTodos(newTodos)
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <>
      <div style={{ background: "gray", padding: "20px", borderRadius: "20px" }}>
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center", margin: "20px" }}>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ color: "white", fontSize: "1.5rem", fontWeight: "700", padding: "20px", textAlign: "left", border: "1px solid white" }}>Title</th>
                <th style={{ color: "white", fontSize: "1.5rem", fontWeight: "700", padding: "20px", textAlign: "left", border: "1px solid white" }}>Description</th>
                <th style={{ color: "white", fontSize: "1.5rem", fontWeight: "700", padding: "20px", textAlign: "left", border: "1px solid white" }}>Marks As Compleded</th>
                <th style={{ color: "white", fontSize: "1.5rem", fontWeight: "700", padding: "20px", textAlign: "left", border: "1px solid white" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => {
                return (
                  <tr key={todo._id}>
                    <td style={{ padding: "20px", fontSize: "2rem", fontWeight: "600", color: todo.completed ? "red" : "white", border: "1px solid white", textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title}</td>
                    <td style={{ padding: "20px", fontSize: "2rem", fontWeight: "600", color: todo.completed ? "red" : "white", border: "1px solid white", textDecoration: todo.completed ? "line-through" : "none" }}>{todo.description}</td>
                    <td style={{ padding: "20px", fontSize: "1rem", fontWeight: "600", color: "white", border: "1px solid white" }}>
                      <button onClick={() => { handleCompleate(todo) }} style={{ padding: "20px", borderRadius: "10px", background: "blue", color: "white", fontSize: "1rem", fontWeight: "700", cursor: "pointer" }}>{todo.completed ? "completed" : "marks as completed"}</button>
                    </td>
                    <td style={{ padding: "20px", fontSize: "1rem", fontWeight: "600", color: "white", border: "1px solid white" }}>
                      <button onClick={() => { handleDelete(todo) }} style={{ padding: "20px", borderRadius: "10px", background: "blue", color: "white", fontSize: "1rem", fontWeight: "700", cursor: "pointer" }}>Delete</button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "20px", fontSize: "1rem", fontWeight: "600", color: "white", border: "1px solid white" }}>
                  All tasks listed above
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Todos
