import React , {Fragment} from 'react' ;
import Button from '../../UI/Button/Button';

const orderSummary = props =>{
    return(
        <Fragment>
            <h1>Your Order Summary is : </h1>
            <ul>
                <li>Salad : {props.ingredients.Salad} </li>
                <li>Meat : {props.ingredients.Meat}</li>
                <li>Cheese : {props.ingredients.Cheese}</li>
                <li>Bacon : {props.ingredients.Bacon}</li>
            </ul>
            <h3>Your total price is : Rs. {props.totalPrice}</h3>
            <p>Do you want to continue ?</p>
            <Button btnType="danger" clicked={props.hideModal}>Cancel</Button>
            <Button btnType="success" clicked={props.continue}>Continue</Button>
        </Fragment>

    );
}

export default orderSummary;