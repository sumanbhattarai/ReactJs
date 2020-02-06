import React from 'react';
import Style from './BackDrop.module.css' ;
const backDrop = props =>{
    return(
        <div className={Style.backDrop} onClick={props.hideBackDrop}></div>
    );
}

export default backDrop ;