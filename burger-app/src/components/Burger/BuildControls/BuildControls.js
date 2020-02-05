import React from 'react' ;
import Style from './BuildControls.module.css' ;
import BuildControl from './BuildControl/BuildControl' ;

const controls = [
    { label : 'Salad' , type : 'Salad'} ,
    {label : 'Meat' , type : 'Meat'} ,
    {label : 'Cheese' , type: 'Cheese'} ,
    {label : 'Bacon' , type : 'Bacon'}
];
const buildControls = props=>{
    return(
        <div className={Style.buildControls}>
            <p>Current Price : <strong>Rs. {props.price}</strong></p>
            {controls.map(el => {
                return <BuildControl 
                key={el.label} 
                label={el.label} 
                add = {()=>{props.addIngredients(el.type)}}
                remove ={()=>{props.removeIngredients(el.type)}}
                disabled = {props.disabled[el.type]}
                />
            })}
            <button className={Style.OrderButton} disabled={!props.isPurchaseable}>Order Now</button>
        </div>
    );
} 

export default buildControls ;