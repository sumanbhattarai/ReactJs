import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' ;

class App extends React.Component{
  state = {
    name : [ 'Suman' , 'Sujan']
  }

  swapName = () => {
    // console.log('clicked') ;
    // this.state.name[0] = 'Sujan' ;  DONOT DO THIS !
    this.setState({
      name : ['Sujan' , 'Suman']
    })
  }
  render(){
    return (
      <div className="App">
        <Greet name={this.state.name[0]} />
        <Greet click={this.swapName} name={this.state.name[1]} >I am 20 years old. </Greet>
        <button onClick={this.swapName}>Swap Name</button>
    </div>
    );
  }
}

export default App;
