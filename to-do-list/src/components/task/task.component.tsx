import { ITask } from "../../interfaces/task.interface";
import "./task.component.scss";
import IconButton from "@mui/joy/IconButton";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import MoreVert from "@mui/icons-material/MoreVert";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import { dateConverter } from "../../helpers/date-converter.helper";
import { deleteTaskFromStorage } from "../../helpers/delete-task.helper";
import { useState } from "react";
import { UpdateTask } from "../update-task/update-task.component";
import { useTasks } from "../task-context/task-context.component";

export const Task: React.FC<ITask> = ({
  id,
  title,
  description,
  createdAt,
  status,
}: ITask) => {
  const { updateTask, deleteTask } = useTasks();
  const [task, setTask] = useState<ITask | null>({
    id,
    title,
    description,
    createdAt,
    status,
  });
  const [isEditMode, setIsEditMode] = useState(false);

  function handleDeleteTask() {
    if (id !== undefined) {
      deleteTaskFromStorage(id);
      deleteTask(id);
      setIsEditMode(false);
      setTask(null);
    }
  }

  function handleMarkAsCompleted() {
    if (task) {
      const newCompletedTask: ITask = {
        id: task?.id,
        title: task?.title,
        description: task?.description,
        createdAt: task?.createdAt,
        status: { title: "completed" },
      };
      updateTask(newCompletedTask);
    }
  }

  function handleUpdateTask(updatedTask: ITask) {
    setIsEditMode(false);
    setTask(updatedTask);
  }

  return (
    <div className="task__wrapper">
      {isEditMode && task && (
        <UpdateTask
          status={status}
          task={{
            id: task?.id,
            title: task?.title,
            description: task?.description,
            createdAt: task?.createdAt,
            status: task?.status,
          }}
          type="update"
          handleUpdate={handleUpdateTask}
          handleClose={{onClick: () => setIsEditMode(false)}}
        />
      )}
      {task && !isEditMode && (
        <div className="task">
          <div className="task__title-block">
            <p className="task__title">{task?.title}</p>
            <Dropdown>
              <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: "outlined", color: "neutral" } }}
              >
                <MoreVert />
              </MenuButton>
              <Menu placement="bottom-start">
                <MenuItem onClick={() => setIsEditMode(true)}>Edit</MenuItem>
                <MenuItem onClick={handleMarkAsCompleted}>
                  Mark as completed
                </MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </Menu>
            </Dropdown>
          </div>
          <div className="task__description">
            <p>{task?.description}</p>
          </div>
          <div className="task__date">
            <p>{task && dateConverter(task.createdAt)}</p>
          </div>
        </div>
      )}
    </div>
  );
};
