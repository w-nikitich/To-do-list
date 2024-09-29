import { ITask } from "../interfaces/task.interface";

export const updateTask = (task: ITask) => {
  const existingTasks = localStorage.getItem("tasks");
  const listOfTasks = existingTasks ? JSON.parse(existingTasks) : [];
  const updatedList = listOfTasks.map((taskElement: ITask) => {
    if (taskElement.id === task.id) {
      return {
        id: task.id,
        title: task.title,
        description: task.description,
        createdAt: task.createdAt,
        status: task.status,
      };
    }
    return taskElement;
  }); 
  const updatedListOfTasks = JSON.stringify(updatedList);
  localStorage.setItem("tasks", updatedListOfTasks);
};
