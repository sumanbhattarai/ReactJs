import React , {Component} from 'react' ;
import axios from 'axios';

export default class EmployeeInfo extends Component{
    state={
        employeeInfo : [],
        isBusy : true ,
        error : null 
    }

    componentDidMount(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
          const selectedEmployee = response.data.data[this.props.match.params.id-1];
          this.setState({
            employeeInfo : selectedEmployee,
            isBusy : false
          });
        }).catch(error => {
          this.setState({
              error : true
          })
        })
    }
    render(){
        if(this.state.isBusy && !this.state.error){
            return(
                <p style={{textAlign : 'center'}}>Loading details ....</p>
            );
        }else if(this.state.error){
            return(
                <p>Ops ! something went wrong</p>
            );
        }else {
            return(
                <div style={{border : 'none', 
                            width : '400px' , 
                            textAlign : 'center' ,
                            margin : 'auto' ,
                            marginTop : '20px' ,
                            padding : '40px' ,
                            boxShadow :'10px 10px 5px 0px rgba(181,177,181,1)'}}>
                    <h3>Selected Employee detail is : </h3>
                    <ul>
                        <li>Name : {this.state.employeeInfo.employee_name}</li>
                        <li>Age : {this.state.employeeInfo.employee_age}</li>
                        <li>Salary : {this.state.employeeInfo.employee_salary}</li>
                    </ul>
                </div>
            );
        }
    }
}