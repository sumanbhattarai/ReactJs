import React from 'react' ;

const snake = (props)=>{
    return(
        <div>
            {
                props.snakeDots.map((snakeDots , index)=>{
                    const style = {
                        left : `${snakeDots[0]}%` , 
                        top : `${snakeDots[1]}%`
                    };
                   return <div className="snake-dots" key={index} style={style} />
                })
            }
        </div>
    );
}

export default snake ;