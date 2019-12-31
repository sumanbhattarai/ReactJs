import React from 'react' ;


const greet = (props) => {
    return(
        <div>
            <p onClick={props.click}>Hi , my name {props.name}.</p>
            <p>{props.children}</p>
            <input value={props.name} onChange={props.change} />
        </div>
    );
}
export default greet;