import { IDate } from "../interfaces/date.interface";

export const dateConverter = ({date}: IDate) => {
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth()+1).toString().padStart(2, '0');;
    const year = date.getUTCFullYear().toString();
    return `${day}/${month}/${year}`;
}