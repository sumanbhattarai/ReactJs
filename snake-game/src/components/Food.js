import React from 'react' ;

const food = (props)=>{
    const style = {
        left : `${props.foodDots[0]}%` ,
        top : `${props.foodDots[1]}%` ,
    }

    return(
        <div className='food' style={style}/>
    );
}

export default food ;