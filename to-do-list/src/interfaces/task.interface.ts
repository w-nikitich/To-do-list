import { IDate } from "./date.interface";
import { IStatus } from "./status.interface";

export interface ITask {
    id?: number,
    title: string,
    description: string,
    createdAt: IDate,
    status: IStatus,
}