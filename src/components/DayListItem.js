import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  let dayListItemClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected === true,
    "day-list__item--full": props.spots === 0

  });

  let formatSpots = (num) => {
    if (num >1){
      return num + " spots remaining"
    } else if (num === 1) {
      return "1 spot remaining";
    } else if (num === 0) {
      return "no spots remaining";
    }
  }
  
  return (
    <li 
      onClick={() => props.onChange(props.name)}
      className={dayListItemClass}
    >
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)} </h3>
    </li>
  );
}