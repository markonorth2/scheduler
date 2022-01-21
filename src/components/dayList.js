import React from "react";
import classNames from "classnames";
import DayListItem from "components/DayListItem.js";

export default function DayList(props) {
  const parsedDays = props.days.map(day => <DayListItem setDay={props.setDay} selected={props.day === day.name} key={day.id} {...day} />);  
  return (
    <ul>
      {parsedDays}
    </ul>
  );
}
