import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "/assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="taskCard">
      <p className="taskText">{title}</p>
      <div className="taskCardBottomLine">
        <div className="taskCardTags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>

        <div className="taskDelete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="deleteIcon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
