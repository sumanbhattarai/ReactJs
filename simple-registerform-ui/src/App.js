import React from 'react';
import Style from './App.module.css';
import Login from './components/Register' ;
import Error from './components/Error/Error' ;

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      error : []
    }
  }


  removeError = (id)=>{
    const error = [...this.state.error];
    error.splice(id , 1);
    this.setState({
      error :  error
    });
  }

  updateError = (errors)=>{
    console.log('udpdate error' , errors);
    this.setState({
      error : errors
    });
  }

  render(){
    const error = this.state.error.map((error , key)=>{
      return <Error id={key} errorName={this.state.error[key]} cancelClick={this.removeError.bind(this, key)}/>
    });
    return(
      <div className={Style.mainBox}>
        <h1>Please, register to login.</h1>
              {error}
              <Login errorList={this.updateError}/>
      </div>
    );
  }
}
