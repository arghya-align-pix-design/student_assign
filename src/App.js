import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentRegistration from './components/registration/StudentRegistration';
import TeacherRegistration from './components/teacherRegistry/TeacherRegistration';
import ClassPage from './components/LandingPages/ClassPage';
import ClassSubjectPage from './components/LandingPages/ClassSubjectPage';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/student-registration" component={StudentRegistration} />
        <Route path="/teacher-registration" component={TeacherRegistration} />
        <Route path="/class" component={ClassPage} />
        <Route path="/class-subject" component={ClassSubjectPage} />
        <Route path="/" exact>
          <div>
            <h1>Welcome to the Registration Portal</h1>
            <p>Select an option to begin:</p>
            <ul>
              <li><a href="/student-registration">Student Registration</a></li>
              <li><a href="/teacher-registration">Teacher Registration</a></li>
            </ul>
          </div>
        </Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;