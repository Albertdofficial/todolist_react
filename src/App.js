import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showTasks, setShowTasks] = useState(true);
  const [tasks, setTasks] = useState([]);

  // localStorage.clear()

  const handleDelete = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return id !== task.id;
      });
    });
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });

    setShowModal(false);
  };

  // localStorage.clear();

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <LandingPage
        handleShow={handleShow}
        handleDelete={handleDelete}
        tasks={tasks}
        showTasks={showTasks}
      />

      {showModal && (
        <Modal setShowModal={setShowModal} addTask={addTask}>
          {" "}
        </Modal>
      )}
    </div>
  );
}

export default App;
