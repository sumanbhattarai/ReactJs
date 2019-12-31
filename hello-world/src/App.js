import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' ;

class App extends React.Component{
  state = {
    name : ['Suman' , 'Sujan'],
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
    this.setState({
      show : !this.state.show
    })
  }

  deleteHandler = (personIndex) => {
    const name =  this.state.name ;
    name.splice(personIndex , 1 ) ;
    this.setState({
      name : name 
    })
  }

  render(){
    let person = null ;
    let buttonName = 'Hide' ;
    if(this.state.show === true) {
      person = (
        <div>
          {
            this.state.name.map((name , index) => {
              return <Greet name={name} click={()=>this.deleteHandler(index)} /> ;
            })
          }
          {/* <Greet change={this.changeName} name={this.state.name[0]} />
          <Greet click={this.swapName.bind(this , 'SB')} name={this.state.name[1]}> I am 20 years old. </Greet> */}
          {/* we can also do as click ={ ()=> this.swapName('SB')} but its not a good idea. */}
        </div>
      );
    }
    else {
      buttonName = 'Show' ;
    }
    return (
      <div className="App">
        {person}
          <button onClick={this.swapName.bind(this , 'Max')}>Swap Name</button>
          <button onClick={this.changeShowState}>{buttonName}</button>
      </div>
    );
  }
}

export default App;
