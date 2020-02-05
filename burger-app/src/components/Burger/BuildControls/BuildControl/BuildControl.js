import React from 'react' ;
import Style from './BuildControl.module.css' ;

const buildControl = props =>{
    return(
        <div className={Style.buildControl}>
            <div className={Style.label}>{props.label}</div>
            <button className={Style.less} onClick={props.remove} disabled={props.disabled}>Less</button>
            <button className={Style.more} onClick={props.add}>More</button>
        </div>
    );
}

export default buildControl ;