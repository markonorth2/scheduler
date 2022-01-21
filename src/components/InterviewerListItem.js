import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  let interviewerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected === true,

  });


  return (
    <li 
      onClick={() => props.setInterviewer(props.id)}
      className= {interviewerListItemClass} >
      <img
        className="interviewers__item-image"
        src= {props.avatar}
        alt= {props.name}
      />
      {props.name}
    </li>
  );
}