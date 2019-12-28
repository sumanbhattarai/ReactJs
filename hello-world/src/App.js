import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' ;

class App extends React.Component{
  state = {
    name : [ 'Suman' , 'Sujan']
  }
  render(){
    return (
      <div className="App">
        <Greet name={this.state.name[0]} />
        <Greet name={this.state.name[1]} >I am 20 years old. </Greet>
    </div>
    );
  }
}

export default App;
