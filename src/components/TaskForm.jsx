import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // console.log(task, status);
  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  //Tag id selected or not
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  //   if condition we check our tag already available in tags array or not
  //   we use some method inside we check each item
  //   some method return true or false. we are comparing taskData.tags array with tag Name
  //   if tag eg. html already available will remove from the array through filter and which return new array and we store in new variable as filterTags
  //  we have overwrite tags to filter in setTaskData which means over tag is not available in this tag array
  //  so now in else we directly add that tag in tags array
  // [...prev.tags, tag] } will keep prev selected tag in the array;

  const selectTag = (tag) => {
    console.log(tag);
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };
  // console.log(taskData.tags);

  const handleChange = (e) => {
    console.log(e.target);
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;

    console.log(name, value);
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(taskData);

  const handleSubmit = (e) => {
    console.log(taskData);
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };
  return (
    <header className="appHeader">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="taskInput"
          placeholder="Enter yr task"
          // onChange={(e) => setTask(e.target.value)}
          // onChange={(e) => handleTaskChange(e)}
          // onChange={handleTaskChange}
          onChange={handleChange}
          name="task"
          value={taskData.task}
        />
        <div className="taskFormBottomLine">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag tagName="JS" selectTag={selectTag} selected={checkTag("JS")} />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              className="taskStatus"
              // onChange={handleStatusChange}
              onChange={handleChange}
              name="status"
              value={taskData.status}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="taskSubmit">+ Add task</button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
