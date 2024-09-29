import React, { createContext, useContext, useState, useEffect } from 'react';
import { ITask } from '../../interfaces/task.interface';
import { ITaskContext } from '../../interfaces/task-context.interface';

const TaskContext = createContext<ITaskContext | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const updateTask = (updatedTask: ITask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const addTask = (newTask: ITask) => {
    setTasks((prevTasks) => [...prevTasks, {id: tasks.length, ...newTask}]);
  };

  const deleteTask = (id: number) => {
    const updatedtasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedtasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTask, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};