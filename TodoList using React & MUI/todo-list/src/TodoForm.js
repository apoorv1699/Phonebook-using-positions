import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center">
        <TextField
          label="New Todo"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginLeft: "8px" }}>
          Add
        </Button>
      </Box>
    </form>
  );
}

export default TodoForm;