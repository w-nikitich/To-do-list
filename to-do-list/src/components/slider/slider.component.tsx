import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./slider.component.scss";
import { ITaskList } from "../../interfaces/task-list.interface";
import { useTasks } from "../task-context/task-context.component";
import { Task } from "../task/task.component";
import { Button } from "../ui/button/button.component";
import { useState } from "react";
import { UpdateTask } from "../update-task/update-task.component";

export const Slider: React.FC<ITaskList> = ({ type }: ITaskList) => {
  const { tasks } = useTasks();
  const [isAddActive, setIsAddActive] = useState(false);
  const status = type.title.replace(/-/g, " ");

  return (
    <div className="slider">
      <div className="slider__title-block">
        <span className={`slider__mark ${type.title}`}></span>
        <p className="slider__title">{status}</p>
      </div>
      <Swiper slidesPerView={1}>
        {tasks
          .filter((task) => task.status.title === type.title)
          .map((task) => (
            <SwiperSlide>
              <Task
                key={task.id}
                {...task}
                createdAt={{ date: new Date(task.createdAt.date) }}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      {tasks.filter((task) => task.status.title === type.title).length === 0 &&
        !isAddActive && (
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
  );
};
