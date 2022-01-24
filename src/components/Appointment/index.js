import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  let text = "No appointments";
  if (props.time){
    text = props.time
  }
  
  return(
    <article className="appointment">
      <p>{"Appointment at " + text }</p>
    </article>
  )
}