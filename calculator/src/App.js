import React from 'react';
import Style from './App.module.css';
import NumberBoard from './component/NumberBoard';

class App extends React.Component{
  constructor(props){
    super(props) ; 
    this.state={
      result : ""
    }
  }

  showOnResult = (buttonName)=>{
    if(buttonName ==='AC'){
      this.setState({
        result : ""
      })
    }
    else if(buttonName ==='Back'){
      this.setState({
        result : this.state.result.slice(0,-1)
      });
    }
    else if(buttonName === "="){
      this.calculate();
    }
    else {
      this.setState({
        result : this.state.result + buttonName
      });
    }
  }

  calculate = ()=>{
    this.setState({
      result : eval(this.state.result)
    });
  }
  
  render(){
    return(
      <div>
          <h1>Simple Calculator</h1>
          <div className={Style.resultBox}><h2>{this.state.result}</h2></div>
          <NumberBoard buttonIsPressed={this.showOnResult}/>
      </div>
    );
  }
}

export default App;
