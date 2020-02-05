import React , {Fragment} from 'react' ;
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends React.Component{
    state = {
        ingredients : {
            salad : 2 ,
            cheese : 1 ,
            meat : 2 ,
            bacon : 1
        }
    }
    render(){
        return(
            <Fragment>
                <div>
                    <Burger  ingredients = {this.state.ingredients}/>
                </div>
                <div>
                    Burger Control
                </div>
            </Fragment>
        );
    }
}