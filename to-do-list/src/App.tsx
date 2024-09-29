import React, { useState } from "react";
import "./assets/scss/_base.scss";
import { Header } from "./components/header/header.component";
import { AddTask } from "./components/add-task/add-task.component";
import { Filters } from "./components/filters/filters.component";
import { Dashboard } from "./components/dashboard/dashboard.component";
import { ModalWindow } from "./components/modal-window/modal-window.component";
import { TaskProvider } from "./components/task-context/task-context.component";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  function handleModalOpen() {
    setIsOpened(true);
  }

  function handleModalClose() {
    setIsOpened(false);
  }

  return (
    <div className="App">
      <TaskProvider>
        <Header />
        <AddTask onClick={handleModalOpen} />
        <Filters />
        <Dashboard />
        <ModalWindow isOpened={isOpened} onClose={handleModalClose} />
      </TaskProvider>
    </div>
  );
}

export default App;
