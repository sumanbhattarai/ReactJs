import React , {Fragment} from 'react' ;
import Style from './Layout.module.css' ;

const layout = props =>(
    <Fragment>
    <div>
        Toolbar , Sidebar , backdrop
    </div>
    <main className={Style.content}>
        {props.children}
    </main>
    </Fragment>
);

export default layout ;