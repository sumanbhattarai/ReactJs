import React from 'react';
import AddPerson from './containers/AddPerson' ;
import {connect} from 'react-redux' ;
import ShowPerson from './components/ShowPerson' ;
import * as actionTypes from './store/action' ;

class App extends React.Component {
  render(){
    return(
      <React.Fragment>
        <AddPerson addPerson={this.props.addPerson} />
          {this.props.persons.map((person , index)=>{
            return <ShowPerson key={index} name={person.name} age={person.age} clicked={()=>{this.props.onDelete(index)}} />
          })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons : state.persons
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addPerson : (name,age)=> dispatch({type : actionTypes.ADD , detail : { name : name , age : age}}) ,
    onDelete : (index)=> dispatch({type : actionTypes.DELETE , index : index}) ,
  };
}

export default connect(mapStateToProps , mapDispatchToProps)(App) ;