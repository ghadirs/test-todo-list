import React from "react";
import "./TodoForm.css";
import { TextField } from "@mui/material";

function TodoForm() {
  return (
    <form>
      <input type="text" name="name" placeholder="add name..." />
    </form>
  );
}

export default TodoForm;
