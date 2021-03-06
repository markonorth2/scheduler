import React, { useState } from "react";

import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  function reset() {
    setStudent("");
    setInterviewer("");
  }

  function cancel() {
    reset();
    props.onCancel();
  }
  
  console.log("props.interviewers", props.interviewers)
  console.log("interviewer", interviewer)
  return(
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder = {props.isCreate === true && "Enter Student Name"}
            palceholder = {props.isEdit === true && props.student}
            value={student}
            onChange={(event) => setStudent(event.target.value)}
           
          />
        </form>
        <InterviewerList 
          onChange={setInterviewer}
          interviewers={props.interviewers}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => props.onSave(student, interviewer)} >Save</Button>
        </section>
      </section>
    </main>
    
  )
}