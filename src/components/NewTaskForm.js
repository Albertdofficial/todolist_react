import React from "react";
import { useRef } from "react";
import "./NewTaskForm.css";

export default function NewTaskForm({ addTask, setShowModal }) {
  const title = useRef("");
  const date = useRef("");


  const handleSubmit = (e) => {
    e.preventDefault();

    let taskObj = {
      title: title.current.value,
      date: date.current.value,
      id: Math.floor(Math.random() * 1000000),
    };

    

    // call addEvent function
    if (taskObj.title) {
      addTask(taskObj);
    } else {
      setShowModal(false);
    }

    resetForm();
  };

  const resetForm = () => {
    title.current.value = "";
    date.current.value = "";
  };

  return (
    <div className="new-task-form">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title: </span>
          <input type="text" ref={title} />
        </label>
        <label>
          <span>Date: </span>
          <input type="date" ref={date} />
        </label>

        <button>Submit </button>
      </form>
    </div>
  );
}
