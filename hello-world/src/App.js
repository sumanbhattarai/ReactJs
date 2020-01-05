import React from 'react';
//import logo from './logo.svg';
import Style from './App.module.css';
import Greet from './components/Greet' ;
// import Radium , {StyleRoot } from 'radium';

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

    let textStyle = [] ;
    if(this.state.name.length <=2) {
        textStyle.push(Style.redColor) ;
    }
    if(this.state.name.length <=1 ) {
      textStyle.push(Style.boldText) ;
    }

    let showButtonClass = null ;
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
      showButtonClass = Style.red ;
      // buttonStyle.color = 'white' 
      // buttonStyle[':hover'] = {
      //   backgroundColor : 'pink' ,
      //   cursor : 'pointer'
      // }
    }
    return (
      // <StyleRoot>
        <div className={Style.App}>
          <p className = {textStyle.join(' ')}>There are some persons below : </p>
          {person}
            <button onClick={this.swapName.bind(this , 'Max')}>Swap Name</button>
            <button className={showButtonClass} onClick={this.changeShowState}>{buttonName}</button>
        </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;

