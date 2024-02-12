import React from "react";
import "./Tag.css";
// const Tag = (props) => {
// console.log("props", props);
const Tag = ({ tagName, selectTag, selected }) => {
  // return <button className="tag">{props.tagName}</button>;
  // onClick ={ ()=> selectTag(tagName)} for selected /current tagName passed in arguments
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JS: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      onClick={() => selectTag(tagName)}
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
    >
      {tagName}
    </button>
  );
};

export default Tag;
