/* eslint-disable react/prop-types */
import { useState, } from "react";
import axios from "axios";

// const CreateTodo = ({ onTodoCreated }) => {
const CreateTodo = ({ setTodos, todos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = async () => {
    // try {
    //   const response = await fetch("http://localhost:3000/todo", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title: title,
    //       description: description
    //     }),
    //   });
    //   if (!response.ok) {
    //     throw new Error(`Error: ${response.statusText}`);
    //   }
    //   const data = await response.json();
    //   console.log("Data successfully submitted:", data);
    //   onTodoCreated();
    //   setTitle("");
    //   setDescription("");
    // } catch (error) {
    //   console.log("There was a problem with the fetch operation:", error);
    // }

    try {
      const response = await axios.post("http://localhost:3000/todo", {
        title: title,
        description: description,
      });
      console.log(response.data.todo);
      setTodos([...todos, response.data.todo])
      setTitle("");
      setDescription("");

    } catch (error) {
      console.log(error);


    }

  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>TODO LIST</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title} // Add value to control the input
          style={{
            margin: "10px",
            padding: "15px 20px",
            width: "100%",
            maxWidth: "380px",
            fontSize: "1rem",
            borderRadius: "10px"
          }}
        />
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description} // Add value to control the input
          style={{
            margin: "10px",
            padding: "15px 20px",
            width: "100%",
            maxWidth: "380px",
            fontSize: "1rem",
            borderRadius: "10px"
          }}
        />
        <button
          onClick={handleClick} // Reference the correct handleClick function here
          style={{
            margin: "10px",
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: "blue",
            color: "white",
            fontWeight: "700",
            fontSize: "1rem",
            cursor: "pointer",
            border: "none",
          }}>
          Create Todo
        </button>
      </div>
    </>
  );
};

export default CreateTodo;
