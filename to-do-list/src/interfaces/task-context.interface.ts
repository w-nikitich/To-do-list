import { ITask } from "./task.interface";

export interface ITaskContext {
  tasks: ITask[],
  updateTask: (updatedTask: ITask) => void,
  addTask: (task: ITask) => void,
  deleteTask: (id: number) => void
}
