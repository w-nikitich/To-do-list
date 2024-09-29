import { IHandler } from "../../interfaces/handler.interface";
import { Button } from "../ui/button/button.component";
import "./add-task.component.scss";

export const AddTask: React.FC<IHandler> = ({onClick}: IHandler) => {
  return (
    <div className="add-task">
      <Button type="sm" onClick={onClick}/>
    </div>
  );
};
