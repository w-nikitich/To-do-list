import { ITask } from "../interfaces/task.interface";

export const createTask = (task: ITask) => {
    const existingTasks = localStorage.getItem('tasks');
    const listOfTasks = existingTasks ? JSON.parse(existingTasks) : [];
    const newTask = {id: listOfTasks.length, ...task}
    listOfTasks.push(newTask);
    const updatedListOfTasks = JSON.stringify(listOfTasks);
    localStorage.setItem('tasks', updatedListOfTasks);
    return newTask;
}