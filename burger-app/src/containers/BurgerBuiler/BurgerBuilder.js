import React , {Fragment} from 'react' ;
import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal' ;
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary' ;

const INGREDIENTS_PRICE = {
    Salad : 10 ,
    Meat : 30 ,
    Cheese : 20 ,
    Bacon : 10
}
export default class BurgerBuilder extends React.Component{
    state = {
        ingredients : {
            Salad : 0 ,
            Cheese : 0 ,
            Meat : 0 ,
            Bacon : 0
        },
        totalPrice : 40
    }

    addIngredients = type =>{
        const oldCount = this.state.ingredients[type] ;
        const updateCount = oldCount + 1 ;
        const updateIngredients = {...this.state.ingredients} ;
        updateIngredients[type] = updateCount ;
        const priceAdd = INGREDIENTS_PRICE[type];
        const oldPrice  = this.state.totalPrice ;
        const newPrice = oldPrice + priceAdd ;
        this.setState({
            ingredients : updateIngredients ,
            totalPrice : newPrice
        });
    }

    removeIngredients = type =>{
        const oldCount = this.state.ingredients[type] ;
        if(oldCount <= 0){
            return ;
        }
        const updateCount = oldCount - 1 ;
        const updateIngredients = {...this.state.ingredients} ;
        updateIngredients[type] = updateCount ;
        const priceAdd = INGREDIENTS_PRICE[type];
        const oldPrice  = this.state.totalPrice ;
        const newPrice = oldPrice - priceAdd ;
        this.setState({
            ingredients : updateIngredients ,
            totalPrice : newPrice
        });
    }
    

    render(){
        const disabledInfo = { ...this.state.ingredients} ;
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        };
        let isPurchaseable = false ;
        const ingredientsArray =  Object.entries(this.state.ingredients).flatMap(([k, v]) => Array(v).fill(k));
        if(ingredientsArray.length !== 0){
            isPurchaseable= true ;
        }
        return(
            <Fragment>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <div>
                    <Burger  ingredients = {this.state.ingredients}/>
                </div>
                <div>
                    <BuilderControls addIngredients = {this.addIngredients} removeIngredients={this.removeIngredients} price={this.state.totalPrice} isPurchaseable={isPurchaseable} disabled={disabledInfo} />
                </div>
            </Fragment>
        );
    }
}