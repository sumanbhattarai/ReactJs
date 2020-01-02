import React from 'react' ;
import Validation from './component/Validation/Validation' ;
import Char from './component/Char/Char' ;

class App extends React.Component {
  state = {
    input : '' ,
    length : 0
  }

  changedInput = (event)=> {
    const input = event.target.value ;
    this.setState({
      input : input ,
      length : input.length
    })
  }

  deleteHandler = (index)=>{
    const input = this.state.input.split('') ;
    input.splice(index , 1) ;
    const newInput = input.join('') ;
    this.setState({
      input : newInput
    })
  }

  render(){
    const charList = this.state.input.split('').map((el , index)=>{
      return <Char character={el} key={index} click={()=>this.deleteHandler(index)} />
    });

    return(
      <div>
        <input onChange={event =>this.changedInput(event)} value={this.state.input}/>
        <br/>
        Length in input field is : {this.state.length}
        <Validation textLength = {this.state.length}  />
        {charList}
      </div>
    );
  }
}

export default App ;