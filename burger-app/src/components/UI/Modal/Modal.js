import React from 'react';
import Style from './Modal.module.css' ;

const modal = props =>{
    return(
        <div className={Style.Modal}>
            {props.children}
        </div>
    );
}

export default modal ;