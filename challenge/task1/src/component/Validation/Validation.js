import React from 'react' ;

const validation = (props) =>{
    let message ;
    if(props.textLength < 6 )
    {
        message = 'Too Short' ;
    }
    else
    {
        message = 'Too Long' ;
    }
    return(
        <div>
            {message}
        </div>
    );
}

export default validation ;