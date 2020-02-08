import React from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom' ;
import Nav from './components/Nav/Nav' ;
import Home from './pages/Home/Home' ;
import About from './pages/About/About' ;
import Employees from './pages/Employees/Employees';
import EmployeeInfo from './components/EmployeeInfo/EmployeeInfo'

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/employees/id/:id" component={EmployeeInfo} />
            <Route path="/employees" component={Employees} />
          </Switch>
        </Router>
      </div>
    );
  }
}