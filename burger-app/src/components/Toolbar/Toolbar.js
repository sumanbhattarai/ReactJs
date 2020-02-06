import React from 'react' ;
import Style from './Toolbar.module.css' ;
import Logo from '../Logo/Logo' ;

const toolbar = props =>{
    return(
        <header className={Style.toolbar}>
            <div>Menu</div>
            <Logo/>
            <nav>
                ...
            </nav>
        </header>
    );
}

export default toolbar ;