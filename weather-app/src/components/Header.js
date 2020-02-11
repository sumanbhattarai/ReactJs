import React from 'react' ;

const header = props => {
    return (
        <div style={{backgroundColor : 'black' , 
                    lineHeight : '80px' ,
                    width : '100%' ,  
                    color : 'white' ,
                    fontSize : '30px' ,
                    textAlign : 'center'}}>
            Weather App
        </div>
    );
}

export default header ;