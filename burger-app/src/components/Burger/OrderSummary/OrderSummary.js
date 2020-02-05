import React , {Fragment} from 'react' ;

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
            <p>Do you want to continue ?</p>
        </Fragment>

    );
}

export default orderSummary;