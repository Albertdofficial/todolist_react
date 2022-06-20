import React from "react";
import ReactDom from "react-dom";

import './Modal.css'
import NewTaskForm from "./NewTaskForm";

export default function Modal({addTask, setShowModal}) {
  return ReactDom.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
          <NewTaskForm setShowModal={setShowModal} addTask={addTask} />
      </div>
    </div>,
    document.body
  );
}
