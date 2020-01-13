import React from 'react'

const InputField = (props)=>{
    const added = ()=>{
        const taskName =  document.getElementById('taskField').value ;
        if(taskName === null ){
            return false;
        }
        else{
            props.taskAdd(taskName) ;
        }
    }
    return(
        <div className='input-box'>
            <input id='taskField' placeholder='Input the task' /> <br/>
            <button className="add-button" name='add' onClick={added}>Add</button>
        </div>
    );
}


export default InputField ;