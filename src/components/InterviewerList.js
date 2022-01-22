import React from "react";
import InterviewerListItem from "components/InterviewerListItem"
import "components/InterviewerList.scss";


export default function InterviewerList(props) {
  //console.log("props", props);
  //Turn interviewer objects into interviewerlist items
  const parsedInterviewers = props.interviewers.map(interviewer => <InterviewerListItem 
    key = {interviewer.id}
    id = {interviewer.id}
    selected = {props.interviewer === interviewer.id}
    setInterviewer = {props.setInterviewer}
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


// From DayList.js
// const parsedDays = props.days.map(day => <DayListItem setDay={props.setDay} selected={props.day === day.name} key={day.id} {...day} />);  
//   return (
//     <ul>
//       {parsedDays}
//     </ul>
//   );

