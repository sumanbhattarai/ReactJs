import React from 'react';
import Style from './Logo.module.css' ;
import Logo from '../../assets/images/burger-logo.png' ;

const logo = props => (
    <div className={Style.logoBox}>
        <img src={Logo} alt = "burger logo"/>
    </div>
);

export default logo ;
