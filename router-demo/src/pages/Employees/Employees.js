import React , {Component} from 'react' ;
import {Link} from 'react-router-dom' ;
import axios from 'axios' ;
import EmployeeDetail from '../../components/EmployeeDetail/EmployeeDetail' ;

export default class Employees extends Component {
    state={
        employees : [], 
        isBusy : true,
        error : false
    }

    componentDidMount(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
          const updatedEmployee = response.data.data.slice(0 , 4) ;
          this.setState({
            employees : updatedEmployee,
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
                <p style={{textAlign : 'center'}}>Loading ...</p>
            );
        } else if(this.state.error){
            return(
                <p>Ops ! something went wrong</p>
            );
        }else {
            return(
                <div style={{display : 'flex'}}>
                    {this.state.employees.map((employees , index)=>{
                        return (
                            <Link to={"/employees/id/"+employees.id} key={index}>
                                <EmployeeDetail name={employees.employee_name} />
                            </Link>
                        );
                    })}
                </div>
            );
        }
    }
}