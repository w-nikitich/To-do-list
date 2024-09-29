import { ITask } from "../interfaces/task.interface";

export const deleteTaskFromStorage = (id: number) => {
  const existingTasks = localStorage.getItem("tasks");
  const listOfTasks = existingTasks ? JSON.parse(existingTasks) : [];
  const index = listOfTasks.findIndex((task: ITask) => task.id === id);
  listOfTasks.splice(index, 1); 
  const updatedListOfTasks = JSON.stringify(listOfTasks);
  localStorage.setItem("tasks", updatedListOfTasks);
};
