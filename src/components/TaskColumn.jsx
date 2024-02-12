import React from "react";
import ToDo from "../../public/assets/direct-hit.png";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ taskName, icon, tasks, status, handleDelete }) => {
  // const TaskColumn = (props) => {
  // console.log("props", props);

  // const {taskName, icon} = props;
  return (
    <section className="taskColumn">
      <h2 className="taskColumnHeading">
        <img src={icon} alt="Icon" className="taskColumnIcon" />
        {taskName}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
