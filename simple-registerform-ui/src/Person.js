import React from 'react';

class Person extends React.Component{

    constructor(){
        super();
        this.state={
            name : 'Sujan'
        }
    }

    static getDerivedStateFromProps(props, state){
            console.log('props : ' , props);
            console.log('state : ' , state);
            return { 
                name : props.name
            };
    }

    render(){
        console.log('State is : ' , this.state)
        return(
            <div>
                Hi , my name is {this.state.name}
            </div>
        );
    }
}

export default Person ;