import React from 'react' ;

const studentInfo = props => (
    <div style={{border : '1px solid black' , borderRadius : '25px' , margin : '20px auto' , width : '40%' , padding:'20px'}}>
        <h3>{props.name}</h3>
        <p>Age : {props.age}</p>
        <p>Faculty : {props.faculty}</p>
    </div>
);

export default studentInfo ;