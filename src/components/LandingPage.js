import React from "react";

import "./LandingPage.css";
import TaskList from "./TaskList";

export default function LandingPage({ handleShow, handleDelete,tasks, showTasks }) {
  return (
    <div className="landing-page">
      <h1>todolist</h1>

      {showTasks && <TaskList tasks={tasks} handleDelete={handleDelete} />}
      <button onClick={handleShow}>Add Tast</button>
    </div>
  );
}
