import React from 'react' ;

export default class AddPerson extends React.Component {
    state={
        name : '' ,
        age : ''
    }

    handleChange = e => {
        const inputName  = e.target.name 
        this.setState({
            [inputName] : e.target.value
        }) 
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Name" name='name' value={this.state.name} onChange={this.handleChange} />
                <input type="number" placeholder="Age" name='age' value={this.state.age} onChange={this.handleChange} />
                <button onClick={()=>{this.props.addPerson(this.state.name , this.state.age)}}>Add Person</button>
            </div>
        );
    }
}