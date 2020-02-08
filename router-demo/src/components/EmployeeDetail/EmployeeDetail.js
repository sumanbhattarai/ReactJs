import React from 'react' ;
import Style from './EmployeeDetail.module.css'

const employeeDetail = props =>{
    return(
        <div className={Style.employeeBox}>
            <div className={Style.imageBox}>Image</div>
            <ul>
                <li>Name : {props.name}</li>
            </ul>
        </div>
    );
}

export default employeeDetail ;