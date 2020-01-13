import React from 'react' ;

const task = (props)=>{
    return(
        <div className='task-box'>
            <div className='task-name'>
                {props.taskNo}. &nbsp;
                {props.name}
                <button className='delete-button' onClick={props.delete}>Delete</button>
            </div>
        </div>
    );
}

export default task ;