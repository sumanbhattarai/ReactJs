import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' ;

class App extends React.Component{
  state = {
    name : [ 'Suman' , 'Sujan']
  }

  swapName = (newName) => {
    // console.log('clicked') ;
    // this.state.name[0] = 'Sujan' ;  DONOT DO THIS !
    this.setState({
      name : [newName , 'Suman']
    })
  }

  changeName = (event)=>{
    this.setState({
      name: [event.target.value , 'Suman']
    })

  }
  render(){
    return (
      <div className="App">
        <Greet change={this.changeName} name={this.state.name[0]} />
        <Greet click={this.swapName.bind(this , 'SB')} name={this.state.name[1]} >I am 20 years old. </Greet>
        {/* we can also do as click ={ ()=> this.swapName('SB')} but its not a good idea. */}
        <button onClick={this.swapName.bind(this , 'Max')}>Swap Name</button>
    </div>
    );
  }
}

export default App;
