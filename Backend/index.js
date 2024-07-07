const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({ todos });
});

app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({ msg: "Invalid Request" });
    return;
  }
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    deadline: createPayLoad.deadline,
    completed: false,
  });
  res.json({ msg: "todo created!" });
});

app.patch("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed, title, description, deadline } = req.body;

    // Prepare update object based on provided fields
    const updateFields = {};
    if (completed !== undefined) updateFields.completed = completed;
    if (title !== undefined) updateFields.title = title;
    if (description !== undefined) updateFields.description = description;
    if (deadline !== undefined) updateFields.deadline = deadline;

    const updatedTodo = await todo.findByIdAndUpdate(
      id,
      updateFields,
      { new: true } // Return the updated todo
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo", error });
  }
});

// Existing PATCH request to mark todo as completed
app.patch("/todos/:id/completed", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTodo = await todo.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo", error });
  }
});

app.delete('/todos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTodo = await todo.findByIdAndDelete(id);
  
      if (!deletedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
  
      res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting todo', error });
    }
  });
  

app.listen(3000);
