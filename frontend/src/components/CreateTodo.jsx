import { useState } from "react";
import { Button, TextField } from '@mui/material';

export function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent the default form submission behavior

    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
          deadline: deadline,  // Include deadline in the request
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const json = await response.json();
        setTodos((prevTodos) => [...prevTodos, json.todo]); // Update to use the todo object returned
        alert("Todo added");
        setTitle("");
        setDescription("");
        setDeadline("");
      } else {
        console.error("Failed to create todo");
        alert("Failed to create todo");
      }
    } catch (error) {
      console.error("Error creating todo:", error);
      alert("An error occurred while creating the todo");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="desc"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        id="deadline"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="datetime-local"
        placeholder="Deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <Button
      style={{
        padding: 25,
        margin: 10,
      }}
        type="submit"  // Use type="submit" to trigger the form submission
        variant="contained"
      >
        Create Todo
      </Button>
    </form>
  );
}