import React from 'react' ;
import './Nav.css' ;
import {NavLink} from 'react-router-dom' ;

const nav = props => (
    <nav>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/employees" >Employees</NavLink></li>
    </nav>  
);

export default nav ;