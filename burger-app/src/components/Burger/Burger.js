import React from 'react';
import Style from './Burger.module.css' ;
import BurgerIngredients from './BurgerIngredients/BurgerIngredients' ;

const burger = props => {
    return(
        <div className = {Style.burgerBox}>
            <BurgerIngredients type="bread-top"/>
            <BurgerIngredients type="salad"/>
            <BurgerIngredients type="cheese" />
            <BurgerIngredients type="meat"/>
            <BurgerIngredients type="bacon"/>
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}
export default burger ;