import React from "react";
import "components/Appointment/styles.scss";

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