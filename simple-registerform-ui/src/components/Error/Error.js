import React from 'react' ;
import Style from './Error.module.css' ;

const error =(props)=>{
    return(
        <div className={Style.errorBox}>
                {props.errorName}
                <span id={Style.close} onClick={props.cancelClick}>+</span>
        </div>
    );
}

export default error;