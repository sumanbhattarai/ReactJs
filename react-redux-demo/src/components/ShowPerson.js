import React from 'react' ;

const showPerson = props => {
    return(
        <div style={{border : '1px solid black'}} onClick={props.clicked}>
            Name : {props.name}
            Age : {props.age}
        </div>
    );
}

export default showPerson ;