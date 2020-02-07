import React from 'react';

const employee = props => (
    <React.Fragment>
        <p>Name : {props.name}</p>
        <p>Salary : {props.salary}</p>
        <p>Age : {props.age}</p>
    </React.Fragment>
);

export default employee; 