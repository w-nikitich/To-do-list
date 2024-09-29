import { Button } from "../ui/button/button.component";
import "./modal-window.component.scss";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useEffect, useRef, useState } from "react";
import { IModal } from "../../interfaces/modal.interface";
import { createTask } from "../../helpers/create-task.helper";
import { IStatus } from "../../interfaces/status.interface";
import { IDate } from "../../interfaces/date.interface";
import { useTasks } from "../task-context/task-context.component";

export const ModalWindow: React.FC<IModal> = ({
  isOpened,
  onClose,
}: IModal) => {
  const {addTask} = useTasks();
  const [status, setStatus] = useState<IStatus>({ title: "to-do" });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleStatusChange = (event: SelectChangeEvent) => {
    const selectedStatus = event.target.value as
      | "to-do"
      | "in-progress"
      | "completed";
    setStatus({ title: selectedStatus });
  };

  const handleTaskCreation = () => {
    const createdAt: IDate = { date: new Date() };
    const newTask = { title, description, createdAt, status: status };
    createTask(newTask);
    addTask(newTask);
    onClose();
  };

  useEffect(() => {
    if (isOpened) modalRef.current?.classList.remove("hidden");
    else modalRef.current?.classList.add("hidden");
  }, [isOpened]);

  return (
    <div className="modal hidden" ref={modalRef}>
      <span className="close" onClick={onClose}></span>
      <TextField
        className="modal__title"
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        inputProps={{ maxLength: 12 }}
      />
      <TextField
        className="modal__description"
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        inputProps={{ maxLength: 200 }}
      />
      <FormControl fullWidth className="modal__status">
        <InputLabel>Status</InputLabel>
        <Select
          value={status.title}
          label="Status"
          onChange={handleStatusChange}
        >
          <MenuItem value="to-do">To do</MenuItem>
          <MenuItem value="in-progress">In progress</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <Button type="create" onClick={handleTaskCreation} />
    </div>
  );
};
