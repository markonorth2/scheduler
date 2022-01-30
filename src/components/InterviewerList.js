import React from "react";
import InterviewerListItem from "components/InterviewerListItem"
import "components/InterviewerList.scss";


export default function InterviewerList(props) {
 
  const parsedInterviewers = props.interviewers.map(interviewer => <InterviewerListItem 
    key = {interviewer.id}
    id = {interviewer.id}
    selected = {props.value === interviewer.id}
    setInterviewer={() => props.onChange(interviewer.id)}
    avatar = {interviewer.avatar}
    name = {interviewer.name}

  />   
    
    )
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"> 
        {parsedInterviewers}
      </ul>
    </section>
  );
}




