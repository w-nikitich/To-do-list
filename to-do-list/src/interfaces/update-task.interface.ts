import { IHandler } from "./handler.interface";
import { IStatus } from "./status.interface";
import { ITask } from "./task.interface";

export interface IUpdateTask {
    task?: ITask,
    status: IStatus,
    type: 'create' | 'update',
    handleClose?: IHandler,
    handleUpdate?: (task: ITask) => void
}