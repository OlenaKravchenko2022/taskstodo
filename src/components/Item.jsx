import { useState } from "react";

export default function Item({ title, id, status }) {
  const classes = ["todo"];
  const [checked, setChecked] = useState(status);

  if (checked) {
    classes.push("status");
  }

  const updateStatus = () => {
    setChecked(!checked);
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    storedTodos.map((el) => {
      if (el.id === id) {
        el.status = !checked;
      }
      return true;
    });

    localStorage.setItem("tasks", JSON.stringify(storedTodos));
  };

  return (
    <li className={classes.join(" ")}>
      <label>
        <input type="checkbox" checked={checked} onChange={updateStatus} />
        <span>{title}</span>
        <i className="material-icons red-text">X</i>
      </label>
    </li>
  );
}
