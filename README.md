# Interview Scheduler

Interview Scheduler is a single page application built using React that allows users to book and cancel interviews. Data is persisted by an API server using a PostgreSQL database. The client application communicates with the API server over HTTP using axios, using the JSON format. Jest tests are used throughtout the development of the project. 


## Final Product

### User (Mark) can view existing interview appointments and all remaining spots for each day of the week
![](https://github.com/markonorth2/scheduler/blob/master/screenshots/step_1.png)

### User (Mark) can select the day and time he is available by clicking the add-button on an empty spot to trigger an input form
![](https://github.com/markonorth2/scheduler/blob/master/screenshots/step_2.png)

### In the input form, user (Mark) can enter his name and select an available interviewer 
![](https://github.com/markonorth2/scheduler/blob/master/screenshots/step_3.png)

### User (Mark) can save and see the interview appointment that he created on the Interview Scheduler. The number of spots remaining is also updated.  
![](https://github.com/markonorth2/scheduler/blob/master/screenshots/step_5.png)

### User (Mark) can see an error prompt if the interview fails to save to the server
![](https://github.com/markonorth2/scheduler/blob/master/screenshots/step_4.png)

### User (Mark) can delete his interview appointment after a confirmation prompt
![](https://github.com/markonorth2/scheduler/blob/master/screenshots/step_6.png)

### If confirmed, user can see his appointment is deleted and spots remaining is updated
![](https://github.com/markonorth2/scheduler/blob/master/screenshots/step_7.png)


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```


## Technical Specifications

- React
- Webpack
- Babel
- Axios
- WebSockets
- Storybook 
- Webpack Dev Server
- Testing Library
- Jest 
