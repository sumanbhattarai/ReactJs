import React from 'react';
import Style from './BurgerIngredients.module.css';
import PropTypes from 'prop-types' ;

const burgerIngredients = props =>{
    let ingredients = null ;
    switch(props.type){
        case('bread-bottom'):
            ingredients = <div className={Style.BreadBottom}></div>
            break ;
        case('bread-top'):
            ingredients = (
                <div className={Style.BreadTop}>
                    <div className={Style.Seeds1}></div>
                    <div className={Style.Seeds2}></div>
                </div>
            );
            break ;
        case('meat'):
            ingredients = <div className={Style.Meat}></div>
            break ;
        case('cheese'):
            ingredients = <div className={Style.Cheese}></div>
            break;
        case('bacon'):
            ingredients = <div className={Style.Bacon}></div>
            break ;
        case('salad'):
            ingredients = <div className={Style.Salad}></div>
            break ;
        default : 
            ingredients = null ;
    }
    return ingredients ;
}

burgerIngredients.propTypes = {
    type : PropTypes.string.isRequired
}

export default burgerIngredients ;