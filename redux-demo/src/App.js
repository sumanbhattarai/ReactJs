import React from 'react' ;
import {connect} from 'react-redux' ;

 class App extends React.Component{
   state = {
     counter : 0 ,
     results : []
   }
  render(){
    return(
      <div>
        <p>Counter value is : {this.props.ctr}</p>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
        <button onClick={this.props.onSaveResults}>Save Result</button>
        <ul>
          {this.state.results.map((results , index)=>{
             return <li key={index}>
                        {results}
                        <button onClick={()=>{this.deleteResult(index)}}>Delete</button>
                    </li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      ctr : state.counter
  };
} 

const mapDispatchToProps = dispatch => {
    return {
        onIncrement : ()=> dispatch({type : 'INCREMENT'}) ,
        onDecrement : ()=> dispatch({type:'DECREMENT'}) ,
        onSaveResults : ()=> dispatch({type:'SAVE'})
    };
};

export default connect(mapStateToProps , mapDispatchToProps)(App) ;