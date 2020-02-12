import React , {Component , Fragment} from 'react' ;
import Header from './components/Header' ;
import axios from 'axios' ;
import StudentInfo from './components/StudentInfo' ;

export default class App extends Component {

  state = {
    students : [] ,
    isBusy : false ,
    error : ''
  }

  getStudentDetails = ()=> {
    this.setState({
      isBusy : true
    })
      axios.get('http://localhost:5000/api/students')
      .then(response=>{
          this.setState({
            students : response.data ,
            isBusy : false
          }) ;
      }).catch(error=>{
          this.setState({
            error : error.message(),
            isBusy : false
          })
      })
  }

  // make sure your server is still running.

  render(){
    let data = null ;
    if(this.state.isBusy && !this.state.error){
        data = <p>Loading ....</p>
    } else if(this.state.error) {
      data = <p>Ops , something went wrong.</p>
    } else if(this.state.students.length !== 0){
      data = ( this.state.students.map((students , index)=>{
                return <StudentInfo key={index} name={students.name} age={students.age} faculty={students.faculty} />
      }));
    }
    return(
      <Fragment>
            <Header />
            <div style={{textAlign : 'center'}}>
                <button onClick={this.getStudentDetails}>Get the Student Details</button>
                {data}
            </div>
      </Fragment>
    )
  }
}