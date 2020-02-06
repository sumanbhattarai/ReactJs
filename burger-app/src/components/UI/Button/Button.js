import React from 'react' ;
import Style from './Button.module.css' ;

const button = props =>(
    <button 
    className={[Style.button , Style[props.btnType]].join(' ')}
    onClick={props.clicked}
    >
        {props.children}
    </button>
);

export default button ;