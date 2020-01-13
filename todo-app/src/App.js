import React from 'react';
import './App.css';
import InputField from './component/InputField';
import Task from './component/Task' ;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tasks : []
    }
  }

  addTask = (taskName)=>{
    const tasks = [...this.state.tasks] ;
    tasks.push(taskName);
    this.setState({
      tasks : tasks
    });
  }

  deleteTask=(key)=>{
    const tasks = [...this.state.tasks];
    tasks.splice(key,1);
    this.setState({
      tasks : tasks
    });
  }

  render(){
    const task = this.state.tasks.map((tasks , key)=>{
        return <Task taskNo={key+1} name={this.state.tasks[key]} delete={this.deleteTask.bind( this , key)} />
    });
    return(
      <div>
        <h1>TODO APP</h1>
        <InputField taskAdd={this.addTask} />
        {task}
      </div>
    );
  }
}
export default App;
