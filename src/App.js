import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import './App.css';
import Student from './student'
import Student1 from './student1'
import Header from './header'
import SignIn from './Sign'

function App() {
  return (
    <Router>  
       <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/"><h1>Welcome</h1></Route>
            <Route path="/details">
              <Student name={"Bharat "} cls={"12"} rollno={"786"} subject={"React"}/>
              <Student1 name={"Ankit"} cls={"10"} rollno={"101"} subject={"Angular"}/>
            </Route>
            <Route path="/signup">
              <SignIn/>
            </Route>
          </Switch>
        </div>
    </Router>
);}
export default App;
