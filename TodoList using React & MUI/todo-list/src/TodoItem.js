import React from "react";
import { ListItem, IconButton, ListItemText, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <ListItem
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <ListItemText primary={todo.text} />
      <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default TodoItem;
