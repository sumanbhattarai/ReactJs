import React from 'react' ;
import './Char.css' ;

const char  =(props)=> {
    return(
        <div className='charBox' onClick={props.click}>
            {props.character}
        </div>
    );

}

export default char ;