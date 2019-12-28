import React from 'react' ;


const greet = (props) => {
    return(
        <div>
            <p>Hi , my name {props.name}.</p>
            <p>{props.children}</p>
        </div>
    );
}
export default greet;