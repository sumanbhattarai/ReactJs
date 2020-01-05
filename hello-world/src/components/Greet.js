import React from 'react' ;
import Style from './Greet.module.css' ;
// import Radium from 'radium' ;


const greet = (props) => {
    // const style = {
    //     '@media (min-width : 500px)' : {
    //         color : 'green'
    //     }
    // };
    return(
        <div className = {Style.Greet}>
            <p onClick={props.click}>Hi , my name {props.name}.</p>
            <p>{props.children}</p>
            <input value={props.name} onChange={props.change} />
        </div>
    );
}
// export default Radium(greet);
export default greet ;
