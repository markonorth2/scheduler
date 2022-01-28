
import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

import useVisualMode from "hooks/useVisualMode";

// Names for each mode
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const EDIT = "EDIT";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM= "CONFIRM";


export default function Appointment(props) {
  
  // useVisualMode is a custom hook to track mode. Transition is to update the mode and back is to rewind to the previous mode
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW);
    });


  }
  function cancel() {

    transition(DELETING);

    props.cancelInterview(props.id)
    .then(()=> {
      transition(EMPTY)
    });
  }

  function onDelete(isDelete, isConfirm) {
    if (isDelete === true && isConfirm === false) {
      transition(CONFIRM);
    };
    if (isDelete === false && isConfirm === true) {
      transition(DELETING);
      props.cancelInterview(props.id)
        .then(()=> {
        transition(EMPTY)
      });
    }
    if (isDelete === false && isConfirm === false) {
      transition(SHOW)
    }
  } 


  return(
    <article className="appointment">
      {/* {props.time ? `Appointment at ${props.time}` : "No Appointments"} */}
      <Header time={props.time}/>

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={onDelete}
        />
       )}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back(EMPTY)} onSave={save} />}
      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === DELETING && <Status message={"Deleting"}/>}
      {mode === CONFIRM && <Confirm onDelete={onDelete} message={"Delete the Appointment?"} />}
      
    </article>
  )
}