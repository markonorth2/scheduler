export function getAppointmentsForDay (state, day) {
	let appointments = [];

  if (!state.days[0]) {
    return appointments

  }

	const getAppointmentIds = () => {
		for (let x of state.days) {
			if (x.name === day) {
				return x.appointments;
			}
		}
    return appointments
	};

	getAppointmentIds().map((x) => {
    if (state.appointments[`${x}`]) {
      appointments.push(state.appointments[`${x}`])
    } 
	});

  return appointments
}

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  const interviewerID = interview.interviewer;
  const interviewerObj = state.interviewers[interviewerID];

  return {...interview, interviewer : interviewerObj};
} 

export function getInterviewersForDay(state, day) {
  const interviewersArr = [];
  
  for (let stateDay of state.days) {
    if (stateDay.name === day) {
      for (let appID of stateDay.interviewers) {
        for (let key in state.interviewers) {
          if (appID.toString() === key) {
            interviewersArr.push(state.interviewers[key])
          }
        }
      }
    }
  };
  return interviewersArr;
}