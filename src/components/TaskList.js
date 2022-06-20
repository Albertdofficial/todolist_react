import React from "react";

import { FaTimes } from "react-icons/fa";
import "./TaskList.css";

export default function TaskList({ tasks, handleDelete }) {
  return (
    <div className="task-list">
      {tasks &&
        tasks.map((task) => (
          <div key={task.title} className="list">
            <p>
              {task.title} <span>:</span> {task.date}{" "}
              <span onClick={() => handleDelete(task.id)} className="icon">
                <FaTimes />{" "}
              </span>
            </p>
          </div>
        ))}
    </div>
  );
}
