import { useEffect, useState } from "react";
import { TaskList } from "../task-list/task-list.component";
import "./dashboard.component.scss";
import { ITask } from "../../interfaces/task.interface";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Slider } from "../slider/slider.component";

export const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const isLaptop = useMediaQuery("(min-width:810px)");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    const taskList = storedTasks ? JSON.parse(storedTasks) : [];
    setTasks(taskList);
  }, []);

  const updateTask = (updatedTask: ITask) => {
    const newTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(newTasks);
    updateTask(updatedTask);
  };

  const createTask = (newTask: ITask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    createTask(newTask);
  };

  const deleteTask = (id: number) => {
    deleteTask(id);
  };

  return (
    <div className="dashboard__wrapper">
      {isLaptop ? (
        <div className="dashboard">
          {" "}
          <TaskList
            tasks={tasks}
            type={{ title: "to-do" }}
            updateTask={updateTask}
            createTask={createTask}
            deleteTask={deleteTask}
          />
          <TaskList
            tasks={tasks}
            type={{ title: "in-progress" }}
            updateTask={updateTask}
            createTask={createTask}
            deleteTask={deleteTask}
          />
          <TaskList
            tasks={tasks}
            type={{ title: "completed" }}
            updateTask={updateTask}
            createTask={createTask}
            deleteTask={deleteTask}
          />
        </div>
      ) : (
        <div>
          <Slider
            tasks={tasks}
            type={{ title: "to-do" }}
            updateTask={updateTask}
            createTask={createTask}
            deleteTask={deleteTask}
          />
          <Slider
            tasks={tasks}
            type={{ title: "in-progress" }}
            updateTask={updateTask}
            createTask={createTask}
            deleteTask={deleteTask}
          />
          <Slider
            tasks={tasks}
            type={{ title: "completed" }}
            updateTask={updateTask}
            createTask={createTask}
            deleteTask={deleteTask}
          />
        </div>
      )}
    </div>
  );
};
