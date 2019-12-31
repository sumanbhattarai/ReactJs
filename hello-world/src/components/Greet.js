import React from 'react' ;
import './Greet.css'


const greet = (props) => {
    return(
        <div className = "Greet">
            <p onClick={props.click}>Hi , my name {props.name}.</p>
            <p>{props.children}</p>
            <input value={props.name} onChange={props.change} />
        </div>
    );
}
export default greet;