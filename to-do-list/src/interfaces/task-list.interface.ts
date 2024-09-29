import { IStatus } from "./status.interface";
import { ITask } from "./task.interface";

export interface ITaskList {
  tasks: ITask[];
  type: IStatus;
  updateTask: (task: ITask) => void;
  createTask: (task: ITask) => void;
  deleteTask: (id: number) => void;
}
