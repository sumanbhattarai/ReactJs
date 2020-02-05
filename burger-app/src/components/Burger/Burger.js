import React from 'react';
import Style from './Burger.module.css' ;
import BurgerIngredients from './BurgerIngredients/BurgerIngredients' ;

const burger = props => {
    const ingredientsArray =  Object.entries(props.ingredients).flatMap(([k, v]) => Array(v).fill(k));
    const ingredientsUI = ingredientsArray.map((ingredientsArray ,index)=>{
        return <BurgerIngredients key={index} type={ingredientsArray}/>
    });
    return(
        <div className = {Style.burgerBox}>
            <BurgerIngredients type="bread-top"/>
            {ingredientsUI}
            {/* <BurgerIngredients type="salad"/>
            <BurgerIngredients type="cheese" />
            <BurgerIngredients type="meat"/>
            <BurgerIngredients type="bacon"/> */}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}
export default burger ;