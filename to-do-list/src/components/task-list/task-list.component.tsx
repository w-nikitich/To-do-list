import { useState } from "react";
import { ITaskList } from "../../interfaces/task-list.interface";
import "./task-list.component.scss";
import { Task } from "../task/task.component";
import { Button } from "../ui/button/button.component";
import { UpdateTask } from "../update-task/update-task.component";
import { useTasks } from "../task-context/task-context.component";

export const TaskList: React.FC<ITaskList> = ({ type }: ITaskList) => {
  const { tasks } = useTasks();
  const [isAddActive, setIsAddActive] = useState(false);
  const status = type.title.replace(/-/g, " ");

  return (
    <div className="task-list">
      <div className="task-list__title-block">
        <span className={`task-list__mark ${type.title}`}></span>
        <p className="task-list__title">{status}</p>
      </div>
      <div className="task-list__list">
        {tasks
          .filter((task) => task.status.title === type.title)
          .map((task) => (
            <Task
              key={task.id}
              {...task}
              createdAt={{ date: new Date(task.createdAt.date) }}
            />
          ))}
        {!isAddActive && (
          <Button type="lg" onClick={() => setIsAddActive(true)} />
        )}
        {isAddActive && (
          <UpdateTask
            type="create"
            status={type}
            handleClose={{ onClick: () => setIsAddActive(false) }}
          />
        )}
      </div>
    </div>
  );
};
