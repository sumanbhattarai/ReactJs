import React from 'react'; 

const weather = props =>{
    const rainingPercent = ()=>{
        const percent = (Number(props.rainingChance))*100 ;
        return percent ;
    }
    return(
        <div>
            <h2>Weather Detail of {props.location} is : </h2>
            <ol>
                <li><b>Temperature : </b> {props.temperature} </li>
                <li><b>Raining Chances : </b> {rainingPercent()}</li>
            </ol>
        </div>
    );
}

export default weather ;