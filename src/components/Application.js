import React from "react";
import axios from "axios"

import "components/Application.scss";
import DayList from "components/DayList.js";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

import { useState, useEffect } from "react";

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm",
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "4pm",
//   }
// ];

// We will no longer store the days data in a variable at the top level of the Application.js module. 
// This data will now become application state that we will track with our useState Hook.
  // const days = [
  //   {
  //     id: 1,
  //     name: "Monday",
  //     spots: 2,
  //   }, 
  //   {
  //     id: 2,
  //     name: "Tuesday",
  //     spots: 5,
  //   },
  //   {
  //     id: 3,
  //     name: "Wednesday",
  //     spots: 0,
  //   },
  // ];


export default function Application(props) {
  // Combine the state for day, days, and appointments into a state into a single object.
    // const [day, setDay] = useState("Monday");
    // const [days, setDays] = useState([]);
    // const [appointments, setAppointments] = useState ({});

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviews: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const bookInterview = function (id, interview){
    console.log(id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() =>   
         setState((prev) => ({...prev, appointments})
      )
    )
  }

  function cancelInterview(id) {
    const cancelAppointment = {
      ...state.appointments[id],
      interview : null
    }

    const appointments = {
      ...state.appointments,
      [id] : cancelAppointment
    }

    return axios.delete(`/api/appointments/${id}`)
    .then(()=> 
      setState({...state, appointments})
    )
  }

  const schedule = dailyAppointments.map(appointment => { 
    const interview = getInterview(state, appointment.interview);
    const interviewersArr = getInterviewersForDay(state, state.day);
    return (<Appointment {...appointment} key={appointment.id} interview={interview} interviewers={interviewersArr} bookInterview={bookInterview} cancelInterview={cancelInterview} /> )})

  const setDay = (day) => {
		return setState({ ...state, day });
	};
  
  const setDays = days => setState(prev => ({...prev, days}));
  
  //Practicing useEffect hook
  useEffect (() => {
    console.log("render");
  });


  //Create an effect to make a GET request to /api/days using axios and update the days state with the response. 
    // useEffect(() => {
    //   axios.get('/api/days').then(response => {
    //     setDays(response.data)
    //   })
    // }, [])


  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      // console.log('cool', all[0]); // first
      // console.log('nice', all[1].data); // second
      // console.log('dang', all[2]); // third
      // const [ first, second, third ] = all;
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));


        
      

    });
  }, []);

  // const appointmentList = dailyAppointments.map((appointment) => {
  //   // We could pass these props one by one, and when we do, we might notice a pattern. Our object keys match the prop names. 
  //   // It feels kind of repetitive to write each prop out, so let's explore a short way that we can accomplish the same goal. 
  //   // If we want every key in an object to become a prop for a component, we can spread the object into the props definition.
  //   // <Appointment key={appointment.id} id={appointment.id} time={appointment.time} interview={appointment.interview} /> 
  //   return <Appointment key={appointment.id} {...appointment}  />
  // } )

  console.log("state", state);
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
    <hr className="sidebar__separator sidebar--centered" />
    <nav className="sidebar__menu">  
      <DayList 
        days={state.days}
        value={state.day} 
        onChange={setDay} />
    
      
     </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
