import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' ;

class App extends React.Component{
  state = {
    name : [ 'Suman' , 'Sujan'],
    show : true 
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

  changeShowState = () =>{
    const showStatus = this.state.show ;
    this.setState({
      show : !showStatus
    })
  }

  buttonName = ()=> {
    if(this.state.show === true) 
      return 'Hide' ;
    else
      return 'Show' ;
  }

  render(){
    return (
      <div className="App">
        {
          this.state.show === true ?
        <div>
        <Greet change={this.changeName} name={this.state.name[0]} />
        <Greet click={this.swapName.bind(this , 'SB')} name={this.state.name[1]} >I am 20 years old. </Greet>
        {/* we can also do as click ={ ()=> this.swapName('SB')} but its not a good idea. */}
        </div> : null 
        }
        <button onClick={this.swapName.bind(this , 'Max')}>Swap Name</button>
        <button onClick={this.changeShowState}>{this.buttonName()}</button>
    </div>
    );
  }
}

export default App;
