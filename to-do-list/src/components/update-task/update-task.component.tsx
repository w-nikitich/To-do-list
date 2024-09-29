import TextField from "@mui/material/TextField";
import { IUpdateTask } from "../../interfaces/update-task.interface";
import "./update-task.component.scss";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IStatus } from "../../interfaces/status.interface";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "../ui/button/button.component";
import { IDate } from "../../interfaces/date.interface";
import { createTask } from "../../helpers/create-task.helper";
import { useTasks } from "../task-context/task-context.component";

export const UpdateTask: React.FC<IUpdateTask> = ({
  task,
  status,
  type,
  handleClose,
  handleUpdate,
}: IUpdateTask) => {
  const { addTask, updateTask } = useTasks();
  const [statusTitle, setStatusTitle] = useState<IStatus>({
    title: status.title,
  });
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  const handleStatusChange = (event: SelectChangeEvent) => {
    const selectedStatus = event.target.value as
      | "to-do"
      | "in-progress"
      | "completed";
    setStatusTitle({ title: selectedStatus });
  };

  const handleTaskCreation = () => {
    const createdAt: IDate = { date: new Date() };
    const newTask = { title, description, createdAt, status: status };
    addTask(newTask);
    createTask(newTask);
    handleClose?.onClick();
  };

  const handleEditTask = () => {
    if (task && handleUpdate) {
      const updatedtask = {
        id: task.id,
        title: title,
        description: description,
        createdAt: task?.createdAt,
        status: statusTitle,
      };
      updateTask(updatedtask);
      handleUpdate(updatedtask);
    }
  };

  return (
    <div className="task update">
      <TextField
        className="task__add-title"
        label={task?.title || "Title"}
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        inputProps={{ maxLength: 12 }}
      />
      <TextField
        className="task__add-description"
        label={task?.description || "Description"}
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        inputProps={{ maxLength: 200 }}
      />
      {type === "update" && (
        <FormControl fullWidth className="modal__status">
          <InputLabel>Status</InputLabel>
          <Select
            value={statusTitle.title}
            label="Status"
            onChange={handleStatusChange}
          >
            <MenuItem value="to-do">To do</MenuItem>
            <MenuItem value="in-progress">In progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
      )}

      {type === "update" && (
        <div className="task__update-btns">
          <Button type="update" onClick={handleEditTask} />
          {handleClose && (
            <Button type="cancel" onClick={handleClose.onClick} />
          )}
        </div>
      )}
      {type === "create" && (
        <Button type="create" onClick={handleTaskCreation} />
      )}
    </div>
  );
};
