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

  changeName = (event , index)=>{
    const name = [...this.state.name] ;
    name[index] = event.target.value ;
    this.setState({
      name : name
    })

  }

  changeShowState = () =>{
    this.setState({
      show : !this.state.show
    })
  }

  deleteHandler = (personIndex) => {
    const name =  [...this.state.name] ;
    name.splice(personIndex , 1 ) ;
    this.setState({
      name : name 
    })
  }

  render(){

    const buttonStyle = {
      backgroundColor : 'white' ,
      color : 'black' , 
      border : '1px solid black' ,
      outline : 'none' ,
      width : '100px' ,
      height : '40px' ,
    }

    let person = null ;
    let buttonName = 'Hide' ;
    if(this.state.show === true) {
      person = (
        <div>
          {
            this.state.name.map((name , index) => {
              return <Greet name={name} click={()=>this.deleteHandler(index)} change={(event)=>this.changeName(event , index)} /> ;
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
      buttonStyle.backgroundColor = 'red' 
      buttonStyle.color = 'white' 
    }
    return (
      <div className="App">
        {person}
          <button onClick={this.swapName.bind(this , 'Max')}>Swap Name</button>
          <button style={buttonStyle} onClick={this.changeShowState}>{buttonName}</button>
      </div>
    );
  }
}

export default App;
