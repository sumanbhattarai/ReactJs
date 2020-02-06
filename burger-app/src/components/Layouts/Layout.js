import React , {Fragment} from 'react' ;
import Style from './Layout.module.css' ;
import Toolbar from '../Toolbar/Toolbar' ;

const layout = props =>(
    <Fragment>
    <Toolbar/>
    <main className={Style.content}>
        {props.children}
    </main>
    </Fragment>
);

export default layout ;