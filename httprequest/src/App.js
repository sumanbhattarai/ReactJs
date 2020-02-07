import React from 'react' ;
import Employee from './components/Employee' ;
import axios from 'axios' ;

export default class App extends React.Component{
  state={
    employee : null
  }
  componentDidMount(){
    console.log('component did mount')
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(response => {
      const updatedEmployee = response.data.data.slice(0 , 3) ;
      this.setState({
        employee : updatedEmployee
      });
    }).catch(error => {
      console.log(error);
    })
  }
  render(){
    console.log('rendering ..')
    let employeeDetail = 'Loading ...' ;
    if(this.state.employee){
      employeeDetail = this.state.employee.map((employee , index) =>{
        return <Employee 
                key={index}
                name={employee.employee_name} 
                age={employee.employee_age} 
                salary={employee.employee_salary} />
      });
    }
    return(
      <div>
        {employeeDetail}
      </div>
    );
  }
}